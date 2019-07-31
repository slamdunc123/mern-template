import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// redux
import { Provider } from 'react-redux';
import store from './redux/store/store';

// layout components
import AppNavbar from './components/layouts/AppNavbar';

// view components
import ItemsList from './components/views/ItemsList';

import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <ItemsList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
