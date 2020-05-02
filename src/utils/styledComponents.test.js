import { cleanup } from "@testing-library/react";
import {media} from "./styledComponents";
import "@testing-library/jest-dom";

describe.only("Testing const", () => {
  afterAll(cleanup);

  it("object created correctly", () => {
    expect(media).toBeTruthy();
  });
});