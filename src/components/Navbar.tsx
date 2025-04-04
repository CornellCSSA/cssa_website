import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Cornell CSSA Logo" className="logo-img" />
        </Link>
        
        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link active">
            HOME
          </Link>
          <Link to="/about" className="nav-link">
            About CSSA
          </Link>
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/guide" className="nav-link">
            Guide
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;