import React from 'react';
import ChrisPic from '../../assets/IMG_0134.jpg';
import '../../components/shared-styles.css';
import './about.css';

function About() {
  return (
    <div className="component-wrapper">
      <h1 className="component-header"></h1>
      <div className="bio-container">
        <img src={ChrisPic} className="bio-pic"></img>
        <div className="bio">Hello! My name is Chris Meissner and I am an artist. 
        To make it official, I recieved my Bachelor of Art's in Theater from UCLA.
        After graduating, I worked professionally as an actor in projects such as West Side Story: in Concert with the San Francisco Symphony, 
        Frozen! Live at the Hyperion, and Grease: Live!. 
        Besides theater, making photos and videos has always been my passion. I have a small portrait studio in my apartment where I shoot, develop, and scan my own film. 
        If you have a project and need a photographer, video maker, director (or web developer! - I also have a certificate in Web Development and made this website from scratch), I would love to work for you!
        Email me at <a href="mailto:webmaster@example.com">christophermssnr@gmail.com</a> telling me about your project and I will respond with a quote! 
        You can also call me at <a href="tel:916-792-3835">916-792-3835</a> and follow me on <a href="http://www.instagram.com/chris_meissner">Instagram.</a></div>
      </div>
    </div>
  );
}

export default About;