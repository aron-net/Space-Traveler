import {Routes, Route} from 'react-router-dom'; 
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Rocket} from './Components/page/Rockets';
import {Missions} from './Components/page/Missions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
