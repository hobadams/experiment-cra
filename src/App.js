import React, { Component } from 'react';

import './app.css';

import Cart from './routes/Cart';
import Home from './routes/Home';

import Navigation from './components/Navigation';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

class App extends Component {
  render() {

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#093c59'
        }
      }
    });

    return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline />
            <header>
              <div>
                <Navigation />
              </div>
            </header>
            <Container maxWidth="lg">
              <Typography component="div">
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
              </Typography>
            </Container>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;