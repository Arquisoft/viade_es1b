import React from 'react';
import ReactDOM from 'react-dom';
import create from 'react-test-renderer';
import { render, cleanup, queryByTestId } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Welcome from '../Welcome';
import { act } from 'react-dom/test-utils';

let wrapper=null;


beforeEach(() => {
  // const { container, debug } = render(
  //   <Router>
  //     <Welcome />
  //   </Router>
  // );
  // wrapper = renderContainer();
  //debug();
});

function renderContainer(){
  let {container, debug}= render(
    <Router>
      <Welcome />
    </Router>
  );
  debug();
  return container;
}

describe('Welcome', () => {

  // act(() => {    
  //   ReactDOM.render(
  //       <Router>
  //         <Welcome /> 
  //       </Router>, wrapper)
    
  // });


  test('App renders without crashing', () => {
    const e1 = document.createElement("div");
    act( ()=>{
      ReactDOM.render(
      <Router>
        <Welcome/>
      </Router>, e1);
    });
    console.log(e1.innerHTML);
    expect(e1.innerHTML).toBeTruthy();
  });

  
  test('includes app logo', () => {
    const e1 = document.createElement("div");
    act(()=>{
      ReactDOM.render(
      <Router>
        <Welcome/>
      </Router>, e1);
    });
    console.log(e1.innerHTML);
    expect(queryByTestId(e1, "welcome-logo")).not.toBeNull();
    
  });

  test('includes app details', () => {

    expect(queryByTestId(wrapper, "welcome-detail")).not.toBeNull();
    
  });


});