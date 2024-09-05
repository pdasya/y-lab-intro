import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";

vi.mock("@views/Main", () => ({
  default: () => <div>Main Component</div>,
}));

describe("App Component", () => {
  it("renders the App component", () => {
    render(<App />);

    expect(screen.getByText("Main Component")).toBeInTheDocument();
  });

  it("renders the Main component inside App", () => {
    render(<App />);

    expect(screen.getByText("Main Component")).toBeInTheDocument();
  });
});
