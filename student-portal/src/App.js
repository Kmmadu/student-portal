import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/studenthub.png"} alt="StudentHub Logo" className="logo" />
          </div>
          <nav className="nav">
            <Link to="/">Accommodations</Link>
            <Link to="/">Services</Link>
            <Link to="/">Shop</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Community</Link>
            <Link to="/signin">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
