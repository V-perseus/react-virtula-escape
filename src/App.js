import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Castle from './main-pages/Castle';
import Home from './main-pages/Home';
import Nab from './main-pages/Nab';
import FAQ from './main-pages/FAQ';
import ToDoList from './main-pages/ToDoList';
import Schedule from './main-pages/Schedule';
import ScrollToTop from './ScrollToTop';
import Maze from './main-pages/Maze';
import Cube from './main-pages/Cube';
import LostFound from './main-pages/LostFound';

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lab-escape" component={Nab}/>
          <Route path="/castle-escape" component={Castle}/>
          <Route path="/to-do" component={ToDoList}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/schedule" component={Schedule}/>
          <Route path="/maze-escape" component={Maze}/>
          <Route path="/cube-escape" component={Cube}/>
          <Route path="/lost-found-escape" component={LostFound}/>
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
