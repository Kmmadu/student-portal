from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure MongoDB connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/student_real_world"
mongo = PyMongo(app)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    # Validate data
    fname = data.get('fname')
    email = data.get('email')
    password = data.get('password')

    if not fname or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    # Check if user already exists
    existing_user = mongo.db.users.find_one({'email': email})
    if existing_user:
        return jsonify({'error': 'User already exists'}), 400

    # Hash the password for security
    hashed_password = generate_password_hash(password)

    # Insert user into the database
    mongo.db.users.insert_one({
        'fname': fname,
        'email': email,
        'password': hashed_password
    })

    return jsonify({'message': 'User registered successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True)
