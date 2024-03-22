import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventInteraction.css'; // Import CSS file for styling

const EventInteraction = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState('');

  useEffect(() => {
    // Fetch discussions from the server
    axios.get('http://localhost:5000/api/discussions')
      .then(response => setDiscussions(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleNewDiscussionSubmit = () => {
    // Submit a new discussion
    axios.post('http://localhost:5000/api/discussions', { content: newDiscussion })
      .then(response => {
        // Add the new discussion to the list
        setDiscussions([...discussions, response.data]);
        // Clear the input field
        setNewDiscussion('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="event-interaction-container">
      <h2 style={{color: 'darkblue'}}>Event Interaction</h2>
      <div className="discussion-section">
        <h3 style={{color:'darkblue'}}>Discussion Forum</h3>
        <div className="discussion-list">
          {discussions.map(discussion => (
            <div key={discussion._id} className="discussion">
              <p>{discussion.content}</p>
            </div>
          ))}
        </div>
        <div className="new-discussion">
          <textarea
            placeholder="Start a new discussion..."
            value={newDiscussion}
            onChange={e => setNewDiscussion(e.target.value)}
          />
          <button onClick={handleNewDiscussionSubmit}>Post</button>
        </div>
      </div>
      {/* Add messaging, notifications, and announcements sections */}
    </div>
  );
};

export default EventInteraction;
