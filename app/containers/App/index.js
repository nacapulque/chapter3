import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClassComponent from '../ClassComponent';
import HookComponent from '../HookComponent';

export default function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/class-component"
          component={props => (
            <ClassComponent start={performance.now()} {...props} />
          )}
        />
        <Route
          exact
          path="/hook-component"
          component={props => (
            <HookComponent start={performance.now()} {...props} />
          )}
        />
      </Switch>
    </div>
  );
}
