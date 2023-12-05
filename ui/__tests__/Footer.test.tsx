import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component Test Suites", () => {
  it("should render the footer component properly", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");

    expect(footerElement).toBeInTheDocument();
  });
});
