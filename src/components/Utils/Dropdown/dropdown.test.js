import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import Dropdown from './dropdown.component';

//afterAll(cleanup);
let wrapper;
beforeEach(() => {
  const { container, debug } = render(<Dropdown className="dropDownContainer" />);
  wrapper = container;
  debug();
});


describe.only('Dropdown', () => {
  

  test('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('renders styled components', () => {
    expect(getByTestId(wrapper, 'dropdown-container')).toBeTruthy();
    expect(getByTestId(wrapper, 'dropdownMain')).toBeTruthy();
  });
});
