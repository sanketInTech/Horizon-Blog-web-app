import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: Implement post creation API call
      navigate('/');
    } catch (err) {
      setError('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="create-post-container">
      <h1>Create New Post</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Cover Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        <button type="submit" className="submit-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost; 