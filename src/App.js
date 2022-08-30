import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import RocketPage from './Components/page/RocketPage';
import MissionPage from './Components/page/MissionsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="/Missions" element={<MissionPage />} />
      </Routes>
    </div>
  );
}

export default App;
