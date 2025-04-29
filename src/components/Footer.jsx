// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <h2>SportGlory’25</h2>
        <p>Honoring Heroes. Inspiring Generations.</p>
        <p>Jawaharlal Nehru University, New Delhi - 110067</p>
      </div>
      <div className="footer-right">
        <h3>Follow us on:</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/adarsh_patel23/" target="_blank" rel="noopener noreferrer">
            <img src="assets/insta.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/in/adarsh-kumar-31b502214/" target="_blank" rel="noopener noreferrer">
            <img src="assets/linkedin.png" alt="Twitter" /></a>
          <a href="https://github.com/Adarsh2089" target="_blank" rel="noopener noreferrer">
            <img src="assets/Github.png" alt="GitHub" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="assets/x.png" alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;