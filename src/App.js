import * as React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/404';

function App() {
  const sample = useSelector((state) => state.sample);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
