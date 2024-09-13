import React, { useState } from 'react';
import './SignIn.css';
import { Link, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {/* <label>Email</label> */}
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            {/* <label>Password</label> */}
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p>
          {/* Don't have an account? <a href="/signup" className="signup-link">Sign Up</a> */}
          <Link to="/signup">Don't have an account? Sign up here</Link>
        </p>
      </div>
      <Routes>
          <Route path="/signin" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default SignIn;
