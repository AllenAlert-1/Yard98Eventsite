// src/components/WelcomeSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';

function WelcomeSection() {
    return (
        <section className="hero">
            <video> src="hero-background.mp4" autoplay muted loop</video>
            <div className="hero-text">
                <h1>Welcome to Luxury at Our Event Center</h1>
                <p>We turn your dreams into unforgettable events.</p>
                <Link to="/about-us">
                    <button className="explore-btn">Learn More</button>
                </Link>
            </div>
        </section>
    );
}

export default WelcomeSection;
