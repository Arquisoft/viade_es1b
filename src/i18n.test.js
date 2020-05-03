import React from "react";
import { render } from "@testing-library/react";
import { i18n } from "./i18n";
import { I18nextProvider } from "react-i18next";
import "@testing-library/jest-dom";

describe("i18n constant", () => {
  it("renders without crashing", () => {
    const i = render(<I18nextProvider i18n={i18n} />);
    expect(i).toBeTruthy();
  });
});