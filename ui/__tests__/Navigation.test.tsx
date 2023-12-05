import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation Component Test Suite", () => {
  it("should render the component properly", () => {
    render(<Navigation />);

    const navElement = screen.getByRole("navigation");

    expect(navElement).toBeInTheDocument();
  });

  it("should render the logo component inside the navigation component", () => {
    render(<Navigation />);

    const logoLinkElement = screen.getByRole("link");

    expect(logoLinkElement).toBeInTheDocument();
    expect(logoLinkElement).toHaveAttribute("href", "/");
  });
});
