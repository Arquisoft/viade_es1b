import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loader from "./loader.component";

afterAll(cleanup);

it('renders without crashing', () => {
  const { container } = render(<Loader />);

  expect(container).toBeTruthy();
});
