import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './PlaceAd.css';

function PlaceAd() {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState(null);
    const [productName, setProductName] = useState('');  // New field: Product Name
    const [description, setDescription] = useState('');  // New field: Description
    const [price, setPrice] = useState('');  // New field: Price
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            navigate('/signin');  // Redirect to login page if not logged in
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare form data for submission
        const formData = new FormData();
        formData.append('category', category);
        formData.append('location', location);
        formData.append('photo', photo);
        formData.append('product_name', productName);  // Include Product Name
        formData.append('description', description);  // Include Description
        formData.append('price', price);  // Include Price
        formData.append('user_id', localStorage.getItem('userId'));  // Send user ID with the form

        try {
            const response = await fetch('http://127.0.0.1:5000/place_ad', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Ad placed successfully:', data.message);
                navigate('/myads');  // Redirect to MyAds page
            } else {
                console.error('Failed to place ad:', data.error);
            }
        } catch (error) {
            console.error('Error submitting ad:', error);
        }
    };

    return (
        <div className="body">
            <div className="Ad-container">
                <div className="post-ad-header">
                    <h2>Post ad</h2>
                </div>

                <form className="post-ad-form" onSubmit={handleSubmit}>
                    

                    <div className="form-group">
                        <label htmlFor="category">Category*</label>
                        <select 
                            id="category" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Accommodations">Accommodations</option>
                            <option value="Phones">Phones</option>
                            <option value="Electronic devices">Electronic devices</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Cars">Cars</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Select Location*</label>
                        <select 
                            id="location" 
                            value={location} 
                            onChange={(e) => setLocation(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Select Location</option>
                            <option value="abia">Abia</option>
                            <option value="anambra">Anambra</option>
                            <option value="enugu">Enugu</option>
                            <option value="ebonyi">Ebonyi</option>
                            <option value="imo">Imo</option>
                        </select>
                    </div>
                    {/* Product Name Field */}
                    <div className="form-group">
                        <label htmlFor="productName">Product Name*</label>
                        <input 
                            type="text" 
                            id="productName" 
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </div>
                      {/* Description Field */}
                      <div className="form-group">
                        <label htmlFor="description">Description*</label>
                        <textarea 
                            id="description" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    {/* Price Field */}
                    <div className="form-group">
                        <label htmlFor="price">Price*</label>
                        <input 
                            type="number" 
                            id="price" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="photo">Add photo</label>
                        <div className="photo-upload">
                            <input 
                                type="file" 
                                id="photo" 
                                accept=".jpg, .png" 
                                onChange={(e) => setPhoto(e.target.files[0])} 
                                required 
                            />
                            <p>Supported formats are *.jpg and *.png</p>
                        </div>
                    </div>

                    <button type="submit" className="next-btn">Next</button>
                </form>
            </div>
        </div>
    );
}

export default PlaceAd;
