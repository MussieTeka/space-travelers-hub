import React from 'react';
import { render } from '@testing-library/react';
import NotMemberButton from '../components/NotMemberButton';

describe('NotMemberButton', () => {
  test('renders without errors', () => {
    render(<NotMemberButton />);
  });
});
