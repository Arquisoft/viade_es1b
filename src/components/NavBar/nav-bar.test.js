import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './nav-bar.component';
import '@testing-library/jest-dom'

afterAll(cleanup);

describe.only('Nav Bar', () => {
  const { container, debug } = render(
    
      <NavBar />
      
  );
  //debug()

  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
  debug();
  it('renders with all available links', () => {
    
    expect(container.querySelector('.navigation')).toBeDefined();
    expect(screen.queryByText('Map')).toBeDefined();
    expect(screen.queryByText('Upload')).toBeDefined();
    expect(screen.queryByText('Download')).toBeDefined();
    expect(screen.queryByText('Profile')).toBeDefined();
    
  });

  
});
