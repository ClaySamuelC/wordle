import React, {useState} from 'react';

import './Wordle.css';
import WordBox from './WordBox.jsx';

const Wordle = ({word}) => {
  const [currentGuess, setCurrentGuess] = useState(0);

  return (
    <div className="wordle">
      <WordBox />

      <div>{currentGuess}</div>

      <form onSubmit={() => setCurrentGuess(guess => guess + 1)}>
        <label>
          Guess Here:
          <input type="text" name="guess" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Wordle;
