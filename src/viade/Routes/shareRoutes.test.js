import { cleanup } from "@testing-library/react";
import sharing from "./shareRoutes";
import "@testing-library/jest-dom";

describe.only("Create point", () => {
    afterAll(cleanup);

    it("object created correctly", () => {
        var reto = sharing;
        expect(reto).toEqual(-1);
    });


});