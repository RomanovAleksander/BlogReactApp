import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PostsPage, PostPage, NotFoundPage } from '../../pages';
import { PostCreator } from '../PostCreator';
import {connect} from "react-redux";

const App = (props) => {
  return (
    <div className="container">
      {props.isOpen && (<PostCreator />)}
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
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.postForm.isOpen
  }
};

export default connect(mapStateToProps)(App);
