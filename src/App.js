import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import RocketPage from './Components/page/RocketPage';
import MissionPage from './Components/page/MissionsPage';
import MyProfilePage from './Components/page/MyProfilePage';
import DragonPage from './Components/page/DragonsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="/Missions" element={<MissionPage />} />
        <Route path="/Dragons" element={<DragonPage />} />
        <Route path="/MyProfile" element={<MyProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
