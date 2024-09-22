import React, { useEffect, useState } from 'react';
import './Cart.css'; 

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage when the component mounts
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    // Remove item from cart
    const handleRemoveFromCart = (indexToRemove) => {
        const updatedCartItems = cartItems.filter((item, index) => index !== indexToRemove);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));  // Update localStorage
    };

    return (
        <div className="cart-container"><br/><br/>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.img} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p>Location: {item.location}</p>
                                <p>Price: {item.price}</p>
                                <p>Condition: {item.condition}</p>
                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemoveFromCart(index)}
                                >
                                    Remove from Cart
                                </button>
                                <button
                                    className="checkout-btn"
                                >
                                    Check out
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
