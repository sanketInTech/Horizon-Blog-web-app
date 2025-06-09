import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch posts from API
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Latest Posts</h1>
        <Link to="/create" className="create-post-btn">
          Create New Post
        </Link>
      </div>
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))
        ) : (
          <div className="no-posts">
            <p>No posts yet. Be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home; 