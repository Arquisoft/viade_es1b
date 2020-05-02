import { cleanup } from "@testing-library/react";
import { backend } from "./i18n";
import "@testing-library/jest-dom";

describe.only("Create point", () => {
    afterAll(cleanup);
  
    it("constant created", () => {
      expect(backend).toBeTruthy();
    });
  });