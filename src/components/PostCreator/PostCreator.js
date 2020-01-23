import React from 'react';
import { createPostSuccess, createPostError } from '../../actions/posts/actions';
import ApiService from '../../api/api';
import {connect} from "react-redux";

export class PostCreator extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      title: "",
      body: ""
    };
    this.state = {
      title: "",
      body: ""
    };
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { createPostSuccess, createPostError } = this.props;

    ApiService.post('/posts', { ...this.state })
      .then((data) => {
        createPostSuccess(data)
      })
      .catch((err) => {
        createPostError(err)
      });

    this.setState({ ...this.default });
  };

  render() {
    const { title, body } = this.state;

    return (
        <form className="form" onSubmit={this.onSubmit}>
          <label htmlFor="title"> Title</label>
          <input
            required=""
            id="title"
            type="text"
            className="title_input"
            onChange={this.onTitleChange}
            placeholder="Title"
            value={title}
          />
          <label htmlFor="body"> Body</label>
          <input
            type="text"
            className="body_input"
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
    );
  }
}

const mapDispatchToProps = {
  createPostSuccess,
  createPostError
};

export default connect(
  null,
  mapDispatchToProps
)(PostCreator);
