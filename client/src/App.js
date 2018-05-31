import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Home from './components/Home';
import Series from './components/Series';
import Movies from './components/Movies';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/series" component={Series} />
              <Route path="/movies" component={Movies} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
