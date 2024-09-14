import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';  
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/studenthub.png"} alt="StudentHub Logo" className="logo" />
          </div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Accommodations</Link>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>FAQs</Link>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Community</Link>
            
            {/* Checking login status */}
            {isLoggedIn ? (
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
            ) : (
              <>
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>Log In</Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </>
            )}
          </nav>

          {/* Hamburger Menu Button */}
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />  
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
