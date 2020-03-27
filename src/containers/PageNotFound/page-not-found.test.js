import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './page-not-found.component';

describe('Page Not Found', () => {
  afterAll(cleanup);

  const { container, debug } = render(
    <Router>
      <PageNotFound />
    </Router>
  );

  test('App renders without crashing', () => {
    expect(container).toBeTruthy();
  });
debug();
  test('includes link to homepage', () => {
    const idsLink = document.querySelector('.ids-link');

    expect(idsLink).toBeDefined();
  });
});
