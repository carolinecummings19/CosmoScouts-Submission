// Home.js
import React from 'react';
import './Home.css'; // Import the external CSS file
import floating from './astros.png';

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Welcome to <br /><h1 className="highlight">CosmoScouts</h1></h1>
    <div className="image-container">
      <img src={floating} className='astronauts' alt="floating" />
    </div>
    <h6 className="message">Hey there, future astronomers and space adventurers!
Get ready to embark on an out-of-this-world journey with your ultimate guide to the wonders of the night sky. Explore stargazing conditions at your location, learn about constellations, and dive into the mysteries of the solar system.  Let the exploration begin!
</h6>
  </div>
);

export default Home;