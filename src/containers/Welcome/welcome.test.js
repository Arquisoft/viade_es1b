import React from 'react';
import { render, cleanup, queryByTestId, wait } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import WelcomeComponent from '../Welcome';
import TestRenderer from 'react-test-renderer';

let wrapper;
const props = {
  webId: 'https://exmaple.com/#me',
  image: 'test.png',
  updatePhoto: 'updated.png',
  name: 'example'
};

beforeEach(() => {
    //FUNCIONA PERO NO CARGA LA PARTE DE LOGGEDIN
    TestRenderer.act(()=> {
      wrapper = TestRenderer.create(<Router><WelcomeComponent {...{...props}}/></Router>);
    });

    //No funciona por el await... Sigo sin saber por que
    // await TestRenderer.act(async ()=> {
    //   wrapper = TestRenderer.create(<Router><WelcomeComponent {...{...props}}/></Router>);
    // });
});

describe('Welcome', () => {


  test('App renders without crashing', () => {
    
    expect(wrapper).toBeTruthy();
    
  });

  
  test('includes app logo', () => {
    
    expect(queryByTestId(e1, "welcome-logo")).not.toBeNull();
    
  });

  test('includes app details', () => {

    expect(queryByTestId(wrapper, "welcome-detail")).not.toBeNull();
    
  });


});
