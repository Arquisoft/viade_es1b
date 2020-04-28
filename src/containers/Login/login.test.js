import React from "react";
import {
  cleanup,
  render,
  queryByTestId,
  queryByText,
  act,
} from "@testing-library/react";
import Login from "./login.component";

let wrapper;
beforeEach(() =>
  act(() => {
    const { container, debug } = render(<Login />);
    wrapper = container;
    //debug();
  })
);

describe("Login", () => {
  afterAll(cleanup);

  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  test("renders with styled components", () => {
    expect(document.querySelector(".login-panel")).toBeTruthy();
    expect(document.querySelector(".panel-body")).toBeTruthy();
  });
  test("renders title properly", () => {
    expect(queryByTestId(wrapper, "login-title")).not.toBeNull();
  });

  test("renders login button properly ", () => {
    expect(queryByText(wrapper, "login.formButtonText")).toBeTruthy();
  });
});
