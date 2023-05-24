import React from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>My Logo</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about us" className="nav-link">About US</a>
        </li>
        <li className="nav-item">
          <a href="/schemes" className="nav-link">Schemes</a>
        </li>
        <li className="nav-item">
          <a href="/Q&A" className="nav-link">Q&A</a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">Login</a>
        </li>
        <li className="nav-item">
          <a href="/register" className="nav-link">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
