// components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import AuthModal from './AuthModal';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
          <img src="assets/logo.svg" alt="Logo" />
        </div>
        <div className="menu">
         {/* Use NavLink instead of Link for active class functionality */}
         <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <NavLink to="/voting" className={({ isActive }) => (isActive ? 'active' : '')}>Vote</NavLink>
          <a href="#nominate">Nominate</a>
          <NavLink to="/results" className={({ isActive }) => (isActive ? 'active' : '')}>🏆 Results</NavLink>
        </div>
        <button className="Signin-button" onClick={() => setShowAuth(true)}>Sign In</button>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
