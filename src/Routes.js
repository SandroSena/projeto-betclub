import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
    </Switch>
  );
};

export default Routes;
