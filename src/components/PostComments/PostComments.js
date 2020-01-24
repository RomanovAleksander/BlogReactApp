import React from 'react';
import {connect} from 'react-redux';
import { commentSuccess } from '../../actions/comments/actions';
import ApiService from '../../api/api';

class PostComments extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      postId: "",
      body: ""
    };
    this.state = this.default;
  }

  onBodyChange = (e) => {
    this.setState({
      postId: this.props.postId,
      body: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { commentSuccess } = this.props;

    ApiService.post('/comments', {...this.state})
      .then((data) => {
        commentSuccess(data)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  render() {
    const { comments } = this.props;
    const { body } = this.state;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="commentBody">Create comment: </label>
          <input
            type="text"
            placeholder="body"
            id="commentBody"
            minLength={1}
            onChange={this.onBodyChange}
            value={body}
            required
          />
          <button type="submit">
            Create
          </button>
        </form>
        <ol>
          <b>Comments:</b>
          {
            comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <div>{comment.body}</div>
                </li>
              )
            })
          }
        </ol>
      </>
    );
  }
}

const mapDispatchToProps = {
  commentSuccess
};

export default connect(
  null,
  mapDispatchToProps
)(PostComments);
