import React from "react";
import { cleanup, render, queryByTestId, act } from "@testing-library/react";
import PageNotFound from "./page-not-found.component";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() =>
  act(() => {
    const { container, debug } = render(<PageNotFound />);
    wrapper = container;
    //debug();
  })
);

describe("Page Not Found Page Render", () => {
  afterAll(cleanup);

  test("App renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  test("includes link to homepage", () => {
    expect(queryByTestId(wrapper, "page-not-found-homepage")).not.toBeNull();
  });

  test("renders with default props", () => {
    const wrappers = shallow(<PageNotFound />);
    expect(wrappers).toMatchSnapshot();
  });
});
