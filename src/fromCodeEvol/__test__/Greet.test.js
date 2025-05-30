import { render, screen } from "@testing-library/react";
import Greet from "../Greet";
import userEvent from "@testing-library/user-event";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("render before user click", async () => {
    userEvent.setup();
    render(<Greet />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementBtn);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("give input to UI", async () => {
    userEvent.setup();
    render(<Greet />);
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue("10");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveValue("10");
  });

  test("element focus", async () => {
    userEvent.setup();
    render(<Greet />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await userEvent.tab();
    expect(incrementButton).toHaveFocus();
  });
});
