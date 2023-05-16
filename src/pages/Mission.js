import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/mission/missionSlice';

const Mission = () => {
  const missions = useSelector(selectMissions);

  return (
    <div>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Mission;
