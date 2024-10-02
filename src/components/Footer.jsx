// components/Footer.jsx
import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="contact-details">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:info@eventcenter.com">info@eventcenter.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                </div>
                <div className="newsletter">
                    <h3>Subscribe to Our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
            {/* <p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p> */}
                <p>&copy; 2024 Event Center. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
