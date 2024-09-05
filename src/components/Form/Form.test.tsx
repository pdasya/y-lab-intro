import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";
import mockFetch from "@utils/mockFetch";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";

vi.mock("@utils/mockFetch");

describe("Form Component", () => {
  const mockResponse = { success: true };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form with inputs and submit button", () => {
    render(<Form />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("shows loader when submitting form", async () => {
    render(<Form />);

    (mockFetch as Mock).mockResolvedValueOnce(mockResponse);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByTestId(/loader/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });

  it("displays modal with success message on successful login", async () => {
    (mockFetch as Mock).mockResolvedValueOnce(mockResponse);

    render(<Form />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/you are successfully logged in/i),
      ).toBeInTheDocument();
    });
  });

  it("displays modal with error message on failed login", async () => {
    (mockFetch as Mock).mockResolvedValueOnce({
      success: false,
      message: "Invalid credentials",
    });

    render(<Form />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });

  it("clears form inputs after submission", async () => {
    (mockFetch as Mock).mockResolvedValueOnce(mockResponse);

    render(<Form />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(emailInput).toHaveValue("");
      expect(passwordInput).toHaveValue("");
    });
  });
});
