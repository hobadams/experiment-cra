import React from 'react';
import './App.css';

import About from './routes/About';
import Home from './routes/Home';

import Navigation from './components/Navigation';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Router>
      <header>
        <div>
          <Navigation />
        </div>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  </div>
);

export default App;