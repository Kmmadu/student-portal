import React, { useState } from 'react';
import './SignIn.css';
import { Link, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';

function SignUp() {
  const [fname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!fname.trim()) newErrors.fname = 'Full name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
    if (!password) newErrors.password = 'Password is required.';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters.';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fname, email, password }),
        });

        const data = await response.json();
        if (!response.ok) {
          setErrors({ form: data.error });
        } else {
          setSuccessMessage(data.message);  // Set the success message
          setErrors({});  // Clear any previous errors
          // clear form
          setFullname(''); 
          setEmail('');
          setPassword('');
        }
      } catch (error) {
        console.error('Error during signup:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        {successMessage && <p className="success">{successMessage}</p>} 
        <form onSubmit={handleSubmit}>
          {errors.form && <p className="error">{errors.form}</p>}
          <div className="input-group">
            <input
              type="text"
              placeholder="Full name"
              value={fname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            {errors.fname && <p className="error">{errors.fname}</p>}
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p>
          <Link to="/signin">Already have an account? Log in here</Link>
        </p>
      </div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default SignUp;
