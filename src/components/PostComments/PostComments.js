import React from 'react';

export const PostComments = ({ comments }) => {
  return (
    <ul className="comments">
      {
        comments.map((comment) => {
          return (
            <li key={comment.id}>
              <div>{comment.body}</div>
            </li>
          )
        })
      }
    </ul>
  );
};
