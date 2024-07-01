import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;