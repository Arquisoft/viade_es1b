import React from "react";
import {
  cleanup,
  render,
  queryByTestId,
  queryByText,
  querySelector,
  act,
} from "@testing-library/react";
import Createc from "./createRoute.container";

let wrapper;
beforeEach(() =>
  act(() => {
    const { container, debug } = render(<Createc />);
    wrapper = container;
    //debug();
  })
);

describe("Login", () => {
  afterAll(cleanup);

  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  test("render the page", () => {
    expect(wrapper.querySelector("#upload-button")).not.toBeNull();
    expect(queryByTestId(wrapper, "clear-button")).not.toBeNull();
  });

  test("renders add a route", () => {
    expect(queryByTestId(wrapper, "name-input")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-videos-button")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-images-button")).not.toBeNull();
    expect(queryByTestId(wrapper, "clear-button")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-button")).not.toBeNull();
  });
});