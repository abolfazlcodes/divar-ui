import { render, screen } from "@testing-library/react";
import ProductsCard from "../products/ui/ProductsCard";
import { ProductProps } from "@/types/products.types";

const mockProductCardData: ProductProps = {
  id: 1,
  title: "اسپیکر خانگی",
  href: "/اسپیکر-خانگی",
  description: ["کارکرده", "۱,۰۰۰,۰۰۰ تومان"],
  createdAt: "دقایقی پیش",
  imageUrls: [
    {
      src: "https://s100.divarcdn.com/static/photo/web_thumbnail/fBvzbZEFsm3MbGEdpEboGQ/b07aeeb8-0797-4e6b-a4ec-6163863f8664.webp",
      fileType: "image/webp",
    },
    {
      src: "https://s100.divarcdn.com/static/photo/thumbnail/swThuAXk40Eqd1UdK-dG5A/b07aeeb8-0797-4e6b-a4ec-6163863f8664.jpg",
      alt: "اسپیکر خانگی",
    },
  ],
};

describe("ProductsCard Component Tests", () => {
  beforeEach(() => {
    render(
      <ProductsCard
        key={mockProductCardData.id}
        title={mockProductCardData.title}
        createdAt={mockProductCardData.createdAt}
        description={mockProductCardData.description}
        imageUrls={mockProductCardData.imageUrls}
        href={mockProductCardData.href}
      />,
    );
  });

  it("should render the component properly", () => {
    const productCardLinkElement = screen.getByRole("link");

    expect(productCardLinkElement).toBeInTheDocument();
    expect(productCardLinkElement).toHaveAttribute(
      "href",
      mockProductCardData.href,
    );
  });

  it("should render the title of product card", () => {
    const productCardTitleElement = screen.getByRole("heading");

    expect(productCardTitleElement).toBeInTheDocument();
    expect(productCardTitleElement).toHaveTextContent(
      mockProductCardData.title,
    );
  });
});
