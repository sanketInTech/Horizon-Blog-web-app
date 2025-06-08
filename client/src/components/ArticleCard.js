import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-time-col">
        <p className="article-time">{article.time}</p>
      </div>
      <div className="article-text-col">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-description">{article.description}</p>
      </div>
      <div className="article-image-col">
        <div className="article-image-container">
          <img src={article.image} alt={article.title} className="article-image" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 