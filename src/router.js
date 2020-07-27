import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import B from './b';
import C from './c';
import Show from './show';


class Router extends Component {

  render() {

    return (
      <HashRouter>

        <Route path='/' />
        <Switch>
          <Show >
            <Route exact path='/b' component={B} />
            <Route exact path='/b/test' component={C} />
          </Show>

        </Switch>
      </HashRouter>
    )
  }
}

export default Router;