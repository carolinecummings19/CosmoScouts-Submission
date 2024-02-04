// StarGazing.js
import React from 'react';
import './Quiz.css'; // Import the external CSS file
import saturn from './astro_saturn.png';

const Quiz = () => {
  const checkAnswers = () => {
    const answers = {
      q1: "Sun",
      q2: "Mercury",
      q3: "Jupiter",
      q4: "365 days",
      q5: "Gravity"
    };

    let correctCount = 0;

    for (const question in answers) {
      const userAnswer = document.querySelector(`input[name=${question}]:checked`);
      if (userAnswer && userAnswer.value.toLowerCase() === answers[question].toLowerCase()) {
        correctCount++;
      }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `You got ${correctCount} out of ${Object.keys(answers).length} questions correct!`;
    resultElement.style.color = correctCount === Object.keys(answers).length ? 'green' : 'red';
  };

  return (
    <div>
      <h1 className="solar-system-title"> The Solar System</h1>
      
      <div className="image-saturn">
        <img src={saturn} className='saturn' />
      </div>

      <div className="info">
        <p>In the vast expanse of our solar system, everything dances to the cosmic choreography conducted by the Sun, a celestial giant blazing with the brilliance of a star. Eight planets, each with its unique personality, pirouette around this fiery maestro. Mercury, the Sun's closest confidant, twirls gracefully, while Neptune, the cosmic recluse, waltzes in the farthest reaches.

        Among this planetary ballet, Jupiter commands attention as the grandest performer, a colossal giant, while Mercury executes its routine with the delicate finesse of a celestial ballet dancer. Earth, the only known haven for life, orchestrates its dual dance—rotating on its axis as it revolves around the Sun, a celestial pas de deux that defines our days and years.

        As Earth completes its annual circuit, we mark the passage of time—a journey of 365 days we call a year. Meanwhile, in the grand cosmic theater, the Sun is just one luminary among a stellar cast of hundreds of billions, within the Milky Way galaxy, our galactic home. Yet, the vastness of the cosmos expands beyond imagination, boasting a staggering ensemble of at least 100 billion galaxies.

        In this cosmic spectacle, gravity takes center stage, an invisible force that keeps us grounded on Earth while orchestrating the planetary ballet. But not every celestial body follows the solar script—our Moon, a loyal companion, pirouettes around Earth, adding a celestial subplot to our cosmic narrative. In this dance of the cosmos, each celestial entity contributes its own unique steps, creating a mesmerizing tapestry woven across the vastness of the universe.
        </p>
        
      </div>

      <h1 className="quiz-title"> Quiz Yourself!</h1>

      <div className="question">
        <p>1. Everything in the Solar System revolves around the:</p>
        
        <label>
          <input type="radio" name="q1" value="Earth" /> Earth
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="Sun" /> Sun
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="Moon" /> Moon
        </label>
      </div>

      <div className="question">
        <p>2. The closest planet to the Sun is:</p>
        <label>
          <input type="radio" name="q2" value="Mercury" /> Mercury
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="Mars" /> Mars
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="Venus" /> Venus
        </label>
        
      </div>

      <div className="question">
        <p>3. The biggest planet is:</p>
        <label>
          <input type="radio" name="q3" value="Jupiter" /> Jupiter
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="Saturn" /> Saturn
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="Neptune" /> Neptune
        </label>
      </div>

      <div className="question">
        <p>4. How long does it take for the Earth to complete one rotation around the Sun?</p>
        <label>
          <input type="radio" name="q4" value="365 days" /> 365 days
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="24 hours" /> 24 hours
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="1 month" /> 1 month
        </label>
      </div>

      <div className="question">
        <p>5. What force keeps everything in the Solar System, including planets, in orbit?</p>
        <label>
          <input type="radio" name="q5" value="Magnetism" /> Magnetism
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="Gravity" /> Gravity
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="Electricity" /> Electricity
        </label>
      </div>

      <button onClick={checkAnswers}>Submit Answers</button>
      <p id="result"></p>
      
    </div>


  );
};

export default Quiz;

