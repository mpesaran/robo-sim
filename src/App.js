import './App.css';
import Robot from './components/Robot';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Robot />
      <footer className="footer">
        <p>&copy; 2024 Robot Simulator. Inspired by Bellroy.com.</p>
      </footer>
    </div>
  );
}

export default App;
