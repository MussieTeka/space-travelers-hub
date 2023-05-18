import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import MissionAction from '../components/MissionAction';
import { joinMission } from '../redux/mission/missionSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionAction', () => {
  const missionId = '123';

  it('dispatches joinMission action when the button is clicked', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(<MissionAction missionId={missionId} />);
    const joinButton = getByText('Join Mission');

    fireEvent.click(joinButton);

    expect(dispatchMock).toHaveBeenCalledWith(joinMission(missionId));
  });
});
