import { render, screen } from "@testing-library/react";
import Button from "../Button";
import { PiMapPin } from "react-icons/pi";

describe("Button Component Tests", () => {
  it("should render the button component properly with default secondary styles", () => {
    render(<Button>click</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/click/i);

    expect(buttonElement).toHaveClass("hover:bg-gray-100");
  });

  it("should render the button component with type primary properly", () => {
    render(<Button type="primary">click</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass(
      "bg-[#a62626] hover:bg-[#be3737] focus:bg-[#be3737]",
    );
  });

  it("should render the order of text and icon if changeOrder is true", () => {
    render(
      <Button icon={<PiMapPin />} changeOrder>
        click
      </Button>,
    );

    const svgElement = screen.getByTestId("button-icon-element");

    expect(svgElement).toHaveClass("order-1");
  });
});
