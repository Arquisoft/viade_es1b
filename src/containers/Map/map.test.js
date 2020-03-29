import React from 'react';
import { render, queryByTestId, queryByText } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Map from './map.component';

let wrapper;
beforeEach(() => {
  const { container, debug } = render(
    <Router>
      <Map />
    </Router>
  );
  wrapper = container;
  debug();
});

describe('Map', () => {
  

  test('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('renders all components', () => {
    expect(queryByTestId(wrapper, "map-title")).not.toBeNull();
    expect(queryByTestId(wrapper, "map-routes-list")).not.toBeNull();
    expect(queryByTestId(wrapper, "map-map")).not.toBeNull();
  });

  
});

