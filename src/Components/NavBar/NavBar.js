import { NavLink } from 'react-router-dom';
import ar from '../../Image/logo.png';
import './NavBar.css';

const NavBar = () => (
  <div className="nav">
    <div className="nav-bar">
      <img className="log" src={ar} alt="planet" />
      <h1 className="main-title">Space Travelers&sbquo; Hub</h1>
    </div>
    <div className="Navlinks">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <NavLink to="/Dragons">Dragons</NavLink>
      <NavLink to="/MyProfile">My Profile</NavLink>
    </div>
  </div>
);

export default NavBar;
