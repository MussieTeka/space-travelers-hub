import React from 'react';
import { render } from '@testing-library/react';
import ActiveMemberButton from '../components/ActiveMemberButton';

describe('ActiveMemberButton', () => {
  test('renders without errors', () => {
    render(<ActiveMemberButton />);
  });
});
