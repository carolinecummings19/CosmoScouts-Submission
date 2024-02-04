import React, { useState } from 'react';
import './ConstellationFinder.css';
const constellationImages = {
  Aquarius: require('./constellationimages/aquarius.JPG').default,
  Aries: require('./constellationimages/aries.JPG').default,
  Cancer: require('./constellationimages/cancer.JPG').default,
  Capricorn: require('./constellationimages/capricorn.JPG').default,
  Gemini: require('./constellationimages/gemini.JPG').default,
  Leo: require('./constellationimages/leo.JPG').default,
  Libra: require('./constellationimages/libra.JPG').default,
  Pisces: require('./constellationimages/pisces.JPG').default,
  Sagittarius: require('./constellationimages/sagittarius.JPG').default,
  Scorpio: require('./constellationimages/scorpio.JPG').default,
  Taurus: require('./constellationimages/taurus.JPG').default,
  Virgo: require('./constellationimages/virgo.JPG').default,
};

function ConstellationFinder() {
  const [userLocation, setUserLocation] = useState('');
  const [constellationsList, setConstellationsList] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  // Customize this function to provide image URLs for each constellation
  const getConstellationImageURL = (constellationName) => {
    return constellationImages[constellationName];
  };

  const startGame = () => {
    setUserLocation(userLocation.trim());
    // Customize the list of constellations here
    setConstellationsList(['Capricorn', 'Scorpio', 'Gemini', 
    'Sagittarius', 'Pisces', 'Leo', 'Taurus', 'Libra', 'Virgo', 'Aries', 'Cancer']);
    setGameStarted(true);
  };

  const endGame = () => {
    setGameEnded(true);
  };

  const handleAnswer = (constellation, answer) => {
    setUserAnswers({ ...userAnswers, [constellation]: answer });
  };

  const countCorrectAnswers = () => {
    let correctCount = 0;
    for (const constellation in userAnswers) {
      if (userAnswers[constellation] === 'yes') {
        correctCount++;
      }
    }
    return correctCount;
  };

  return (
    <div>
      <h1 className="finder">Constellation Hunt</h1>
      {!gameStarted && (
        <div>
          <div className="question">
            <p>Enter your location:</p>
            <input
              type="text"
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
            />
          </div>
          <button onClick={startGame}>Start Game</button>
        </div>
      )}
      {gameStarted && !gameEnded && (
        <div>
          <h2>Constellations to Find:</h2>
          <div id="constellations">
            {constellationsList.map((constellation) => (
              <div key={constellation}>
                <p>{constellation}</p>
                <img
                  className="constellation-image"
                  src={constellation}
                  alt={constellation}
                />
                <button onClick={() => handleAnswer(constellation, 'yes')}>Found</button>
                <button onClick={() => handleAnswer(constellation, 'no')}>Not Found</button>
              </div>
            ))}
          </div>
          <button onClick={endGame}>End Game</button>
        </div>
      )}
      {gameEnded && (
        <div>
          <h2>Game Over!</h2>
          <p>You found {countCorrectAnswers()} out of {constellationsList.length} constellations!</p>
        </div>
      )}
    </div>
  );
}

export default ConstellationFinder;
