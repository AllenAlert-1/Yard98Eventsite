// pages/CartPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cartpage.css';

function CartPage() {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/booking/thank-you');
    };

    return (
        <div className="cart-page">
            <h1>Your Booking Cart</h1>
            <div className="cart-details">
                <p><strong>Selected Hall:</strong> Grand Hall</p>
                <p><strong>Date:</strong> October 15, 2024</p>
                <p><strong>Guests:</strong> 150</p>
                <button onClick={handleCheckout}>Complete Booking</button>
            </div>
        </div>
    );
}

export default CartPage;
