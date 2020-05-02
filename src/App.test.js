import React from "react";
import { render, cleanup, act, queryByTestId } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";

let wrapper;
beforeEach(() =>
  act(() => {
    const { container, debug } = render(<App />);
    wrapper = container;
    //debug();
  })
);

describe("App test", ()=>{
    afterAll(cleanup);

    test("redners without crashing",()=>{
        expect((wrapper).not.toBeNull());
    })
});