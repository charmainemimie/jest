import React from "react";
import { render } from "@testing-library/react"; //from RTL
import MyComponent from "../components/MyComponent";

describe("MyComponent", () => {
  //This simple test makes sure the component appears without any trouble
  it("shows up correctly", () => {
    render(<MyComponent />);
  });
});
