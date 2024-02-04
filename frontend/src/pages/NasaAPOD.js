import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NasaAPOD.css';
import rocket from './astro_riding_rocket.png';

function NasaAPOD() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual NASA API key if needed.
    const apiKey = 'DEMO_KEY';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setApodData(response.data);
      })
      .catch(error => {
        console.error('Error fetching APOD data:', error);
      });
  }, []);

  return (
    <div className="holder">
      <header >
        <h1 className="title">NASA Astronomy Picture of the Day</h1>

        <div className="image-rocket">
            <img src={rocket} className='rocket' />
        </div>

        {apodData ? (
          <>
            <h2 className='header2'>{apodData.title}</h2>
            <p className='data'>{apodData.date}</p>
            <img className='nasa-image' src={apodData.url} alt={apodData.title} />
            <p className='explanation'>{apodData.explanation}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default NasaAPOD;