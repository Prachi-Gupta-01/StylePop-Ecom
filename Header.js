import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from './AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manages login state
  const { user, logout } = useAuth();
  const [logoutMessage, setLogoutMessage] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccountMenu = () => {
    setAccountMenuOpen(!isAccountMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccountMenuOpen(false);
    setLogoutMessage('You have been logged out successfully.');
    // Additional logout logic (like clearing tokens) can be added here
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>StylePop</h1>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`header-nav ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/payment">Pay</Link></li>
          <li className="account-section">
            <button onClick={toggleAccountMenu} className="account-button">
              Account
            </button>
            {isAccountMenuOpen && (
              <div className="account-menu">
                
                <Link to="/login" onClick={() => setAccountMenuOpen(false)}>Login</Link>
                <Link onClick={handleLogout}>Logout</Link>
             
            {/*     <Link to="/signup" onClick={() => setAccountMenuOpen(false)}>Signup</Link>*/}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
