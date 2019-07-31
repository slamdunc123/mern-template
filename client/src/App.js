import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './redux/store/store';

// layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// view components
import Main from './components/layout/Main';

import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={'/'}>
          <div className='App'>
            <Header />
            <Container>
              <Main />
            </Container>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
