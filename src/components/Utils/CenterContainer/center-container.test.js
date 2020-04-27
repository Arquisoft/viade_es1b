import React from "react";
import { render, cleanup, queryByTestId } from "@testing-library/react";
import CenterContainer from "./center-container.component";

afterAll(cleanup);

let wrapper;
beforeEach(() => {
  const { container } = render(
    <CenterContainer className="centerContainerWrapper" />
  );
  wrapper = container;
});

describe.only("CenterContainer", () => {
  // const { container } = render(<CenterContainer className="centerContainerWrapper" />);

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders styled components", () => {
    expect(queryByTestId(wrapper, "centerContainer-wrapper")).toBeTruthy();
  });

  it("renders properly", () => {
    expect(document.querySelector("div.wrapper")).toBeTruthy();
  });
});
