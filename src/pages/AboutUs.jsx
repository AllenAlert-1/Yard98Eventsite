// src/pages/AboutUs.jsx
import React from 'react';
import './aboutus.css';

function AboutUs() {
    return (
        <div className="about-us-page">
            <h1>About Us</h1>
            
            <section className="about-section">
                <h2>What We Do</h2>
                <p>
                    At Event Center, we specialize in hosting a variety of events, from elegant weddings to corporate conferences. Our state-of-the-art facilities and dedicated team ensure that every event is executed flawlessly.
                </p>
            </section>

            <section className="about-section">
                <h2>Who We Are</h2>
                <p>
                    We are a team of passionate professionals committed to providing top-notch services. With years of experience in event management, our goal is to create memorable experiences for our clients.
                </p>
            </section>

            <section className="about-section">
                <h2>Details About Us</h2>
                <p>
                    Located in the heart of the city, our event center boasts modern amenities, spacious halls, and exquisite decor. We cater to events of all sizes, ensuring that each one receives personalized attention.
                </p>
            </section>

            <section className="about-section">
                <h1>Our CEO</h1>
                <div className="ceo-section">
                    <img src="/images/ceo.jpg" alt="CEO" className="ceo-image" />
                    <div className="ceo-info">
                        <h3>Jane Doe</h3>
                        <p>
                            Jane Doe, our CEO, has over 20 years of experience in the event management industry. Her visionary leadership and dedication to excellence have been instrumental in establishing Event Center as a premier venue.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>Why Choose Us</h2>
                <p>
                    Choosing Event Center means opting for reliability, elegance, and unparalleled service. We go above and beyond to meet your needs, ensuring that your event is not only successful but also unforgettable.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;
