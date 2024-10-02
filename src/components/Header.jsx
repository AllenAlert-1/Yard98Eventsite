// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="logo-link">Event Center</Link>
                </div>
                <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/booking/hall-reservation">Booking</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/building">Building</Link></li>
                        <li><Link to="/about-us">About Us</Link></li> {/* New About Us Link */}
                    </ul>
                </nav>
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
