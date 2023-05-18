import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/pages/Profile.module.scss';

const Profile = () => {
  const reservedRockets = useSelector((state) => (
    state.rockets.rocket.filter((rocket) => rocket.reserve)
  ));
  const reservedMissions = useSelector((state) => (
    state.missions.missions.filter((mission) => mission.reserved)
  ));

  const reservedRocketsData = reservedRockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
  }));

  const reservedMissionsData = reservedMissions.map((mission) => ({
    missionId: mission.mission_id,
    missionName: mission.mission_name,
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableContainer}>
        <h3 className={styles.tableHeader}>My Missions</h3>
        {reservedMissionsData.length === 0 ? (
          <p>No Missions</p>
        ) : (
          <table className={styles.table}>
            <tbody>
              {reservedMissionsData.map((mission) => (
                <tr key={mission.missionId}>
                  <td>{mission.missionName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles.tableContainer}>
        <h3 className={styles.tableHeader}>My Rockets</h3>
        {reservedRocketsData.length === 0 ? (
          <p>No Rockets</p>
        ) : (
          <table className={styles.table}>
            <tbody>
              {reservedRocketsData.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Profile;
