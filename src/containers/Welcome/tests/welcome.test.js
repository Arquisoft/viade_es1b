import React from 'react';
import { render, cleanup, getByAltText } from '@testing-library/react';
import Welcome from '../../Welcome';



test('welcome page loads correctly', () => {
  const { getByAltText } = render(<Welcome />);
  const imageWrapper = getByAltText("Inrupt");
  expect(imageWrapper).toBeInTheDocument();
}); 
