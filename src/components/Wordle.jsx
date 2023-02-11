import React, {useState} from 'react';

import './Wordle.css';
import WordBox from './WordBox.jsx';

const Wordle = ({word}) => {
  const [board, setBoard] = useState([
    [{letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}],
    [{letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}],
    [{letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}],
    [{letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}],
    [{letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}],
    [{letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}, {letter: '', color: "white"}]
  ]);

  const [turn, setTurn] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [guess, setGuess] = useState('');

  const handleInputChange = (event) => {
    setGuess(event.target.value);

    const newBoard = [...board];
    for (let i = 0; i < newBoard[turn].length; i++) {
      newBoard[turn][i].letter = event.target.value[i];
    }
    setBoard(newBoard);
  }

  const handleSubmit = () => {
    if (guess.length !== 5) {
      console.error("Guess is not 5 letters, try again!");
      return;
    }

    const newBoard = [...board];

    // construct word into a hash
    const characterCount = word.split('').reduce((charCount, char) => {
      charCount[char] = (charCount[char] || 0) + 1;
      return charCount;
    }, {});

    // first pass: check for matching letters
    for (let i = 0; i < 5; i++) {
      let char = guess[i];

      if (char === word[i]) {
        newBoard[turn][i].color = "green";
        characterCount[char] -= 1;
      }
    }
    
    // second pass: check for letters in the wrong area
    for (let i = 0; i < 5; i++) {
      let char = guess[i];

      console.log(characterCount);

      if (newBoard[turn][i].color !== "green") {
        if (characterCount[char] > 0) {
          newBoard[turn][i].color = "yellow";
          characterCount[char] -= 1;
        }
      }
    }

    setBoard(newBoard);

    continueTurn();
  }

  const continueTurn = () => {
    if (turn > 5) {
      setIsGameOver(true);
    } else {
      setTurn(turn + 1);
    }
  }

  return (
    <div className="wordle">
      <WordBox board={board}/>

      <p>{isGameOver ? 'Game Over' : 'You are on guess #' + turn}</p>
      <p>Last guess: '{guess}'</p>
      <p>Word is: '{word}'</p>

      <input
        type="text"
        onChange={event => handleInputChange(event)}
        value={guess}
      />

      <button onClick={() => handleSubmit()}>Submit guess</button>
    </div>
  );
};

export default Wordle;
