import React from 'react';
import { connect } from 'react-redux';
import { createPostSuccess, createPostError } from '../../actions/posts/actions';
import { closeFrom } from '../../actions/postForm/actions';
import ApiService from '../../api/api';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(246,246,246,0.8);
  z-index: 1; 
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 20%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between
`;

export class PostForm extends React.Component {
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

    return (
      <Wrapper isOpen>
        <Form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            required=""
            id="title"
            type="text"
            onChange={this.onTitleChange}
            placeholder="title"
            value={title}
          />
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            placeholder="body"
            id="body"
            onChange={this.onBodyChange}
            value={body}
          />
          <Footer>
            <button type="button" onClick={this.handleClose}>
              Close
            </button>
            <button type="submit">
              Create
            </button>
          </Footer>
        </Form>
      </Wrapper>
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
)(PostForm);
