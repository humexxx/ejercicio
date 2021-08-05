import './App.css';
import Posts from './components/Posts';

const QUANTITY = 3

function App() {
  return (
    <div className="App">
      <h1>{QUANTITY} Random posts</h1>
      <Posts quantity={QUANTITY} />
    </div>
  );
}

export default App;
