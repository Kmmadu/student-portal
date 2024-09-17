import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';  
import Shop from './Shop';
import './App.css';
import Accommodation from './Accommodation';
import PlaceAd from './PlaceAd';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);     
  const [userName, setUserName] = useState('');  
  const [userEmail, setUserEmail] = useState('');   
  

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
            <Link to="/accommodations" onClick={() => setIsMenuOpen(false)}>Accommodations</Link>
            <HashLink to="/#explore-services" onClick={() => setIsMenuOpen(false)}>Services</HashLink>
            <Link to="/buy-and-sell" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <HashLink to="/#info-section" onClick={() => setIsMenuOpen(false)}>FAQs</HashLink>
            <Link to="/placeads" onClick={() => setIsMenuOpen(false)}>Place Ad</Link>
            
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
          {/* Pass setUserId and setUserName to SignIn component */}
          <Route 
            path="/signin" 
            element={<SignIn setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} setUserName={setUserName} setUserEmail={setUserEmail} />} 
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accommodations" element={<Accommodation />} />
          <Route path="/buy-and-sell" element={<Shop />} />
          <Route path="/placeads" element={<PlaceAd />} />
          {/* Pass userId and userName to Profile component */}
          <Route path="/profile" element={<Profile userId={userId} userName={userName} userEmail={userEmail} />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
