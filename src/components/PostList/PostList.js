import React from 'react';
import { connect } from 'react-redux';
import ApiService from '../../api/api';
import { postsRequested, postsLoaded, postsError } from '../../actions/posts/actions';
import { openForm } from '../../actions/postCreator/actions';
import { PostListItem } from '../PostListItem';
import { ErrorIndicator } from '../ErrorIndicator';

const PostList = ({ posts, onView }) => {
  return (
    <ul className="post-list">
      {
        posts.map((post) => {
          return (
            <li key={post.id}>
              <PostListItem
                post={post}
                onView={() => onView(post.id)} />
            </li>
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
        <button onClick={this.onCreate}>Create</button>
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
