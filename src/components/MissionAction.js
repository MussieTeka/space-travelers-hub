import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/mission/missionSlice';
import '../styles/components/MissionAction.css';

const MissionAction = ({ missionId }) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(missionId));
  };

  return (
    <button type="button" className="mission-join-button" onClick={handleJoinMission}>
      Join Mission
    </button>
  );
};

MissionAction.propTypes = {
  missionId: PropTypes.string.isRequired,
};

export default MissionAction;
