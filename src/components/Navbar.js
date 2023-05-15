import React from 'react';
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
        <li to="/">Rockets</li>
        <li to="/missions">Missions</li>
        <span>|</span>
        <li to="/profile">My Profile</li>
      </ul>
    </nav>
    <hr className={styles.horizontal} />
  </div>
);

export default Navbar;
