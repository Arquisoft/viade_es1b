import { cleanup } from "@testing-library/react";
import bajarRutas from "./bajarRutas";
import "@testing-library/jest-dom";


describe.only("Create point", () => {
    afterAll(cleanup);

    it("object created correctly", () => {
        expect(bajarRutas).toBeTruthy();
    });

    it("object created correctly", () => {
        expect(bajarRutas.loadJSon("", "")).toBeVisible;
    });

    it("object created correctly", async () => {
        var array = [1, 2, 3];
        expect(bajarRutas.ifCopied(array, "", "d", "d")).toBeVisible;
    });

    it("object created correctly", () => {
        expect(bajarRutas.aux([], 0)).toBeVisible;
    });
});