import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css';
import PolaroidWhite from '../../../src/assets/photos/IMG_1219.png';
import PolaroidDeveloped from '../../../src/assets/photos/IMG_1219-developed.png';

function Landing() {
  return (
      <Link className="polaroid-container" to="/home">
          <img className="polaroid-white" alt="undeveloped polaroid" src={PolaroidWhite}></img>
          <img className="polaroid-developed" alt="developed polaroid of artist, Chris Meissner" src={PolaroidDeveloped}></img>
      </Link>
  );
}

export default Landing;