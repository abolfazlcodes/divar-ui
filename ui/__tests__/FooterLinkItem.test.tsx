import { render, screen } from "@testing-library/react";
import FooterLinkItem from "../FooterLinkItem";

describe("FooterLinkItem Component Tests", () => {
  it("should render the component with the href properly initially", () => {
    const linkHref = "/link";
    render(<FooterLinkItem href={linkHref}>title</FooterLinkItem>);

    const linkElement = screen.getByRole("link", { name: "title" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", linkHref);
    expect(linkElement).toHaveClass("text-xs");
  });

  it('should have the correct classes when the size props is "medium"', () => {
    const linkHref = "/link";

    render(
      <FooterLinkItem href={linkHref} size="medium">
        title
      </FooterLinkItem>,
    );

    const linkElement = screen.getByRole("link", { name: "title" });

    expect(linkElement).toHaveClass("text-md");
  });

  it('should have the correct classes when the size props is "large"', () => {
    const linkHref = "/link";

    render(
      <FooterLinkItem href={linkHref} size="large">
        title
      </FooterLinkItem>,
    );

    const linkElement = screen.getByRole("link", { name: "title" });

    expect(linkElement).toHaveClass("text-lg");
  });
});
