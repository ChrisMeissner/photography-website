import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/landing';
import Home from './components/Home/home';
  
class App extends Component {
  render() {
    return (
       <Router>
            <Link className="app-header" to="/">
              chrismeissner.com
            </Link>
            <Switch>
              <Route exact path='/'> <Landing/> </Route>
              <Route exact path='/home'> <Home/> </Route>
            </Switch>
            <footer className="footer"> 
              chrismeissner.com is  
              developed and maintained
              by Chris Meissner &#169; 2021
            </footer>
       </Router>
   );
  }
}
  
export default App;