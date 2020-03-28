import React from 'react';
import { render, cleanup, queryByTestId, queryByAltText, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import PageNotFound from './page-not-found.component';

let wrapper;
beforeEach(() => {
  const { container, debug } = render(
    <Router>
      <PageNotFound />
    </Router>
  );
  wrapper = container;
    debug();
});

describe('Page Not Found', () => {
  afterAll(cleanup);

  test('App renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  
  test('includes link to homepage', () => {

    expect(queryByTestId(wrapper, "page-not-found-homepage")).not.toBeNull();
    
  });


});
