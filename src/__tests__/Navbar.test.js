import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  it('should render the component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    // Check if the logo is rendered
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeVisible();

    // Check if the title is rendered
    const titleElement = screen.getByText(/Space Travelers' Hub/i);
    expect(titleElement).toBeVisible();

    // Check if the navigation links are rendered
    const rocketsLink = screen.getByText(/Rockets/i);
    const missionsLink = screen.getByText(/Missions/i);
    const profileLink = screen.getByText(/My Profile/i);

    expect(rocketsLink).toBeVisible();
    expect(missionsLink).toBeVisible();
    expect(profileLink).toBeVisible();
  });
});
