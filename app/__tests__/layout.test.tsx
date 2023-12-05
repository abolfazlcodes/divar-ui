import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";

describe("Layout Component Tests", () => {
  it("should render the layour properly", () => {
    render(<RootLayout>child component</RootLayout>);

    const mainElement = screen.getByTestId("main-element");

    expect(mainElement).toBeInTheDocument();
  });
});
