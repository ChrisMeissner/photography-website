import React from 'react';
import './photos.css';
import '../../components/shared-styles.css';
import Noa from '../../assets/Noa.jpg';
import Travis from '../../assets/travis-film.jpeg';
import Fatima from '../../assets/fatima-film.PNG';
import Dominic from '../../assets/Dominic.JPG';

function Photos(){
  return (
    <div className="component-wrapper">
      <h1 className="component-header">Photography</h1>
      <img src={Noa} className="portrait"></img>
      <img src={Travis} className="portrait"></img>
      <img src={Fatima} className="portrait"></img>
      <img src={Dominic} className="portrait"></img>
    </div>
  );
}

export default Photos;