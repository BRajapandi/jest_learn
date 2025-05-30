import { render, screen } from "@testing-library/react";
import Login from "../Login";
import userEvent from "@testing-library/user-event";

test("checking component loaded", () => {
  render(<Login />);
  expect(screen.queryByText("Login")).toBeInTheDocument();
});
test("checking email & password inputs", () => {
  render(<Login />);
  expect(screen.queryByPlaceholderText("Email")).toHaveValue("");
  expect(screen.queryByPlaceholderText("Password")).toHaveValue("");
});

test("toClick a event", () => {
  render(<Login />);
  const buttonEle = screen.getByText("Signin");
  userEvent.click(buttonEle);
});
