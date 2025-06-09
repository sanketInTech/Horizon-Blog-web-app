import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout, onLoginClick, onRegisterClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">Inspire</Link>
      </div>
      <div className="navbar-menu">
        {user ? (
          <>
            <Link to="/create" className="navbar-item">Create Post</Link>
            <Link to="/profile" className="navbar-item">Profile</Link>
            <button onClick={handleLogout} className="navbar-item logout-btn">Logout</button>
          </>
        ) : (
          <div className="auth-buttons">
            <button onClick={onLoginClick} className="navbar-item auth-btn">Login</button>
            <button onClick={onRegisterClick} className="navbar-item auth-btn">Register</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 