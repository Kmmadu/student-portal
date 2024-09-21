import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn({ setIsLoggedIn, setUserId, setUserName, setUserEmail }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // useNavigate for redirect

  const validate = () => {
    const newErrors = {};

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
        const response = await fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (!response.ok) {
          setErrors({ form: data.error });
        } else {
          setIsLoggedIn(true);  
          setUserId(data.user.id);  
          setUserName(data.user.fname);  
          setUserEmail(data.user.email);

          // Store user data in localStorage for persistence
          localStorage.setItem('authToken', data.token);  // Assuming you return a token
          localStorage.setItem('userId', data.user.id);
          localStorage.setItem('userName', data.user.fname);
          localStorage.setItem('userEmail', data.user.email);

          // Redirect to profile or previously requested page
          navigate('/profile');  
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrors({ form: 'An error occurred. Please try again.' });
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
        <h2>Log In</h2>
        {errors.form && <p className="error">{errors.form}</p>}
        <form onSubmit={handleSubmit}>
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
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <p>
          <Link to="/signup">Don't have an account? Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
