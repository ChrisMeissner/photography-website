import React from 'react';
import './videos.css';
import '../../components/shared-styles.css';
import { Player } from 'video-react';
import ReelVid from '../../assets/videography-reel-2021.MP4';

function Videos() {
  return (
    <div className="component-wrapper">
      <h1 className="component-header">Videos</h1>
      <Player
      playsInline
      src={ReelVid}
      />
    </div>
  );
}

export default Videos;