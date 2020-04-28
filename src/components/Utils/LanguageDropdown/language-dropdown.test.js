import React from "react";
import { render, cleanup } from "@testing-library/react";
import Language from "./language-dropdown.component";

afterAll(cleanup);

const { container } = render(<Language t={(key) => key} />);

describe("Language", () => {
  it("renders without crashing", () => {
    expect(container).toBeTruthy();
  });
});
