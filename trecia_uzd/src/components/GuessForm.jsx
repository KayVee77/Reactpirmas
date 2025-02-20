import React from 'react';

const GuessForm = ({ guess, setGuess, handleGuess }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleGuess(guess);
    setGuess('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="100"
        required
      />
      <button type="submit">Guess</button>
    </form>
  );
};

export default GuessForm;