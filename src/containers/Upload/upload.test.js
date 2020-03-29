import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Upload from './upload.component';

let wrapper;
beforeEach(() => {
  const { container, debug } = render(
    <Router>
      <Upload />
    </Router>
  );
  wrapper = container;
  debug();
});

describe('Upload', () => {
  

  test('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('renders all components', () => {
    expect(queryByTestId(wrapper, "upload-input")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-button")).not.toBeNull();
  });

  
});

