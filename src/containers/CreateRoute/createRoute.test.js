import React from "react";
import {
  cleanup,
  render,
  queryByTestId,
  queryByText,
  querySelector,
  act,
} from "@testing-library/react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Createc from "./createRoute.container";

configure({ adapter: new Adapter() });

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

  test("renders individual components", () => {
    expect(queryByTestId(wrapper, "name-input")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-videos-button")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-images-button")).not.toBeNull();
    expect(queryByTestId(wrapper, "clear-button")).not.toBeNull();
    expect(queryByTestId(wrapper, "upload-button")).not.toBeNull();
  });

  test("renders with default props", () => {
    const wrappers = shallow(<Createc />);
    expect(wrappers).toMatchSnapshot();
  });
});