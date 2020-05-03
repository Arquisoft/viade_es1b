import { cleanup } from "@testing-library/react";
import { sharing } from "./shareRoutes";
import "@testing-library/jest-dom";
jest.setTimeout(30000);

describe.only("Create point", () => {
    afterAll(cleanup);
    it("object created correctly", async () => {
        expect(await sharing("", "", "", "", "", "")).toBeTruthy();
    });

    it("object created correctly", async () => {
        expect(await sharing("https://marshall6399.solid.community/profile/card#me", "https://marshall6399.solid.community/viade/routes/1588348507_Marcial Rico.json", "viade/share/1111.json", "we", "we", "we")).toBeTruthy();
    });

});