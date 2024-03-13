import React from 'react';
import './DestinationsSection.css'; // Import CSS file for styling
import paris from './paris.jpg';
import rome from './Rome.jpg';
import nyc from './Nyc.jpg';
import Bali from './Bali.jpg';
import Barcelona from './Barcelona.jpg';
import Dubai from './Dubai.jpg';

function DestinationsSection() {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-card">
        <img src={paris} alt="Destination 1" className="destination-image" />
        <h3>Paris</h3>
        <p>Known as the "City of Love," Paris boasts iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Visitors can enjoy romantic walks along the Seine River, savor French cuisine at sidewalk cafes, and explore world-class art collections.</p>
      </div>
      <div className="destination-card">
        <img src={rome} alt="Destination 2" className="destination-image" />
        <h3>Rome</h3>
        <p>As the capital of the Roman Empire, Rome is steeped in history and architectural wonders. Visitors can explore ancient ruins like the Colosseum and Roman Forum, marvel at Renaissance masterpieces in Vatican City, and indulge in delicious Italian cuisine.</p>
      </div>
      <div className="destination-card">
        <img src={nyc} alt="Destination 3" className="destination-image" />
        <h3>New York City</h3>
        <p>A bustling metropolis filled with iconic landmarks, cultural diversity, and endless entertainment options, New York City is a vibrant destination for travelers. Visitors can explore Times Square, walk through Central Park, and enjoy Broadway shows and world-class dining.</p>
      </div>
      <div className="destination-card">
        <img src={Bali} alt="Destination 4" className="destination-image"/>
        <h3>Bali</h3>
        <p>Known for its lush landscapes, vibrant culture, and spiritual atmosphere, Bali is a popular destination for relaxation and adventure. Visitors can surf on pristine beaches, hike through rice terraces, and experience Balinese rituals and ceremonies.</p>
      </div>
      <div className="destination-card">
        <img src={Barcelona} alt="Destination 5" className="destination-image" />
        <h3>Barcelona</h3>
        <p>A vibrant city famous for its unique architecture, lively street culture, and Mediterranean cuisine, Barcelona offers something for every traveler. Visitors can marvel at the architectural wonders of Antoni Gaudí, stroll along the bustling Las Ramblas, and relax on beautiful beaches like Barceloneta.</p>
      </div>
      <div className="destination-card">
        <img src={Dubai} alt="Destination 6" className="destination-image" />
        <h3>Dubai</h3>
        <p>Known for its futuristic skyline, luxury shopping malls, and desert adventures, Dubai is a modern and cosmopolitan city. Visitors can admire the world's tallest building, Burj Khalifa, go dune bashing in the desert, and experience traditional Arabian hospitality.</p>
      </div>
      {/* We can add more destination cards as needed */}
    </section>
  );
}

export default DestinationsSection;

