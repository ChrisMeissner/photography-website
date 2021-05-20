import React from 'react';
import './home.css';
import ChrisPic from '../../assets/photos/chrispic.jpg';
import Bruce from '../../assets/photos/bruce2.jpg';
import Coby from '../../assets/photos/coby2.jpg';
import Crudo from '../../assets/photos/crudo2.jpg';
import Curtisandojay from '../../assets/photos/curtisandojay2.jpg';
import Deandcharlie from '../../assets/photos/deandcharlie2.jpg';
import Dominic from '../../assets/photos/Dominic2.jpg';
import Emilyinyard from '../../assets/photos/emilyinyard2.jpg';
import Fatima from '../../assets/photos/fatima-film2.jpg';
import Keara from '../../assets/photos/keara2.jpg';
import Noa from '../../assets/photos/Noa2.jpg';
import Ross from '../../assets/photos/ross2.jpg';
import Shelby from '../../assets/photos/shelby2.jpg';
import Tayfromearth from '../../assets/photos/tayfromearth2.jpg';
import Travis from '../../assets/photos/travis-film2.jpg';
import Wesley from '../../assets/photos/wesley-marty2.jpg';
import YoutubeEmbed from '../YoutubeEmbedded.js/YoutubeEmbedded.js';
import '../YoutubeEmbedded.js/YoutubeEmbedded.css';

function Home() {
  return (
    <div className="home-container">
      <div className="photography-section">
        <div className="photo-row">
          <img className="photo" src={Bruce} alt=""></img>
          <img className="photo" src={Coby} alt=""></img>
          <img className="photo" src={Crudo} alt=""></img>
        </div>
        <div className="photo-row">
          <img className="photo" src={Curtisandojay} alt=""></img>
          <img className="photo" src={Deandcharlie} alt=""></img>
          <img className="photo" src={Dominic} alt=""></img>
        </div>
        <div className="photo-row">
          <img className="photo" src={Emilyinyard} alt=""></img>
          <img className="photo" src={Fatima} alt=""></img>
          <img className="photo" src={Keara} alt=""></img>
        </div>
        <div className="photo-row">
          <img className="photo" src={Noa} alt=""></img>
          <img className="photo" src={Ross} alt=""></img>
          <img className="photo" src={Shelby} alt=""></img>
        </div>
        <div className="photo-row">
          <img className="photo" src={Tayfromearth} alt=""></img>
          <img className="photo" src={Travis} alt=""></img>
          <img className="photo" src={Wesley} alt=""></img>
        </div>
      </div>
      <div className="videography-section">
        <div className="video-column-one">
          <div className="video-container">
            <YoutubeEmbed embedId="KjqzgMe_JiI" />
          </div>
          <div className="video-container">
            <YoutubeEmbed embedId="lrinQdYoNgM" />
          </div>
        </div>
        <div className="video-column-two">
          <div className="video-container">
            <YoutubeEmbed embedId="9JjT7gCLJWM" />
          </div>
          <div className="video-container">
            <YoutubeEmbed embedId="NmoB5cUoorw" />
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="photography-service"> 
        <div className="service-category"> Photography </div>
        <div className="service-container"> 
          <div className="service"> Medium Format Portraiture w/ Mamiya RZ67 </div>
            <div className="service-details">
              <div className="service-item">Roll of Film (10 exposures), hand-developed and scanned. In-studio or outdoor. Includes dropbox folder of your session.</div>
              <div className="price">1 for $100 or <br/>2 for $150</div>
            </div>
          <div className="service"> Digital Portraiture w/ Canon R </div>
            <div className="service-details">
              <div className="service-item">In-studio or outdoors. Includes shoot-time, dropbox folder of session (around 60 frames per look).</div>
              <div className="price">1 look $200 or<br/>2 for $300</div>
            </div>
        </div>
        </div>

        <div className="photography-service"> 
        <div className="service-category"> Videography </div>
        <div className="service-container"> 
          <div className="service"> Dance Videos </div>
            <div className="service-details">
              <div className="service-item-solo">
                $200 for dances 1 min and under + $100 for every subsequent minute (or fraction thereof). Includes same-day camera-blocking session, shoot, and 3 rounds of edits. 
              </div>
            </div>
          <div className="service"> Music Videos </div>
            <div className="service-details">
              <div className="service-item-solo">
                Music videos are priced on an individual basis starting at $350. Includes direction meeting, shoot, and 3 rounds of edits.
              </div>
            </div>
        </div>
        </div>

        <div className="service-blurb">**Make-up artist and hair available upon request for additional charge.**</div>

      </div>


      <div className="about-section">
        <div className="bio-container">
          <img src={ChrisPic} alt="" className="bio-pic"></img>
          <div className="bio">Hello! My name is Chris Meissner and I am an artist. 
            I even went ahead and made it official with a Bachelor of Art's degree in Theater from UCLA.
            After graduation, I worked professionally as an actor in projects such as West Side Story: in Concert with the San Francisco Symphony, 
            Frozen! Live at the Hyperion, and Grease: Live!. 
            Making photos and videos is definitely one of the most fulling parts of my life. I have a small portrait studio in my apartment where I am currently shooting. I hand-develop and scan all of my film in-house. 
            If you have a project and need a photographer, video maker, or director, I would love to work for you! I also have a certificate in Web Development and made this website from scratch.
            <br></br>
            <br></br>
            Email me at <a href="mailto:webmaster@example.com">christophermssnr@gmail.com</a> telling me about your project and I will respond with a quote! 
            You can also call me at <a href="tel:916-792-3835">916-792-3835</a> and follow me on <a href="http://www.instagram.com/chris_meissner">Instagram.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;