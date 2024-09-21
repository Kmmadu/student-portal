import React, { useState, useEffect } from 'react';
import './MyAds.css';

function MyAds() {
    const [ads, setAds] = useState([]);

    // Fetch user's ads when the component mounts
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await fetch(`http://127.0.0.1:5000/user_ads/${userId}`);
                const data = await response.json();

                if (response.ok) {
                    setAds(data.ads);  // Set ads data in state
                } else {
                    console.error('Failed to fetch ads:', data.error);
                }
            } catch (error) {
                console.error('Error fetching ads:', error);
            }
        };

        fetchAds();
    }, []);

    return (
        <div className="ad-body">
            <section className='my-ads-container'>
            <h2>My Ads</h2>
            {ads.length === 0 ? (
                <p>No ads found.</p>
            ) : (
                <ul className="ads-list">
                    {ads.map(ad => (
                        <li key={ad._id} className="ad-item">
                            <img src={`http://127.0.0.1:5000/uploads/${ad.photo}`} alt="Ad" className="ad-photo" />

                            <div className="ad-details">
                                <p><strong>Category:</strong> {ad.category}</p>
                                <p><strong>Location:</strong> {ad.location}</p>
                                <p><strong>Product name:</strong> {ad.product_name}</p>
                                <p><strong>Price:</strong> {ad.price}</p>
                                <p><strong>Status:</strong> {ad.status}</p>  
                                {ad.status === 'Awaiting approval' && <p>Awaiting approval by admin</p>}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            </section>
        </div>
    );
}

export default MyAds;
