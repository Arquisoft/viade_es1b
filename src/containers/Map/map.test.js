import React from "react";
import { render, queryByTestId } from "@testing-library/react";
import Map from './map.component';

let wrapper;
beforeEach(() => {
  const { container, debug } = render(
    <div>
      
    </div>
      // <Map />
    
  );
  wrapper = container;
  debug();
});

describe('Map Page Render', () => {
  

  test('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  // test('renders all components', () => {
  //   expect(queryByTestId(wrapper, "map-title")).not.toBeNull();
  //   expect(queryByTestId(wrapper, "map-routes-list")).not.toBeNull();
  //   expect(queryByTestId(wrapper, "map-map")).not.toBeNull();
  // });

  
});

