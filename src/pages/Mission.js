import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/mission/missionSlice';
import '../styles/pages/Mission.css';
import MissionAction from '../components/MissionAction';
import MissionLeaveAction from '../components/MissionLeaveAction';
import ActiveMemberButton from '../components/ActiveMemberButton';
import NotMemberButton from '../components/NotMemberButton';

const MemberStatus = ({ reserved }) => (
  <td>{reserved ? <ActiveMemberButton /> : <NotMemberButton />}</td>
);

MemberStatus.propTypes = {
  reserved: PropTypes.bool.isRequired,
};

const Mission = () => {
  const missions = useSelector(selectMissions);

  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <MemberStatus reserved={mission.reserved} />
              <td>
                {mission.reserved ? (
                  <MissionLeaveAction missionId={mission.mission_id} />
                ) : (
                  <MissionAction missionId={mission.mission_id} />
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
