import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { sidebarListItems } from "@/constants/sidebar.contants";

describe("Sidebar Component Tests", () => {
  it("should render the sidebar component properly with correct amount of list items", () => {
    render(<Sidebar />);

    const sidebarElement = screen.getByTestId("sidebar-element");
    const listItems = screen.getAllByRole("listitem");

    expect(sidebarElement).toBeInTheDocument();
    expect(listItems.length).toEqual(sidebarListItems.length);
  });
});
