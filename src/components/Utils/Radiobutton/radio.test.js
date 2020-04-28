import React from "react"
import { render, cleanup } from "@testing-library/react"
import Radio from "./radio.component"

afterAll(cleanup)

const { container } = render(<Radio />)

describe("Radio", () => {
  it("renders without crashing", () => {
    expect(container).toBeTruthy()
  })
})
