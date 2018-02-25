import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
// import GridList from './components/GridList'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './pages/Main'

import './App.css';

const App = () => (
  <div>
    <Nav />
    <Main />
    <Footer />
  </div>
);

export default App;



