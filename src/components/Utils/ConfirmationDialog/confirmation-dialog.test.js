import React from "react";
import { render, cleanup } from "@testing-library/react";
import ConfirmationDialog from "./confirmation-dialog.component";

afterAll(cleanup);

describe.only('ConfirmationDialog', () => {
  const { container } = render(
    <div id="test">
      <ConfirmationDialog options={{ message: 'This is a test' }} parentSelector="#test" />
    </div>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
