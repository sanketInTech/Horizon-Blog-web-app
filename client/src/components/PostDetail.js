import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // TODO: Implement post fetching API call
        setLoading(false);
      } catch (err) {
        setError('Failed to load post. Please try again.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!post) {
    return <div className="not-found">Post not found</div>;
  }

  return (
    <div className="post-detail-container">
      <article className="post-content">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        {post.image && (
          <img src={post.image} alt={post.title} className="post-image" />
        )}
        <div className="post-body">
          {post.content}
        </div>
      </article>
    </div>
  );
}

export default PostDetail; 