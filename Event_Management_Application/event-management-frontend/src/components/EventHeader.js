import React, { useState } from 'react';
import './EventHeader.css'; // Import the CSS file for styling
import pic from './1.png'; 

const EventHeader = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    // Implement signup functionality here
    console.log('Signing up with email:', email);
    console.log('Password:', password);
    // Example: Call signup API
    setAuthenticated(true); // Simulate authentication
  };

  const handleSignin = () => {
    // Implement signin functionality here
    console.log('Signing in with email:', email);
    console.log('Password:', password);
    // Example: Call signin API
    setAuthenticated(true); // Simulate authentication
  };

  const handleSignOut = () => {
    // Implement signout functionality here
    setAuthenticated(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={pic} alt="Logo" /> {/* Replace 'logo.png' with your actual logo */}
      </div>
      <h1>Event Management Application</h1>
      <div className="auth-section">
        {!authenticated ? (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handleSignin}>Sign In</button>
          </>
        ) : (
          <button onClick={handleSignOut}>Sign Out</button>
        )}
      </div>
      {authenticated && (
        <div className="event-management-options">
          {/* Render event management options for authenticated users - Need to work on this functionality*/}
          {/* <button>Create Event</button>
          <button>Join Event</button>
          <button>Manage Events</button> */} 
        </div>
      )}
    </div>
  );
};

export default EventHeader;
