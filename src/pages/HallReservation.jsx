// pages/HallReservation.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hallreservation.css';
import Event from "../assests/event.jpg";

function HallReservation() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/booking/cart');
    };

    return (
        <div className="hall-reservation">
           
            <div className='wrapper'>

            <form onSubmit={handleSubmit} className="reservation-form">
            <h1 className='wrap_h1'>Hall Reservation</h1>
                <div className="form-group">
                    <label htmlFor="hall">Select Hall:</label>
                    <select id="hall" required>
                        <option value="grand">Grand Hall</option>
                        <option value="banquet">Banquet Hall</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" required />
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Guests:</label>
                    <input type="number" id="guests" placeholder="Number of guests" required />
                </div>
                <button type="submit">Proceed to Cart</button>
            </form>
            <img src={Event} className='event-image' alt='event representation' />
            </div>
        </div>
    );
}

export default HallReservation;
