import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PostsPage, PostPage, NotFoundPage } from '../../pages';
import { PostForm } from '../PostForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;  
`;

const App = (props) => {
  return (
    <Wrapper>
      {props.isOpen && (<PostForm />)}
      <Switch>
        <Redirect from="/" to="/posts" exact />
        <Route path="/posts" component={PostsPage} exact />
        <Route path="/posts/:id"
                      component={({ match }) => {
                        const {id} = match.params;

                        return <PostPage postId={id} />
                      }}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Wrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.postForm.isOpen
  }
};

export default connect(mapStateToProps)(App);
