import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <NavLink exact to="/">
          <img className={styles.logo} src={planet} alt="logo" />
        </NavLink>
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={styles.active}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/missions" activeClassName={styles.active}>
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" activeClassName={styles.active}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr className={styles.horizontal} />
  </div>
);

export default Navbar;
