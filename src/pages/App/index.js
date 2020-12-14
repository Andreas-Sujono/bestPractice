import React, { Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage';

import GlobalStyle from '../../global-styles';
import routeData from './routeData';

export default function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Switch>
          {routeData.map(route => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </HashRouter>
    </Suspense>
  );
}
