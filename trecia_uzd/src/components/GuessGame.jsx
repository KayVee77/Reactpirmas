import React, { useState } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

const GuessGame = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = (userGuess) => {
    const guessNumber = parseInt(userGuess, 10);
    setAttempts(attempts + 1);

    if (guessNumber > randomNumber) {
      setMessage('Try a lower number');
    } else if (guessNumber < randomNumber) {
      setMessage('Try a higher number');
    } else {
      setMessage('Correct!');
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <GuessForm guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
      <Message message={message} attempts={attempts} />
      <button onClick={resetGame}>New Game</button>
    </div>
  );
};

export default GuessGame;