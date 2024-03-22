import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventDiscovery.css'; // Import CSS file for styling

const EventDiscovery = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the server
    axios.get('http://localhost:5000/api/events')
      .then(response => {
        setEvents(response.data);
        setFilteredEvents(response.data); // Initialize filteredEvents with all events
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    // Filter events based on search term
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchTerm, events]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="event-discovery-container">
      <h1 className="event-discovery-heading" style={{color:'darkblue'}}>Events</h1>
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="event-list1">
        {filteredEvents.map(event => (
          <div key={event._id} className="event-card1">
            <h3 className="event-title1">{event.title}</h3>
            {/* <p className="event-date1">Date: {event.date}</p> */}
            {/* <p className="event-description">Description: {event.description}</p> */}
            {/* Add more event details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDiscovery;
