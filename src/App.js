import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Cart from './routes/Cart';
import Home from './routes/Home';

import Navigation from './components/Navigation';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const { count, updateCart, countDown } = this.props;
    return (
      <div className="App">

        <button onClick={() => updateCart({bannaa: 1})}>Up</button>
        <button onClick={countDown}>Down</button>
        {count}
        <Router>
          <header>
            <div>
              <Navigation />
            </div>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
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
    updateCart: (items) => dispatch({type: 'UPDATE_CART', items}),
    countDown: () => dispatch({type: 'EMPTY_CART'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);