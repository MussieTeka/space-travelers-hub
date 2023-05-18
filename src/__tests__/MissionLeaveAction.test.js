import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import MissionLeaveAction from '../components/MissionLeaveAction';
import { leaveMission } from '../redux/mission/missionSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionLeaveAction', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    const missionId = 'mission-123';
    const { container, getByText } = render(<MissionLeaveAction missionId={missionId} />);
    const leaveButton = getByText('Leave Mission');
    expect(container.contains(leaveButton)).toBe(true);
  });

  it('should dispatch the leaveMission action when button is clicked', () => {
    const missionId = 'mission-123';
    const { getByText } = render(<MissionLeaveAction missionId={missionId} />);
    const leaveButton = getByText('Leave Mission');

    fireEvent.click(leaveButton);

    expect(dispatchMock).toHaveBeenCalledWith(leaveMission(missionId));
  });
});
