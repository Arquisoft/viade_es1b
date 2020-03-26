import React from 'react';
import { render, cleanup, getByAltText } from '@testing-library/react';
import Welcome from '../welcome.component.js';



test('renders learn react link', () => {
  const { getByAltText } = render(<Welcome />);
  const imageWrapper = getByAltText("Inrupt");
  expect(imageWrapper).toBeInTheDocument();
}); 
