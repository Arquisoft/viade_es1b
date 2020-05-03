import { cleanup } from "@testing-library/react";
import CreateRouteService from "./CreateRouteService";
import route1 from "../Model/route1.json";
import "@testing-library/jest-dom";

describe.only("Create object", () => {
    afterAll(cleanup);

    it("object created correctly", () => {
        expect(CreateRouteService).toBeTruthy();
    });

    it("testing visibility", () => {
        expect(CreateRouteService.parseArray([], [], "d", "d", "d", "d"));
    });

    it("testing visibility", () => {
        expect(CreateRouteService.subirFicheroAPod("prueba", route1, "id", "d"));
    });

});