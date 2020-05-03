import { cleanup } from "@testing-library/react";
import bajarRutas from "./bajarRutas";
import "@testing-library/jest-dom";


describe.only("Create point", () => {
    afterAll(cleanup);

    it("object created correctly", () => {
        expect(bajarRutas).toBeTruthy();
    });



});