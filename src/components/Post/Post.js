import React from 'react';
import { connect } from 'react-redux';
import ApiService from '../../api/api';
import { postRequested, postLoaded, postError } from '../../actions/post/actions';
import { openForm } from '../../actions/postForm/actions';
import { ErrorIndicator } from '../ErrorIndicator';
import { PostComments } from '../PostComments';
import styled from "styled-components";

const Header = styled.div`
  display: flex;
`;

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

  onDelete = () => {
    const { postId, postError } = this.props;

    ApiService.delete(`/posts/${postId}`)
      .catch((err) => {
        postError(err);
      })
  };

  onUpdate = () => {
    const { openForm, post } = this.props;

    openForm(post);
  };

  render() {
    const { post, loading, error } = this.props;

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <ErrorIndicator />
    }

    if (post) {
      const { title, body, comments } = post;

      return (
        <>
          <Header>
            <div><b>{title}</b></div>
            <button onClick={this.onUpdate}>Update</button>
            <button onClick={this.onDelete}>Delete</button>
          </Header>
          <div>{body}</div>
          <PostComments comments={comments}
                        postId={post.id} />
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
  postError,
  openForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
