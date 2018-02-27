import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './pages/Main'

import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav />
        <div>
          <Route exact path="/" component={Main} />
          
        </div>
      <Footer />
    </div>
  </Router>
);

export default App;



