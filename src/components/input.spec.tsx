import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

describe("Input", () => {
  it("should render an input", () => {
    render(<Input label="Full name" name="name" />);
    expect(
      screen.getByRole("textbox", { name: /full name/i })
    ).toBeInTheDocument();
  });

  it("should change input value", () => {
    render(<Input label="Full name" name="name" />);
    const input = screen.getByRole("textbox", { name: /full name/i });
    userEvent.type(input, "John Doe");
    expect(input).toHaveValue("John Doe");
  });

  it("should render an input with error", () => {
    render(
      <Input label="Full name" name="name" error="Please enter your name" />
    );
    expect(
      screen.getByRole("textbox", { name: /full name/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent(
      /please enter your name/i
    );
  });
});
