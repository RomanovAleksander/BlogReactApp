import React from 'react';

export const PostListItem = ({ post, onView }) => {
  const { title } = post;
  return (
    <div className="book-list-item">
      <div className="book-details">
        <div className="book-title">{title}</div>
      </div>
      <div className="book-footer">
        <button
          onClick={onView}
          className="btn btn-primary"
        >
          View
        </button>
      </div>
    </div>
  )
};
