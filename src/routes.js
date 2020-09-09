import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import home from './pages/home';
import movie from './pages/movie'

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/movie/:id" component={movie} />
      </Switch>
    </BrowserRouter>
  );
}