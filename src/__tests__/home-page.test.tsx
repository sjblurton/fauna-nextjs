import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home page tests", () => {
  it("should render the input element", () => {
    render(<Home />);

    const headingElement = screen.getByText(/hello world/i);

    expect(headingElement).toBeInTheDocument();
  });
});
