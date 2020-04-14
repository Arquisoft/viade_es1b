import React from "react";
import { cleanup, render, queryByTestId, act } from "@testing-library/react";
import Download from "./download.component";

let wrapper;
beforeEach(() => act(() => {
  const { container, debug } = render(
    <Download />
  );
  wrapper = container;
  debug();
}

));

describe("Download Page Render", () => {

    afterAll(cleanup);

    test("App renders without crashing", () => {
      expect(wrapper).toBeTruthy();
    });
    
    test("includes components to download", () => {
  
      expect(queryByTestId(wrapper, "download-input")).not.toBeNull();
      expect(queryByTestId(wrapper, "download-button")).not.toBeNull();
      
    });

});

// describe('Download Routes Function', () => {
  
//   afterAll(cleanup);

//   test('Input without URL', () => {
    
//   });

//   test('URL without routes', () => {

//   });

//   test('Given a correct file, it is downloaded correctly', () => {
    
//   });

// });