import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rooms from './components/pages/Rooms';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Rooms' component={Rooms} />
          <Route path='/Aboutus' component={Aboutus} />
          <Route path='/Contactus' component={Contactus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
