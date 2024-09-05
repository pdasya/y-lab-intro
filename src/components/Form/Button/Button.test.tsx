import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";

describe("Button Component", () => {
  it("renders the button component", () => {
    render(<Button buttonText="Click Me" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("displays the correct button text", () => {
    const buttonText = "Submit";
    render(<Button buttonText={buttonText} />);

    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with the correct class", () => {
    render(<Button buttonText="Test" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(/button/i);
  });
});
