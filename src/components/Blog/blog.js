import React from 'react';
import './blog.css';
import '../../components/shared-styles.css';

function Blog() {
  return (
    <div className="component-wrapper">
      <h1 className="component-header">Blog</h1>
      <div className="blog-post-container">
        <h3 className="blog-post-title">Sc00ch Rugs Promo</h3>
        <h4 className="blog-post-subtitle">w/ McKenna Michael</h4>

          <div className="blog-post-date">May 15 2021
            <div className="blog-post"> 
              Today, I drove down to Long Beach to film an ad for my friend McKenna Michael's
               custom rug making business. I love McKenna so much. She is so much fun and she is fearless. 
               I had so much fun editing this video. It made me smile from ear to ear.
              <div className="blog-images-container">
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Blog;