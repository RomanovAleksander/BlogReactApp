import React from 'react';
import { connect } from 'react-redux';

const PostComments = ({ post }) => {
  const { comments } = post;

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

const mapStateToProps = (state) => {
  return {
    post: state.post.post,
  }
};

export default connect(mapStateToProps)(PostComments);
