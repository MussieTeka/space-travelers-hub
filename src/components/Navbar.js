import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <img className={styles.logo} src={planet} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink exact="true" to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/missions">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr className={styles.horizontal} />
  </div>
);

export default Navbar;
