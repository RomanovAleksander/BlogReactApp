import React from 'react';
import { connect } from 'react-redux';
import ApiService from '../../api/api';
import { postsRequested, postsLoaded, postsError } from '../../actions/posts/actions';
import { openForm } from '../../actions/postForm/actions';
import { PostListItem } from '../PostListItem';
import { ErrorIndicator } from '../ErrorIndicator';
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
`;

const Button = styled.button`
  margin-left: 40px;
  margin-top: 5px;
  width: 70px;
`;

const PostList = ({ posts, onView }) => {
  return (
    <ul>
      {
        posts.map((post) => {
          return (
            <Li key={post.id}>
              <PostListItem
                post={post}
                onView={() => onView(post.id)} />
            </Li>
          )
        })
      }
    </ul>
  )
};

class PostListContainer extends React.Component {
  componentDidMount() {
    const { postsRequested, postsLoaded, postsError } = this.props;

    postsRequested();
    ApiService.get('/posts')
      .then((data) => postsLoaded(data))
      .catch((err) => {
        postsError(err)
      })
  }

  onCreate = () => {
    const { openForm } = this.props;

    openForm();
  };

  render() {
    const { posts, loading, onView, error } = this.props;

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <ErrorIndicator />
    }

    if (posts) {
      return (
        <>
        <Button onClick={this.onCreate}>Create</Button>
        <PostList onView={onView} posts={posts} />
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error
  }
};

const mapDispatchToProps = {
  postsLoaded,
  postsRequested,
  postsError,
  openForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
