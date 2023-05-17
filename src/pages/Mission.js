import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMissions, joinMission, leaveMission } from '../redux/mission/missionSlice';
import '../styles/pages/Mission.css';
import MissionAction from '../components/MissionAction';
import MissionLeaveAction from '../components/MissionLeaveAction';

const Mission = () => {
  const missions = useSelector(selectMissions);
  const dispatch = useDispatch();

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <MissionLeaveAction
                    missionId={mission.mission_id}
                    onLeaveMission={handleLeaveMission}
                  />
                ) : (
                  <MissionAction
                    missionId={mission.mission_id}
                    onJoinMission={handleJoinMission}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
