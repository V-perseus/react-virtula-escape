import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <Home />
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
