
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventRegistration.css'; // Import CSS file for styling

const EventRegistration = () => {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [userId, setUserId] = useState(''); // Assuming user is logged in and has an ID

  useEffect(() => {
    // Fetch events from the server
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
    
    // Fetch user's registered events
    fetchUserRegistrations();
  }, []);

  const fetchUserRegistrations = () => {
    // Fetch user's registered events from the server based on userId
    axios.get(`http://localhost:5000/api/user/${userId}/registrations`)
      .then(response => setRegisteredEvents(response.data))
      .catch(error => console.error(error));
  };

  const handleRegister = (eventId) => {
    // Register user for an event
    axios.post(`http://localhost:5000/api/events/${eventId}/register`, { userId })
      .then(response => {
        // Update registered events list
        fetchUserRegistrations();
      })
      .catch(error => console.error(error));
  };

  const handleUnregister = (eventId) => {
    // Unregister user from an event
    axios.delete(`http://localhost:5000/api/events/${eventId}/unregister`, { userId })
      .then(response => {
        // Update registered events list
        fetchUserRegistrations();
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="event-registration-container">
      <h2 style={{color:'darkblue', textAlign:'center'}} >Event Registration</h2>
      <div className="event-list">
        {events.map(event => (
          <div key={event._id} className="event-card">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            {/* <p>Description: {event.description}</p> */}
            {registeredEvents.find(registration => registration.eventId === event._id) ? (
              <button onClick={() => handleUnregister(event._id)}>Unregister</button>
            ) : (
              <button onClick={() => handleRegister(event._id)}>Register</button>
            )}
          </div>
        ))}
      </div>
      {/* <h2>Upcoming Events</h2> */}
      <div className="registered-event-list">
        {registeredEvents.map(registration => (
          <div key={registration._id} className="registered-event-card">
            <h3>{registration.event.title}</h3>
            <p>Date: {registration.event.date}</p>
            {/* Add more event details if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventRegistration;

