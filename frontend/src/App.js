import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';

import Home from './pages/Home';
import Question from './pages/Question';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/question" component={Question} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;