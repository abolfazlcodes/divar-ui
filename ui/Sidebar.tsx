import {
  sidebarListBoxes,
  sidebarListItems,
} from "@/constants/sidebar.contants";
import SidebarListItem from "./SidebarLitsItem";
import { AiOutlineHome } from "react-icons/ai";
import Highlight from "./Highlight";
import SidebarListBox from "./SidebarListBox";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <aside className="col-span-2">
      <article className="text-[#000000de]">
        <section className="border-b border-b-[#0000001f]">
          <h3 className="text-sm text-[#000000de] py-2">دسته ها</h3>
          <ul className="space-y-2">
            {sidebarListItems.map((listItem) => (
              <SidebarListItem key={listItem.id} href={listItem.href}>
                {listItem.icon}
                <span>{listItem.title}</span>
              </SidebarListItem>
            ))}
            <SidebarListItem href="/">
              <AiOutlineHome />
              <span className="mb-4">
                رزومه کارجویان <Highlight>(جدید)</Highlight>
              </span>
            </SidebarListItem>
          </ul>
        </section>

        <section className="mt-1">
          {sidebarListBoxes.map((item) => (
            <SidebarListBox key={item.id}>
              <span className="text-[#000000de] font-[500] mr-1">
                {item.title}
              </span>
            </SidebarListBox>
          ))}
        </section>
      </article>

      <Footer />
    </aside>
  );
};

export default Sidebar;
