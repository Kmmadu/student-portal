import React, { useState } from 'react';
import './Accommodation.css'; 

const Accommodation = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const accommodations = [
    { id: 1, type: 'flat', img: 'flat_room1.jpg', title: 'Modern Flat with Beautiful Interior', location: 'City Center, 5 mins to Campus', price: '$550/month' },
    { id: 2, type: 'flat', img: 'flat_room2.jpg', title: '3 Bedroom Flat', location: 'Suburb, 10 mins to Campus', price: '$700/month' },
    { id: 3, type: 'flat', img: 'flat_room3.jpg', title: '3 Bedroom Flat', location: 'Suburb, 10 mins to Campus', price: '$700/month' },
    { id: 4, type: 'flat', img: 'flat_room4.jpg', title: '3 Bedroom Flat', location: 'Suburb, 10 mins to Campus', price: '$700/month' },
    { id: 5, type: 'flat', img: 'flat_room5.jpg', title: '3 Bedroom Flat', location: 'Suburb, 10 mins to Campus', price: '$700/month' },
    { id: 6, type: 'flat', img: 'flat_room6.jpg', title: '3 Bedroom Flat', location: 'Suburb, 10 mins to Campus', price: '$700/month' },
    { id: 7, type: 'single-room', img: 'single-room1.jpg', title: 'Single Room', location: 'Suburb, 10 mins to Campus', price: '$300/month' },
    { id: 8, type: 'single-room', img: 'single-room2.jpg', title: 'Single Room', location: 'Suburb, 10 mins to Campus', price: '$300/month' },
    { id: 9, type: 'single-room', img: 'single-room3.jpg', title: 'Single Room', location: 'Suburb, 10 mins to Campus', price: '$300/month' },
    { id: 10, type: 'single-room', img: 'single-room4.jpg', title: 'Single Room', location: 'Suburb, 10 mins to Campus', price: '$300/month' },
    { id: 11, type: 'single-room', img: 'single-room5.jpg', title: 'Single Room', location: 'Suburb, 10 mins to Campus', price: '$300/month' },
    { id: 12, type: 'single-room', img: 'single-room6.jpg', title: 'Single Room', location: 'Suburb, 10 mins to Campus', price: '$300/month' },
    { id: 13, type: 'selfcon', img: 'selfcon1.jpg', title: 'Self-contained Apartment', location: 'Downtown, 7 mins to Campus', price: '$450/month' },
    { id: 14, type: 'selfcon', img: 'selfcon2.jpg', title: 'Self-contained Apartment', location: 'Downtown, 7 mins to Campus', price: '$450/month' },
    { id: 15, type: 'selfcon', img: 'selfcon3.jpg', title: 'Self-contained Apartment', location: 'Downtown, 7 mins to Campus', price: '$450/month' },
    { id: 16, type: 'selfcon', img: 'selfcon4.jpg', title: 'Self-contained Apartment', location: 'Downtown, 7 mins to Campus', price: '$450/month' },
    { id: 17, type: 'selfcon', img: 'selfcon5.jpg', title: 'Self-contained Apartment', location: 'Downtown, 7 mins to Campus', price: '$450/month' },
    { id: 18, type: 'selfcon', img: 'selfcon6.jpg', title: 'Self-contained Apartment', location: 'Downtown, 7 mins to Campus', price: '$450/month' },
  ];

  const filterSelection = (category) => {
    setSelectedFilter(category);
  };

  const filteredListings = accommodations.filter(
    (listing) => selectedFilter === 'all' || listing.type === selectedFilter
  );

  return (
    <div>
      {/* Search Bar Section */}
      <section className="search-container">
        <h1>Search for Accommodation</h1>
        <div className="search-box">
          <input type="text" placeholder="Search for accommodation..." id="search-input" />
          <button type="submit" id="search-btn">Search</button>
        </div>
      </section>

      {/* Accommodation Filters */}
      <section className="accommodation-filter">
        <div className="filter-options">
          <button className="filter-btn" onClick={() => filterSelection('all')}>All</button>
          <button className="filter-btn" onClick={() => filterSelection('flat')}>Flat</button>
          <button className="filter-btn" onClick={() => filterSelection('single-room')}>Single Room</button>
          <button className="filter-btn" onClick={() => filterSelection('selfcon')}>Selfcon</button>
        </div>
      </section>

      {/* Accommodation Listings */}
      <section className="accommodation-list" id="accommodation-list">
        <div className="container accommodation-grid">
          {filteredListings.map((listing) => (
            <div key={listing.id} className={`listing ${listing.type}`}>
              <img src={listing.img} alt={listing.title} />
              <div className="listing-details">
                <h2>{listing.title}</h2>
                <p>Location: {listing.location}</p>
                <p className="price">{listing.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
