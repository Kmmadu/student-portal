import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './PlaceAd.css';

function PlaceAd() {
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            navigate('/signin');  // Redirect to login page if not logged in
        }
    }, [navigate]);

    return(
        <div className="body">
            <div className="Ad-container">
                <div className="post-ad-header">
                    <h2>Post ad</h2>
                </div>

                <form className="post-ad-form">
                    <div className="form-group">
                        <label htmlFor="category">Category*</label>
                        <select id="category">
                            <option value="" disabled selected>Select Category</option>
                            <option value="category1">Accommodations</option>
                            <option value="category2">Phones</option>
                            <option value="category3">Electronic devices</option>
                            <option value="category4">Clothes</option>
                            <option value="category5">Cars</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Select Location*</label>
                        <select id="location">
                            <option value="" disabled selected>Select Location</option>
                            <option value="abia">Abia</option>
                            <option value="adamawa">Adamawa</option>
                            <option value="akwa-ibom">Akwa Ibom</option>
                            <option value="anambra">Anambra</option>
                            <option value="bauchi">Bauchi</option>
                            <option value="bayelsa">Bayelsa</option>
                            <option value="benue">Benue</option>
                            <option value="borno">Borno</option>
                            <option value="cross-river">Cross River</option>
                            <option value="delta">Delta</option>
                            <option value="ebonyi">Ebonyi</option>
                            <option value="edo">Edo</option>
                            <option value="ekiti">Ekiti</option>
                            <option value="enugu">Enugu</option>
                            <option value="gombe">Gombe</option>
                            <option value="imo">Imo</option>
                            <option value="jigawa">Jigawa</option>
                            <option value="kaduna">Kaduna</option>
                            <option value="kano">Kano</option>
                            <option value="katsina">Katsina</option>
                            <option value="kebbi">Kebbi</option>
                            <option value="kogi">Kogi</option>
                            <option value="kwara">Kwara</option>
                            <option value="lagos">Lagos</option>
                            <option value="nasarawa">Nasarawa</option>
                            <option value="niger">Niger</option>
                            <option value="ogun">Ogun</option>
                            <option value="ondo">Ondo</option>
                            <option value="osun">Osun</option>
                            <option value="oyo">Oyo</option>
                            <option value="plateau">Plateau</option>
                            <option value="rivers">Rivers</option>
                            <option value="sokoto">Sokoto</option>
                            <option value="taraba">Taraba</option>
                            <option value="yobe">Yobe</option>
                            <option value="zamfara">Zamfara</option>
                            <option value="fct">Federal Capital Territory (FCT)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="photo">Add photo</label>
                        <div className="photo-upload">
                            <input type="file" id="photo" accept=".jpg, .png"/>
                            <p>Supported formats are *.jpg and *.png</p>
                        </div>
                    </div>

                    <button type="submit" className="next-btn" disabled>Next</button>
                </form>
            </div>
        </div>
    );
}

export default PlaceAd;
