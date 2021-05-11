import React from 'react';
import './App.css';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Blog from './components/Blog';
import Prints from './components/Prints';
import About from './components/About';



function App() {
  return (
    <div>
      <h1 className="website-heading">chrismeissner.com</h1>
      <main>
        <Photos></Photos>
        <Videos></Videos>
        <Blog></Blog>
        <Prints></Prints>
        <About></About>
      </main>
    </div>
  );
}

export default App;
