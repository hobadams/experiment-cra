import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import About from './routes/About';
import Home from './routes/Home';

import Navigation from './components/Navigation';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const { count, countUp, countDown } = this.props;
    return (
      <div className="App">

        <button onClick={countUp}>Up</button>
        <button onClick={countDown}>Down</button>
        {count}
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
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    countUp: () => dispatch({type: 'COUNT_UP'}),
    countDown: () => dispatch({type: 'COUNT_DOWN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);