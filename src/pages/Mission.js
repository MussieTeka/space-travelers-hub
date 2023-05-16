import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, selectMissions } from '../redux/mission/missionSlice';
import '../styles/pages/Mission.css';

const Mission = () => {
  const missions = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
