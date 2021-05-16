import React from 'react';
import './home.css';
import '../../components/shared-styles.css';
import PolaroidWhite from '../../../src/assets/polaroid-white.jpg';
import PolaroidDeveloped from '../../../src/assets/BCC0C7E7-D03C-4982-99F4-ABA52E97D652.jpg';

function Home() {
  return (
    <section>
      <div className="polaroid-container">
          <img className="polaroid-white" alt="undeveloped polaroid" src={PolaroidWhite}></img>
          <img className="polaroid-developed" alt="developed polaroid of artist, Chris Meissner" src={PolaroidDeveloped}></img>
      </div>
    </section>
  );
}

export default Home;