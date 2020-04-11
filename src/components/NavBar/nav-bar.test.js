import React from 'react';
import { render, cleanup, act, queryByTestId } from '@testing-library/react';
import NavBar from './nav-bar.component';
import '@testing-library/jest-dom'


let wrapper;
beforeEach(() => act(() => {
  const { container, debug } = render(
    <NavBar />
  );
  wrapper = container;
  debug();
}

));

describe.only('Nav Bar', () => {
  afterAll(cleanup);

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders with all available links', async() => {
    
    await expect(queryByTestId(wrapper, "nav-bar-home")).not.toBeNull();
    await expect(queryByTestId(wrapper, "nav-bar-map")).not.toBeNull();
    await expect(queryByTestId(wrapper, "nav-bar-createRoute")).not.toBeNull();
    await expect(queryByTestId(wrapper, "nav-bar-download")).not.toBeNull();
    await expect(queryByTestId(wrapper, "nav-bar-profile")).not.toBeNull();
    await expect(queryByTestId(wrapper, "nav-bar-language")).not.toBeNull();
    await expect(queryByTestId(wrapper, "nav-bar-logout")).not.toBeNull();
    
  });

  
});
