import React from 'react';
import logo from './logo.jpg'; // Always remember to Import your logo image or other images

function Header() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(13, 154, 230)',
    padding: '20px', // we can adjust padding as needed
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'darkblue',
    fontWeight: 'bold',
    marginRight: '20px', // we can adjust margin as needed
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ marginRight: '20px', width: '50px', height: '50px' }} />
        <h1 style={{ margin: '0', textAlign: 'center' }}>Travel Explorer</h1>
      </div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
          <li><a href="#destinations" style={navLinkStyle}>Destinations</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

