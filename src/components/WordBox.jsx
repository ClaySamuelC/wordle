import './WordBox.css';

const WordBox = ({board}) => {
  return (
    <div className="board">
      {board.map((row, y) => {return (
        <div className="row" key={y}>
        {row.map((char, x) => {return (
          <div
            className="letter"
            key={x}
            style={{ backgroundColor: char.color }}
          >
            {char.letter}
          </div>
        )})}
        </div>
      )})}
    </div>
  );
};

export default WordBox;
