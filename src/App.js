import {Routes, Route} from 'react-router-dom'; 
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Rocket} from './Components/page/Rockets';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/Rocket" element={<Rocket />} /> 
      </Routes>
    </div>
  );
}

export default App;
