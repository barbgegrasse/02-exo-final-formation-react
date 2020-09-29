import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useBars from '../hooks/useBars';

import Global from '../styles/GlobalStyle';
import { AppContainer } from '../styles/components/App.js';

import Header from './Header';
import Home from './Home';
import BarPageDetail from './bar/BarPageDetail';
import MePage from './MePage';
import * as Sentry from '@sentry/browser';

const RELEASE = '7e314acd80ec22e73bc706851d50ea848277dd01';
if (process.env.NODE_ENV === 'production') {
  console.info('production !');
  Sentry.init({
    dsn:
      'https://8d6259633fb64e91aaa9b6ad76a422d7@o451965.ingest.sentry.io/5438682',
    release: RELEASE,
  });
}

const App = () => {
  const [bars, setBars] = useBars();
  return (
    <Router>
      <Global />
      <AppContainer className='max-container'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home bars={bars} />
          </Route>
          <Route exact path='/me'>
            <MePage />
          </Route>
          <Route path='/bar/:id'>
            <BarPageDetail bars={bars} setBars={setBars} />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
