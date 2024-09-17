import React, { useState, useEffect } from "react";
import './Accommodation.css';

function Accommodation() {
  // State for listings and filtered category
  const [listingsData, setListingsData] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("all");

  // Data for accommodation listings
  const listings = [
    { type: "flat", img: "images/flat1.jpg", title: "2 Bedroom Flat", location: "Downtown, 5 mins to Campus", price: "$500/month" },
    { type: "flat", img: "images/flat2.jpg", title: "3 Bedroom Flat", location: "Suburb, 10 mins to Campus", price: "$700/month" },
    { type: "single-room", img: "images/single-room1.jpg", title: "Single Room", location: "Suburb, 10 mins to Campus", price: "$300/month" },
    { type: "selfcon", img: "images/selfcon1.jpg", title: "Self-contained Apartment", location: "Downtown, 7 mins to Campus", price: "$450/month" },
    // Add more data for other listings here...
  ];

  // Generate 100 listings by duplicating the data
  const generateListings = (count) => {
    const generatedListings = [];
    for (let i = 0; i < count; i++) {
      const listing = listings[i % listings.length]; // Cycle through the available listings
      generatedListings.push({
        type: listing.type,
        img: listing.img,
        title: `${listing.title} #${i + 1}`, // Add unique number to each title
        location: listing.location,
        price: listing.price,
      });
    }
    return generatedListings;
  };

  // Effect to initialize the listings data
  useEffect(() => {
    const generatedListings = generateListings(100); // Generate 100 listings
    setListingsData(generatedListings);
  }, []);

  // Filter accommodation types
  const filterSelection = (category) => {
    setFilteredCategory(category);
  };

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

      {/* Accommodation Filters with Images */}
      <section className="accommodation-filter">
        <div className="filter-options">
          <button className="filter-btn" onClick={() => filterSelection("all")}>
            <img src="images/all.jpg" alt="All" className="category-icon" />All
          </button>
          <button className="filter-btn" onClick={() => filterSelection("flat")}>
            <img src="images/flat1.jpg" alt="Flat" className="category-icon" />Flat
          </button>
          <button className="filter-btn" onClick={() => filterSelection("single-room")}>
            <img src="images/single-room1.jpg" alt="Single Room" className="category-icon" />Single Room
          </button>
          <button className="filter-btn" onClick={() => filterSelection("selfcon")}>
            <img src="images/selfcon1.jpg" alt="Selfcon" className="category-icon" />Selfcon
          </button>
        </div>
      </section>

      {/* Accommodation Listings */}
      <section className="accommodation-list" id="accommodation-list">
        <div className="container accommodation-grid">
          {/* Render filtered listings */}
          {listingsData
            .filter((listing) => filteredCategory === "all" || listing.type === filteredCategory)
            .map((listing, index) => (
              <div key={index} className={`listing ${listing.type}`}>
                <img src={listing.img} alt={listing.title} />
                <div className="listing-details">
                  <h2>{listing.title}</h2>
                  <p>Location: {listing.location}</p>
                  <p className="price">{listing.price}</p>
                  <p className="type">{listing.type}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Accommodation;
