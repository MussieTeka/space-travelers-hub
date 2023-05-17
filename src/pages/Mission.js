import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/mission/missionSlice';
import '../styles/pages/Mission.css';
import MissionAction from '../components/MissionAction';

const Mission = () => {
  const missions = useSelector(selectMissions);

  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <MissionAction missionId={mission.mission_id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
