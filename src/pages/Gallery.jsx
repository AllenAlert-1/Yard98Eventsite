// pages/GalleryPage.jsx
import './gallery.css';
import event1 from '../assests/images/event1.jpg';
import event2 from '../assests/images/event2.jpg';
import event3 from '../assests/images/event3.jpg';
import event4 from '../assests/images/event4.jpg';
import event5 from '../assests/images/event5.jpg';
import event6 from '../assests/images/event6.jpg';
import event7 from '../assests/images/event7.jpg';
import event8 from '../assests/images/event8.jpg';
import event9 from '../assests/images/event9.jpg';
import event10 from '../assests/images/event10.jpg';
import event11 from '../assests/images/event11.jpg';
import event12 from '../assests/images/event12.jpg';



const images = [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12];
//     'event1.jpg',
//     'event2.jpg',
//     'event3.jpg',
//     'event4.jpg',
//     'event5.jpg'
//   ];
  
  function GalleryPage() {
    return (
      <div className="gallery-container">
        <h1 className="gallery-title">Our Event Gallery</h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Event ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default GalleryPage;