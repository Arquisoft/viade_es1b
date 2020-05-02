import { cleanup } from "@testing-library/react";
import AddFriend from "./addFriend";

import "@testing-library/jest-dom";

describe.only("Add friends", () => {

  afterAll(cleanup);
  it("object created correctly", () => {
    expect(AddFriend).toBeTruthy();
  });
});