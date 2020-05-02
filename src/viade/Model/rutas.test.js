import { cleanup } from "@testing-library/react";
import Rutas from "./rutas";
import "@testing-library/jest-dom";
import ruta1 from "./route1.json";

describe.only("Create route", () => {

  afterAll(cleanup);
  it("object created correctly", () => {
    expect(Rutas).toBeTruthy();
  });

  it("names array created correctly", () => {
    expect(Rutas.getNames()).toHaveLength(1);
  });

  it("names array created correctly", () => {
    Rutas.vaciarRutas();
    expect(Rutas.getNames()).toHaveLength(1);
  });

  it("Testing getRutaByName", () => {
    expect(Rutas.getRutaByName("Ruta").name).toEqual(ruta1.name);
  });

  it("checking method vaciarRutas() ", () => {
    var expected = []
    expect(Rutas.vaciarRutas.length).toEqual(expected.length);
  });

});