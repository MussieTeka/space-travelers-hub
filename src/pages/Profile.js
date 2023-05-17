import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/components/Profile.module.scss';

const Profile = () => {
  const reservedRockets = useSelector((state) => (
    state.rockets.rocket.filter((rocket) => rocket.reserve)));
  const reservedRocketsData = reservedRockets.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.name,
    }
  ));

  return (
    <div className={styles.wrapper}>
      <h3>Missions</h3>
      <div>
        {reservedRocketsData.length === 0 ? <h3>No Rockets</h3> : <h3 style={{ marginBottom: '10px' }}>Rockets</h3>}
        {reservedRocketsData.map((rocket) => (
          <p key={rocket.id}>{rocket.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
