import React from 'react';
import { connect } from 'react-redux';
import ApiService from '../../api/api';
import { ErrorIndicator } from '../ErrorIndicator';
import { postRequested, postLoaded, postError } from '../../actions/post/actions';

class Post extends React.Component {
  componentDidMount() {
    const { postRequested, postLoaded, postError, postId } = this.props;

    postRequested();
    ApiService.get(`/posts/${postId}?_embed=comments`)
      .then((data) => {
        postLoaded(data);
      })
      .catch((err) => {
        postError(err);
      })
  }

  render() {
    const {
      post, loading,
      error
    } = this.props;

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <ErrorIndicator />
    }

    if (post) {
      const { title, body } = post;

      return (
        <>
          <div>{title}</div>
          <div>{body}</div>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post.post,
    loading: state.post.loading,
    error: state.post.error
  }
};

const mapDispatchToProps = {
  postRequested,
  postLoaded,
  postError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);