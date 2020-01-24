import React from 'react';
import {connect} from "react-redux";
import ApiService from '../../api/api';
import { commentSuccess } from "../../actions/comments/actions";

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
        <form className="form" onSubmit={this.onSubmit}>
          Create comment
          <label htmlFor="commentBody"> Body</label>
          <input
            type="text"
            className="commentBody_input"
            placeholder="Body"
            id="body"
            onChange={this.onBodyChange}
            value={body}
          />
          <div className="form__footer">
            <button type="submit" className="button btn">
              Create
            </button>
          </div>
        </form>
        <ul className="comments">
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
        </ul>
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
