import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PostsPage, NotFoundPage } from '../../pages';

export const App = () => {
  return (
    <div className="container">
      <Switch>
        <Redirect from="/" to="/books" exact />
        <Route path="/posts" component={PostsPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
};
