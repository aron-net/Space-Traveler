import { NavLink } from 'react-router-dom';
import ar from '../../Image/3212567.png';
import './NavBar.css';

const NavBar = () => (
  <div className="nav">
    <div className="nav-bar">
      <img className="log" src={ar} alt="planet" />
      <h1>Space Travelers&sbquo; Help</h1>
    </div>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/Missions">Missions</NavLink>
    <NavLink to="/Dragons">Dragons</NavLink>
    <NavLink to="/MyProfile">My Profile</NavLink>
  </div>
);

export default NavBar;
