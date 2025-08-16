import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Layout.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Ethan Reese. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
