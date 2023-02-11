import './App.css';
import Wordle from './components/Wordle.jsx';

const words = ['arise', 'mound', 'dance', 'ouija', 'smite', 'tripe', 'chant', 'epoxy', 'cynic', 'vivid', 'depot', 'movie', 'their', 'aroma', 'allow', 'proxy'];

const word = words[Math.floor(Math.random() * words.length)];

function App() {
  return (
    <div className="App">
      <header className="title">
        Hello Wordle!
      </header>
      <Wordle word={word}/>
      <footer>
        This is the footer
      </footer>
    </div>
  );
}

export default App;
