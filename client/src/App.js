import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';

import About from './pages/About';
import Products from './pages/Products';
import Delivery from './pages/Delivery';
import Testimonials from './pages/Testimonials';
import Who from './pages/Who';
import Contact from './pages/Contact';

import { StoreProvider } from './state/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/who" component={Who} />
            <Route exact path="/contact" component={Contact} />

            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;