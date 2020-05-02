import { cleanup } from "@testing-library/react";
import AddFriend from "./addFriend";
import "@testing-library/jest-dom";

describe.only("Add friends", () => {

  afterAll(cleanup);
  it("object created correctly", () => {
    expect(AddFriend).toBeTruthy();
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