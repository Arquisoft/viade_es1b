import { cleanup } from "@testing-library/react";
import Ruta from "./ruta";
import "@testing-library/jest-dom";
import ruta1 from "./route1.json";

const p = new Ruta(ruta1);
const e = new Ruta(null);
describe.only("Create route", () => {
  afterAll(cleanup);
  it("object created correctly", () => {
    expect(p).toBeTruthy();
  });

  it("object created with no route", () => {
    expect(e.notShow).toEqual(true);
  });
});