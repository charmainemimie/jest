import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"; //from RTL
import { MyComponent } from "../components/MyComponent";

describe("MyComponent", () => {
  //This simple test makes sure the component appears without any trouble
  it("shows up correctly", () => {
    render(<MyComponent />);
  });

  // Check if the component renders correctly
  it("renders the input field", () => {
    render(<MyComponent />);

    // Check for the input field by its placeholder text
    const inputElement = screen.getByPlaceholderText(/Enter your text, this is my test field/i);
    expect(inputElement).toBeInTheDocument(); // Ensures it's rendered
  });

  // Simulate typing in the input field
  it("allows typing into the input field", () => {
    render(<MyComponent />);

    const inputElement = screen.getByPlaceholderText(/Enter your text, this is my test field/i);

    // Simulate user typing "Hello, Test!"
    fireEvent.change(inputElement, { target: { value: "Hello, Test!" } });

    // Check that the input's value is updated
    expect(inputElement.value).toBe("Hello, Test!");
  });
});
