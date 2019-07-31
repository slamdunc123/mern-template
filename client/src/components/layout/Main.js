import React from 'react';

import { Switch, Route } from 'react-router-dom';

// view components
import Home from '../views/Home';
import Items from '../views/Items';

const Main = () => {
  return (
    <div>
      Main
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/items' component={Items} />
      </Switch>
    </div>
  );
};

export default Main;
