import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-text">Neohack</Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/guide" 
              className={`nav-link ${location.pathname === '/guide' ? 'active' : ''}`}
            >
              Guide
            </Link>
          </li>
        </ul>
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-btn">
            <span className="theme-icon">
              {theme === 'light' ? '☀️' : '🌙'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;