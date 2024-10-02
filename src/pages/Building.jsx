import React from 'react';
import './building.css'; 

const Building = () => {
  return (
    <div className="building-container">
      <h1 className="building-title">Our Event Center Amenities</h1>
      <div className="building-grid">
        <div className="building-item">
          <img src={require('../assests/images/interiorview.jpeg')} alt="Spacious Hall" className="building-image" />
          <p className="building-description">Spacious Hall for Large Events</p>
        </div>
        <div className="building-item">
          <img src={require('../assests/images/exteriorview.jpeg')} alt="Exterior View" className="building-image" />
          <img src={require('../assests/images/exteriorview2.jpeg')} alt="Exterior View 2" className="building-image" />
          <p className="building-description">Beautifully Designed Exterior</p>
        </div>
        <div className="building-item">
          <img src={require('../assests/images/interiorview2.jpeg')} alt="Luxury Seating" className="building-image" />
          <p className="building-description">Luxury Seating Arrangements</p>
        </div>
        <div className="building-item">
          <img src={require('../assests/images/gardenview2.jpeg')} alt="Garden View" className="building-image" />
          <img src={require('../assests/images/gardenview3.jpeg')} alt="Garden View 2" className="building-image" />
          <p className="building-description">Scenic Garden View for Outdoor Events</p>
        </div>
        <div className="building-item">
          <img src={require('../assests/images/Restroom.jpg')} alt="Restroom" className="building-image" />
          <p className="building-description">Well Managed Restroom for Guests</p>
        </div>
        <div className="building-item">
          <img src={require('../assests/images/viplounge.jpeg')} alt="VIP Lounge" className="building-image" />
          <img src={require('../assests/images/viploungue2.jpeg')} alt="VIP Lounge 2" className="building-image" />
          <p className="building-description">Exclusive VIP Lounge</p>
        </div>
        <div className="building-item">
          <img src={require('../assests/images/parkingspace.jpg')} alt="Parking Space" className="building-image" />
          <img src={require('../assests/images/parkingspace2.jpg')} alt="Parking Space" className="building-image" />
          <p className="building-description">Spacious Parking Area for Guests </p>
        </div>
        {/* Add more building-item sections for other amenities */}
      </div>
    </div>
  );
};

export default Building;
