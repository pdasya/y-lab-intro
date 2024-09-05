import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";

describe("Input Component", () => {
  const mockOnChange = vi.fn();

  it("renders the input component", () => {
    render(
      <Input
        type="text"
        placeholderText="Enter text"
        id="test-input"
        value=""
        onChange={mockOnChange}
      />,
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders the correct placeholder text", () => {
    render(
      <Input
        type="text"
        placeholderText="Enter text"
        id="test-input"
        value=""
        onChange={mockOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders with the correct label text", () => {
    render(
      <Input
        type="text"
        placeholderText="Enter text"
        id="Test Label"
        value=""
        onChange={mockOnChange}
      />,
    );

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("calls onChange function when input changes", () => {
    render(
      <Input
        type="text"
        placeholderText="Enter text"
        id="test-input"
        value=""
        onChange={mockOnChange}
      />,
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("displays the correct value", () => {
    render(
      <Input
        type="text"
        placeholderText="Enter text"
        id="test-input"
        value="test value"
        onChange={mockOnChange}
      />,
    );

    const inputElement = screen.getByDisplayValue("test value");
    expect(inputElement).toBeInTheDocument();
  });
});
