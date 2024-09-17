import React from "react";
import './PlaceAd.css';

function PlaceAd(){
    return(
        <div className="body">
            <div class="Ad-container">
        <div class="post-ad-header">
            <h2>Post ad</h2>
        </div>

        <form class="post-ad-form">
            <div class="form-group">
                <label for="category">Category*</label>
                <select id="category">
                    <option value="" disabled selected>Select Category</option>
                    <option value="category1">Accommodations</option>
                    <option value="category2">Phones</option>
                    <option value="category3">Electronic devices</option>
                    <option value="category4">Clothes</option>
                    <option value="category5">Cars</option>
                </select>
            </div>

            <div class="form-group">
                <label for="location">Select Location*</label>
                <select id="location">
                    <option value="" disabled selected>Select Location</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                </select>
            </div>

            <div class="form-group">
                <label for="photo">Add photo</label>
                <div class="photo-upload">
                    <input type="file" id="photo" accept=".jpg, .png"/>
                    <p>Supported formats are *.jpg and *.png</p>
                </div>
            </div>

            <button type="submit" class="next-btn" disabled>Next</button>
        </form>
    </div>
        </div>
    );
}

export default PlaceAd;