import React from "react";
import { render, cleanup, act, queryByTestId } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

let wrapper;
beforeEach(() =>
  act(() => {
    const { container } = render(<App />);
    wrapper = container;
    //debug();
  })
);

describe("App test", ()=>{
    afterAll(cleanup);

    test("renders without crashing",()=>{
        expect(queryByTestId(wrapper, "login-title")).not.toBeNull();
    });
});