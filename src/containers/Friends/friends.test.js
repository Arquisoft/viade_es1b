import React from "react";
import {
  cleanup,
  render,
  queryByTestId,
  queryByText,
  act,
} from "@testing-library/react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Friends from "./friends.component";
configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() =>
  act(() => {
    const { container, debug } = render(<Friends />);
    wrapper = container;
    //debug();
  })
);

describe("Login", () => {
  afterAll(cleanup);

  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  test("renders list of friends properly", () => {
    expect(wrapper.querySelector("#lista")).not.toBeNull();
    expect(queryByTestId(wrapper, "remove-button")).not.toBeNull();
  });

  test("renders add a friend component properly", () => {
    expect(queryByTestId(wrapper, "input-webid")).not.toBeNull();
    expect(queryByTestId(wrapper, "add-friend-button")).not.toBeNull();
  });

  test("renders with default props", () => {
    const wrappers = shallow(<Friends />);
    expect(wrappers).toMatchSnapshot();
  });
});
