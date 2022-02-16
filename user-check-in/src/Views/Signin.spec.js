import { render, screen, fireEvent } from "@testing-library/react";

import SignUp from "./SignUp";

describe("sign in test", () => {
  render(<SignUp />);
  const validEmail = "charles@work.com";
  const validPassword = "A@c12345!";
  const submitButton = screen.getByRole("button");
  const emailField = screen.getByPlaceholderText("Email");
  const emailError = "Please provide a valid email address";
  const loginError = "";
  const passwordField = screen.getByPlaceholderText("Password");
  const invalidPasswords = [
    "1234567",
    "qweerrt",
    "123   fghj",
    "        ",
    "12345ef",
  ];
  const invalidEmails = [
    "charleswork.com",
    "charles@work",
    "charles",
    "charles@work@com",
  ];

  it("signin page tests", () => {
    expect(
      screen.getByRole("heading", { name: "Create your account" })
    ).toHaveTextContent("Create your account");
  });
  it("Email tests", () => {
    // console.log(passwordError);
    invalidEmails.forEach((invalidEmail) => {
      fireEvent.change(emailField, { target: { value: invalidEmail } });
      expect(emailField.value).toEqual(invalidEmail);
      console.log(emailField.value);
      fireEvent.click(submitButton);
    });
  });
  it("Password tests", () => {
    invalidPasswords.forEach((invalidPassword) => {
      fireEvent.change(passwordField, { target: { value: invalidPassword } });
      fireEvent.click(submitButton);
    });
  });

  it("invalid credentials tests", () => {
    invalidEmails.forEach((invalidEmail) => {
      fireEvent.change(emailField, { target: { value: invalidEmail } });
    });
    invalidPasswords.forEach((invalidPassword) => {
      fireEvent.change(passwordField, { target: { value: invalidPassword } });
    });
    fireEvent.click(submitButton);
  });

  it("correct credentials tests", () => {
    fireEvent.change(emailField, { target: { value: validEmail } });
    fireEvent.change(passwordField, { target: { value: validPassword } });
    expect(emailField.value).toEqual(validEmail);
    console.log(emailField.value);
    fireEvent.click(submitButton);
    //test
  });
});
