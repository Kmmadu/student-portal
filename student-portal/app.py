from flask import Flask, request, jsonify, send_from_directory
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from bson import ObjectId
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

# Configure MongoDB connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/student_real_world"
mongo = PyMongo(app)


# Path to store uploaded images
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Allowable image extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# signup route
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

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required.'}), 400

    user = mongo.db.users.find_one({'email': email})
    if not user:
        return jsonify({'error': 'User not found.'}), 404

    if not check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid password.'}), 401

    # Return the user's name, email and ID on successful login
    return jsonify({
        'message': 'Logged in successfully!',
        'user': {
            'id': str(user['_id']),  # Send user ID
            'fname': user['fname'],
            'email': user['email']
        }
    }), 200


# updating user address
@app.route('/update_address/<user_id>', methods=['PUT'])
def update_address(user_id):
    data = request.get_json()

    # Extract address details from the request body
    location = data.get('location')
    phone = data.get('phone')

    if not location or not phone:
        return jsonify({'error': 'Location and phone are required'}), 400

    # Update the user's address in the database
    mongo.db.users.update_one(
        {'_id': ObjectId(user_id)},
        {'$set': {'address.location': location, 'address.phone': phone}}
    )

    return jsonify({'message': 'Address updated successfully!'}), 200

# profile route
@app.route('/profile/<user_id>', methods=['GET'])
def get_profile(user_id):
    try:
        user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
        if not user:
            return jsonify({'error': 'User not found.'}), 404
        
        # Return the user profile data, including address
        return jsonify({
            'fullname': user['fname'],
            'email': user['email'],
            'address': user.get('address', {
                'location': '',
                'phone': ''
            })
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    


# Route to place ad
@app.route('/place_ad', methods=['POST'])
def place_ad():
    # Get form data
    category = request.form.get('category')
    location = request.form.get('location')
    product_name = request.form.get('product_name')
    description = request.form.get('description')
    price = request.form.get('price')
    user_id = request.form.get('user_id')  # Assuming the user ID is sent with the form data
    
    # Check for file and upload it
    if 'photo' not in request.files:
        return jsonify({'error': 'No photo uploaded'}), 400
    
    file = request.files['photo']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        # Insert ad into the database with "Awaiting approval" status
        mongo.db.ads.insert_one({
            'user_id': user_id,
            'product_name': product_name,  # Save product name
            'description': description,  # Save description
            'price': price,  # Save price
            'category': category,
            'location': location,
            'photo': filename,
            'status': 'Awaiting approval'  # Default status
        })

        return jsonify({'message': 'Ad placed successfully! Awaiting approval by admin.'}), 201

    return jsonify({'error': 'Invalid file type'}), 400


# route to fetch user ads
@app.route('/user_ads/<user_id>', methods=['GET'])
def user_ads(user_id):
    ads = mongo.db.ads.find({'user_id': user_id})
    ads_list = []
    for ad in ads:
        ads_list.append({
            '_id': str(ad['_id']),
            'category': ad['category'],
            'location': ad['location'],
            'price': ad['price'],
            'product_name': ad['product_name'],
            'photo': ad['photo'],
            'status': ad['status']
        })

    return jsonify({'ads': ads_list}), 200


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


if __name__ == '__main__':
    app.run(debug=True)







