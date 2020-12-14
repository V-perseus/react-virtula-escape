import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Castle from './Castle';
import Home from './Home';
import Nab from './Nab';

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      {/* <Home /> */}
      {/* <Castle /> */}
      <Nab />
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
