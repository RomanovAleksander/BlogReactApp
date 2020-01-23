import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PostsPage, PostPage, NotFoundPage } from '../../pages';

export const App = () => {
  return (
    <div className="container">
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
