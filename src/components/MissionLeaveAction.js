import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission } from '../redux/mission/missionSlice';
import '../styles/components/MissionLeaveAction.css';

const MissionLeaveAction = ({ missionId }) => {
  const dispatch = useDispatch();

  const handleLeaveMission = () => {
    dispatch(leaveMission(missionId));
  };

  return (
    <button type="button" className="mission-leave-button" onClick={handleLeaveMission}>
      Leave Mission
    </button>
  );
};

MissionLeaveAction.propTypes = {
  missionId: PropTypes.string.isRequired,
};

export default MissionLeaveAction;
