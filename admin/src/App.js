import React, { Component } from 'react';
import Home from './containers/Home';
import Layout from './components/Layout';

class App extends Component {
  
  render() {
    return <Layout children={<Home/>} />;
  }
}

export default App;
