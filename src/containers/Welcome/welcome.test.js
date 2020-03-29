import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, queryByTestId } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Welcome from '../Welcome';
import { act } from 'react-dom/test-utils';

let wrapper;

beforeEach(() => {
  wrapper = document.createElement('section');
  document.body.appendChild(wrapper);
  console.log(wrapper);
});


// beforeEach(() => {
//   const { container, debug } = render(
//     <Router>
//       <Welcome />
//     </Router>
//   );
//   wrapper = container;
//   debug();
// });

describe('Welcome', () => {

  act(() => {    
    ReactDOM.render(
        <Router>
          <Welcome /> 
        </Router>, wrapper)
    
  });

  test('App renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  
  test('includes app logo', () => {

    expect(queryByTestId(wrapper, "welcome-logo")).not.toBeNull();
    
  });

  test('includes app details', () => {

    expect(queryByTestId(wrapper, "welcome-detail")).not.toBeNull();
    
  });


});