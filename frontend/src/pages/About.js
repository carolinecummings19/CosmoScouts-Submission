// About.js
import React from 'react';
import './About.css'; // Import the external CSS file
import cool from './cool_astro.png';


const About = () => (
 <div className="about-container">
   <h1 className="about-title">About Us</h1>
   <div className='container'>
    <div className="image-cool">
        <img src={cool} className='cool' />
    </div>
    <div className="creator-info">
      <h2>Caroline Cummings</h2>
      <p>A sophomore computer science student at the University of Pennsylvania, calls Tallahassee, Florida, her hometown. With a passion for running, she recently conquered her first half-marathon.


      </p>
    </div>
    <div className="creator-info">
      <h2>Anjana Begur</h2>
      <p>A sophomore in computer science at the University of Pennsylvania, hails from the vibrant city of Seattle, Washington. Beyond coding, she adds harmony to her life as a violinist in the Penn Symphony Orchestra.
        
      </p>
    </div>
    <div className="creator-info">
      <h2>Cameron Bosio-Kim</h2>
      <p>A fellow sophomore immersed in computer science at the University of Pennsylvania, calls the picturesque San Francisco, California, home. When not delving into code, she spikes excitement on the UPenn Club Volleyball team, showcasing her love for the sport.

      </p>
    </div>
  </div>
  </div>
);


export default About;

