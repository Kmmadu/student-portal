import React from "react";
import './Shop.css';

function Shop(){
    return (
        <div className="main">
                  {/* <!-- Search Container --> */}
        <section class="search-container">
            <h1>Search Products</h1>
            <div class="search-box">
                <input type="text" placeholder="Search for products..." />
                <button type="submit">Search</button>
            </div>
        </section>
 {/* <!-- Category Icons Section --> */}
<section class="category-section">
    <div class="container">
        <h2 class="category-header">Categories</h2>
        <div class="category-icons">
            <div class="category-icon">
                <a href="sell.html">
                    <img src={process.env.PUBLIC_URL + "/sell1.png"} alt="Place ads" />
                    <p>Place ads</p>
                </a>
            </div>
            <div class="category-icon">
                <a href="phones.html">
                    <img src={process.env.PUBLIC_URL + "/phone.png"} alt="Phones"/>
                    <p>Phones</p>
                </a>
            </div>
            <div class="category-icon">
                <a href="electronics.html">
                    <img src={process.env.PUBLIC_URL + "/electronic.png"} alt="Electronic"/>
                    <p>Electronic</p>
                </a>
            </div>
            <div class="category-icon">
                <a href="fashion.html">
                    <img src={process.env.PUBLIC_URL + "/fashion.png"} alt="Fashion"/>
                    <p>Fashion</p>
                </a>
            </div>
            <div class="category-icon">
                <a href="furnitures.html">
                    <img src={process.env.PUBLIC_URL + "/furnitures.png"} alt="Furnitures"/>
                    <p>Furnitures</p>
                </a>
            </div>
            <div class="category-icon">
                <a href="vehicles.html">
                    <img src={process.env.PUBLIC_URL + "/vehicle.png"} alt="Vehicles"/>
                    <p>Vehicles</p>
                </a>
            </div>
        </div>
    </div>
</section>
        {/* <!-- Trending Ads Section --> */}
<section class="trending-section">
    <div class="container">
        <h2>Trending Ads</h2>
        <div class="trending-ads">
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product1.jpg"} alt="Product 1"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Iphone X</p>
                    <p class="product-location">Lagos, Nigeria</p>
                    <p class="product-price">₦245,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product2.jpg"} alt="Product 2"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Iphone XR</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦413,408</p>
                    <p class="product-condition">Used</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product3.jpg"} alt="Product 3"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Macbook air</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦600,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product4.jpg"} alt="Product 4"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Macbook</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦589,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product5.jpg"} alt="Product 5"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Ferrari</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦30,000,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product6.jpg"} alt="Product 6"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">2024 Mercedes</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦45,000,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product7.jpg"} alt="Product 7"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Bugatti</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦39,000,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product8.jpg"} alt="Product 8"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Cruisers bike</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">12,000,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src= {process.env.PUBLIC_URL + "/Product9.jpg"}alt="Product 9"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Sport bike</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦24,000,000</p>
                    <p class="product-condition">Used</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product10.jpg"} alt="Product 10"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Gown </p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦90,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product11.jpg"} alt="Product 11"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Wedding gown</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦101,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product12.jpg"} alt="Product 12"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Dress shirt</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦30,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product13.jpg"} alt="Product 13"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Shirt</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦45,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product14.jpg"} alt="Product 14"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">6x6 bed</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦250,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
            <div class="ad">
                <div class="ad-image">
                    <img src={process.env.PUBLIC_URL + "/Product15.jpg"} alt="Product 15"/>
                </div>
                <div class="ad-details">
                    <p class="product-name">Furnitures</p>
                    <p class="product-location">Abuja, Nigeria</p>
                    <p class="product-price">₦450,000</p>
                    <p class="product-condition">New</p>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    );

}


export default Shop;