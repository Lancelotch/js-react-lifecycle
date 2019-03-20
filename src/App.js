import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Initialization from './lifecycles/Initialization';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Initialization />
      </Fragment>
    );
  }
}

export default App;
