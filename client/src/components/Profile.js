import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // TODO: Implement user profile fetching API call
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile. Please try again.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    // TODO: Implement logout functionality
    navigate('/login');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!user) {
    return <div className="not-found">User not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <div className="info-group">
            <label>Username</label>
            <p>{user.username}</p>
          </div>
          <div className="info-group">
            <label>Email</label>
            <p>{user.email}</p>
          </div>
          <div className="info-group">
            <label>Joined</label>
            <p>{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{user.posts?.length || 0}</span>
            <span className="stat-label">Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 