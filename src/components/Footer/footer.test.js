import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './footer.component';

afterAll(cleanup);

describe.only('Nav Bar', () => {
  const { container } = render(
    <Router>
      <Footer />
    </Router>
  );

  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
