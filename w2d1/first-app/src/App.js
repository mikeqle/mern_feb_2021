import './App.css';
import Track from './components/Track';
import Progress from './components/Progress';

function App() {
  return (
    <div className="App">
      <Progress />
      <div style={ { display: "inline-block" } }>
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  );
}

export default App;
