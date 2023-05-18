import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import RocketItem from '../components/RocketItem';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('RocketItem', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test('renders RocketList component for each rocket', () => {
    const rockets = [
      {
        id: '1',
        name: 'Falcon 9',
        image: 'falcon9.jpg',
        description: 'This is the Falcon 9 rocket.',
        reserve: false,
      },
      {
        id: '2',
        name: 'Starship',
        image: 'starship.jpg',
        description: 'This is the Starship rocket.',
        reserve: true,
      },
    ];

    useSelector.mockReturnValue(rockets);
    useDispatch.mockReturnValue(jest.fn());

    const { getAllByTestId } = render(<RocketItem />);

    const rocketListComponents = getAllByTestId('rocket-list');

    expect(rocketListComponents).toHaveLength(rockets.length);
  });
});