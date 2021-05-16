import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About/about';
import Blog from './components/Blog/blog';
import Photos from './components/Photos/photos';
import Prints from './components/Prints/prints';
import Videos from './components/Videos/videos';
import Home from './components/Home/home';
import './App.css';
import './components/shared-styles.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="app-wrapper">
            <div className="app-header">
              <Link className="header-link" to="/">chrismeissner.com</Link>
              <nav className="app-nav">
                <Link className="nav-link" to="/photos">Photos</Link>
                <Link className="nav-link" to="/videos">Videos</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                <Link className="nav-link" to="/prints">Prints</Link>
                <Link className="nav-link" to="/about">About</Link>
              </nav>
            </div>
            <Switch>
              <Route exact path='/'> <Home/> </Route>
              <Route exact path='/photos'> <Photos/> </Route>
              <Route exact path='/videos'> <Videos/> </Route>
              <Route exact path='/blog'> <Blog/> </Route>
              <Route exact path='/prints'> <Prints/> </Route>
              <Route exact path='/about'> <About/></Route>
            </Switch>
            <div className="footer">chrismeissner.com was developed by Chris Meissner &#169; 2021</div>
          </div>
       </Router>
   );
  }
}
  
export default App;