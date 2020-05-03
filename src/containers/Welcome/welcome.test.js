import React from "react";
import { render, queryByTestId, act } from "@testing-library/react";
import Welcome from "../Welcome";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() =>
  act(() => {
    const { container, debug } = render(<Welcome />);
    wrapper = container;
    //debug();
  })
);

describe("Welcome Page Render", () => {
  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  test("renders all components", () => {
    expect(queryByTestId(wrapper, "welcome-logo")).not.toBeNull();
    expect(queryByTestId(wrapper, "welcome-wrapper")).not.toBeNull();
    expect(queryByTestId(wrapper, "welcome-profile")).not.toBeNull();
  });

  test("renders with default props", () => {
    const wrappers = shallow(<Welcome />);
    expect(wrappers).toMatchSnapshot();
  });
});
