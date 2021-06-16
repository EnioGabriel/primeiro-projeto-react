import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  // Switch = garante q apenas uma rota seja exibida por vez
  <Switch>
    {/* Passar exact apenas na primeira rota */}
    <Route path="/" exact component={Dashboard} />
    {/* /:repository+ significa q a rota recebe um parametro */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
