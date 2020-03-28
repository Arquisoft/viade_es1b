import React from 'react';
import { render, queryByTestId, queryByText } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login.component';

let wrapper;
beforeEach(() => {
  const { container, debug } = render(
    <Router>
      <LoginComponent t={key => key} />
    </Router>
  );
  wrapper = container;
  debug();
});

describe('Login', () => {
  

  test('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('renders with styled components', () => {
    expect(document.querySelector('.login-panel')).toBeTruthy();
    expect(document.querySelector('.panel-body')).toBeTruthy();
    
  });
  test('renders title properly', () => {
    
    expect(queryByTestId(wrapper, "login-title")).not.toBeNull();
  });

  test('renders login button properly ', () => {
    expect(queryByText(wrapper, "login.formButtonText")).toBeTruthy();
    
  });
});

