import { render, screen } from "@testing-library/react";
import Main from "./Main";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";

// Мокаем компоненты Form и Footer
vi.mock("@components/Form/Form", () => ({
  default: () => <div>Mocked Form Component</div>,
}));

vi.mock("@components/Footer/Footer", () => ({
  default: () => <div>Mocked Footer Component</div>,
}));

describe("Main Component", () => {
  it("renders the Main component", () => {
    render(<Main />);

    // Проверяем, что main элемент рендерится
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  it("renders the Form component inside Main", () => {
    render(<Main />);

    // Проверяем, что замоканный компонент Form рендерится
    expect(screen.getByText("Mocked Form Component")).toBeInTheDocument();
  });

  it("renders the Footer component inside Main", () => {
    render(<Main />);

    // Проверяем, что замоканный компонент Footer рендерится
    expect(screen.getByText("Mocked Footer Component")).toBeInTheDocument();
  });
});
