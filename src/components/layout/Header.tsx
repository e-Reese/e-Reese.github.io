import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Layout.css';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header>
      <div className="container">
        <div className="logo">Ethan Reese</div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
