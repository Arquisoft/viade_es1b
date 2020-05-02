import React from "react";
import { cleanup, screen } from "@testing-library/react";
import Point from "./point";
import "@testing-library/jest-dom";

const p = new Point(1,1,1);
describe.only("Create point", () => {
  afterAll(cleanup);

  it("object created correctly", () => {
    expect(p).toBeTruthy();
  });

  it("obtaining coordinates", () => {
    expect(p.getCoordinates()).not.toBeNull();
  });
});