import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';
import Profile from './components/Profile';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
    setShowRegister(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="app">
        <Navbar 
          user={user} 
          onLoginClick={() => setShowLogin(true)} 
          onRegisterClick={() => setShowRegister(true)}
          onLogout={handleLogout}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        {showLogin && (
          <Login 
            onClose={() => setShowLogin(false)} 
            onSwitchToRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
        {showRegister && (
          <Register 
            onClose={() => setShowRegister(false)} 
            onSwitchToLogin={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
            onRegisterSuccess={handleRegisterSuccess}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
