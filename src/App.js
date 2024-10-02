// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage.jsx';
import HallReservation from './pages/HallReservation';
import CartPage from './pages/CartPage';
import ThankYouPage from './pages/ThankYouPage';
import Gallery from './pages/Gallery.jsx';
// import Gallery from './assests';
import Building from './pages/Building';
import AboutUs from './pages/AboutUs'; // Import AboutUs

function App() {
    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/booking/hall-reservation" element={<HallReservation />} />
                    <Route path="/booking/cart" element={<CartPage />} />
                    <Route path="/booking/thank-you" element={<ThankYouPage />} />
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="/building" element={<Building />} />
                    <Route path="/about-us" element={<AboutUs />} /> {/* Add AboutUs Route */}
                </Routes>
            </div>
            {/* <div>
                <Gallery/>
                </div> */}
            <Footer />
        </Router>
    );
}

export default App;
