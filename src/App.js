import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Renderall from './components/renderall';

class App extends Component {
  render() {
    return (
       <Provider store={store}>
        <Renderall/>
      </Provider>
    );
  }
}

export default App;
