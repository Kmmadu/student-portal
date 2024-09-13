import React, { useState } from 'react';
import './SignIn.css';
import { Link, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';

function SignUp() {
  const [fname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <input 
                type='text'
                placeholder='fullname'
                value={fname}
                onChange={(e) => setFullname(e.target.value)}
                required
                />
            </div>
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
          <button type="submit" className="login-btn">Sign Up</button>
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
