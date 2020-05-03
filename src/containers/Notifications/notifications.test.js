import React from "react";
import { cleanup, render, queryByTestId, act } from "@testing-library/react";
import NotificationList from "./NotificationsList";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() =>
  act(() => {
    const { container, debug } = render(<NotificationList />);
    wrapper = container;
    //debug();
  })
);

describe("Login", () => {
  afterAll(cleanup);

  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  test("renders title properly", () => {
    expect(queryByTestId(wrapper, "notifications-title")).not.toBeNull();
  });

  test("renders notifications list ", () => {
    expect(queryByTestId(wrapper, "notifications-list")).not.toBeNull();
  });

  test("renders with default props", () => {
    const wrappers = shallow(<NotificationList />);
    expect(wrappers).toMatchSnapshot();
  });
});
