import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Prostyle.css'; 

function Profile({ userId, userName, userEmail }) {
  const [notifications, setNotifications] = useState(0);  
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    address: {
      name: '',
      location: '',
      phone: ''
    }
  });
  const [isEditing, setIsEditing] = useState(false);  
  const [addressForm, setAddressForm] = useState(user.address);  
  const navigate = useNavigate();  

  // Fetch user data from the backend every time the component is rendered
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/profile/${userId}`);  // Fetch user data based on userId
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);  // Set user data in state
          setAddressForm(userData.address);  // Set address in the form
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();  // Fetch the data
  }, [userId]);  // Fetch data every time userId changes

  // Handle Logout
  const handleLogout = () => {
    console.log("User logged out");

    // Check if token exists before removing it
    const token = localStorage.getItem('authToken');
    if (token) {
      // Remove the token from localStorage
      localStorage.removeItem('authToken');
      console.log("Token removed:", localStorage.getItem('authToken'));  // Should print `null`
    } else {
      console.log("No token found in localStorage.");
    }

    // Clear user-related state
    setUser(null);
    setNotifications(0);
    setAddressForm({
      location: '',
      phone: ''
    });

    // Redirect to the login page
    navigate('/signin');
  };

  const handleEditAddress = async (e) => {
    e.preventDefault();
    try {
      // Send the updated address to the backend
      const response = await fetch(`http://127.0.0.1:5000/update_address/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addressForm),  
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);  
        setUser((prevUser) => ({
          ...prevUser,
          address: addressForm 
        }));
        setIsEditing(false);  
      } else {
        console.error('Failed to update address');
      }
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return (
    <div className="profile-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>My Account</h2>
        </div>
        <ul className="sidebar-menu">
          <li>Orders</li>
          <li>Inbox <span className="notification">{notifications}</span></li>
          <li>Chart</li>
          <li>Saved Items</li>
          <li>My Ads</li>
          <li>Address Book</li>
        </ul>
        <div className="logout">
          <button id="logout-btn" onClick={handleLogout}>LOGOUT</button>
        </div>
      </aside>

      <main className="account-overview">
        <h2>Account Overview</h2>
        <div className="account-details">
          <h3>Account Details</h3>
          <p><strong>{userName}</strong></p>
          <p>{userId}</p>
          <p>{userEmail}</p>
        </div>

        <div className="address-book">
          <h3>Address Book</h3>
          {isEditing ? (
            <form onSubmit={handleEditAddress}>
              <label>
                Location: 
                <input
                  type="text"
                  value={addressForm.location}
                  onChange={(e) => setAddressForm({ ...addressForm, location: e.target.value })}
                />
              </label>
              <label>
                Phone number: 
                <input
                  type="text"
                  value={addressForm.phone}
                  onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          ) : (
            <>
              <p><strong>Name: </strong>{userName}</p>
              <p>Your default address: {user.address.location}</p>
              <p>Phone number: {user.address.phone}</p>
              <button className="edit-address" onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;
