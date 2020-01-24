import React from 'react';
import { createPostSuccess, createPostError } from '../../actions/posts/actions';
import { closeFrom } from '../../actions/postCreator/actions';
import ApiService from '../../api/api';
import {connect} from "react-redux";

import './style.css';

export class PostCreator extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      title: "",
      body: ""
    };
    this.state = props.post || this.default;
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

  handleClose = () => {
    const { closeFrom } = this.props;
    closeFrom();
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { createPostSuccess, createPostError } = this.props;

    if (this.props.post) {
      ApiService.update(`/posts/${this.state.id}`, { ...this.state })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      ApiService.post('/posts', { ...this.state })
        .then((data) => {
          createPostSuccess(data)
        })
        .catch((err) => {
          createPostError(err)
        });
    }

    this.setState({ ...this.default });
    this.handleClose();
  };

  render() {
    const { title, body } = this.state;
    const { isOpen } = this.props;
    const isFormOpen = isOpen ? "" : " display_none";
    console.log(this.props);

    return (
      <div className={`form-wrapper${isFormOpen}`}>
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
            <button type="button" className="button btn"
                    onClick={this.handleClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.postForm.isOpen,
    post: state.postForm.post
  }
};

const mapDispatchToProps = {
  createPostSuccess,
  createPostError,
  closeFrom
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreator);
