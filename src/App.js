import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Castle from './Castle';
import Home from './Home';
import Nab from './Nab';
import FAQ from './FAQ';
import GameList from './GameList';
import ToDoList from './ToDoList';
import Schedule from './Schedule';

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      {/* <Home />
      <Castle />
      <Nab />
      <FAQ />
      <GameList />
      <ToDoList />
      <Schedule /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lab-escape" component={Nab}/>
        <Route path="/castle-escape" component={Castle}/>
        <Route path="/to-do" component={ToDoList}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/schedule" component={Schedule}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
