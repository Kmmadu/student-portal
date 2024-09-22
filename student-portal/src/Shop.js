import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './Shop.css';

const Shop = () => {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, type: 'phones', img: process.env.PUBLIC_URL + "/Product1.jpg", name: 'Iphone X', location: 'Lagos, Nigeria', price: '₦245,000', condition: 'New' },
        { id: 2, type: 'phones', img: process.env.PUBLIC_URL + "/Product2.jpg", name: 'Iphone XR', location: 'Abuja, Nigeria', price: '₦413,408', condition: 'Used' },
        { id: 3, type: 'electronics', img: process.env.PUBLIC_URL + "/Product3.jpg", name: 'Macbook Air', location: 'Abuja, Nigeria', price: '₦600,000', condition: 'New' },
        { id: 4, type: 'electronics', img: process.env.PUBLIC_URL + "/Product4.jpg", name: 'Macbook', location: 'Abuja, Nigeria', price: '₦589,000', condition: 'New' },
        { id: 5, type: 'vehicles', img: process.env.PUBLIC_URL + "/Product5.jpg", name: 'Ferrari', location: 'Abuja, Nigeria', price: '₦30,000,000', condition: 'New' },
        { id: 6, type: 'vehicles', img: process.env.PUBLIC_URL + "/Product6.jpg", name: '2024 Mercedes', location: 'Abuja, Nigeria', price: '₦45,000,000', condition: 'New' },
        { id: 7, type: 'vehicles', img: process.env.PUBLIC_URL + "/Product7.jpg", name: 'Bugatti', location: 'Abuja, Nigeria', price: '₦39,000,000', condition: 'New' },
        { id: 8, type: 'vehicles', img: process.env.PUBLIC_URL + "/Product8.jpg", name: 'Cruiser Bike', location: 'Abuja, Nigeria', price: '₦12,000,000', condition: 'New' },
        { id: 9, type: 'fashion', img: process.env.PUBLIC_URL + "/Product10.jpg", name: 'Gown', location: 'Abuja, Nigeria', price: '₦90,000', condition: 'New' },
        { id: 10, type: 'fashion', img: process.env.PUBLIC_URL + "/Product11.jpg", name: 'Wedding Gown', location: 'Abuja, Nigeria', price: '₦101,000', condition: 'New' },
        { id: 11, type: 'furniture', img: process.env.PUBLIC_URL + "/Product14.jpg", name: '6x6 Bed', location: 'Abuja, Nigeria', price: '₦250,000', condition: 'New' },
        { id: 12, type: 'furniture', img: process.env.PUBLIC_URL + "/Product15.jpg", name: 'Furnitures', location: 'Abuja, Nigeria', price: '₦450,000', condition: 'New' },
    ];


    const filterSelection = (category) => {
        setSelectedFilter(category);
    };

    const filteredProducts = products.filter(
        (product) => selectedFilter === 'all' || product.type === selectedFilter
    );

    // Navigate to PlaceAd page
    const handlePlaceAdClick = () => {
        navigate('/placeads');
    };

    // Add to Cart: Check if the user is logged in first
    const handleAddToCart = (product) => {
        const userId = localStorage.getItem('userId');  // Check if user is logged in
        if (userId) {
            // Get the current cart from localStorage or initialize an empty array
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Add the new product to the cart
            const updatedCart = [...storedCart, product];
            
            // Update the cart in localStorage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            
            alert(`${product.name} has been added to your cart.`);
            navigate('/cart');  // Navigate to Cart page
        } else {
            // User is not logged in, prompt them to log in
            alert('Please log in to add items to your cart.');
            navigate('/signin');
        }
    };
    

    return (
        <div className="main">
            {/* Search Container */}
            <section className="search-container">
                <h1>Search Products</h1>
                <div className="search-box">
                    <input type="text" placeholder="Search for products..." />
                    <button type="submit">Search</button>
                </div>
            </section>

            {/* Place ads button */}
            <div className="category-icon" onClick={handlePlaceAdClick}>
                <img src={process.env.PUBLIC_URL + "/sell1.png"} alt="Place ads" />
                <p>Place ads</p>
            </div><br/><br/>

            {/* Filter Buttons */}
            <section className="shop-filter">
                <div className="filter-options">
                    <button className="filter-btn" onClick={() => filterSelection('all')}>All</button>
                    <button className="filter-btn" onClick={() => filterSelection('phones')}>Phones</button>
                    <button className="filter-btn" onClick={() => filterSelection('electronics')}>Electronics</button>
                    <button className="filter-btn" onClick={() => filterSelection('vehicles')}>Vehicles</button>
                    <button className="filter-btn" onClick={() => filterSelection('fashion')}>Fashion</button>
                    <button className="filter-btn" onClick={() => filterSelection('furniture')}>Furniture</button>
                </div>
            </section>

            {/* Product Listings */}
            <section className="product-list">
                <div className="container product-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className={`product ${product.type}`}>
                            <img src={product.img} alt={product.name} />
                            <div className="product-details">
                                <h2>{product.name}</h2>
                                <p>Location: {product.location}</p>
                                <p className="price">{product.price}</p>
                                <p>Condition: {product.condition}</p>
                                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Shop;
