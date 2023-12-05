import {
  sidebarListBoxes,
  sidebarListItems,
} from "@/constants/sidebar.contants";
import SidebarListItem from "./SidebarLitsItem";
import { LuUserCheck } from "react-icons/lu";

import Highlight from "./Highlight";
import SidebarListBox from "./SidebarListBox";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <aside className="col-span-3 lg:col-span-2" data-testid="sidebar-element">
      <article className="text-[#000000de]">
        <section className="border-b w-full md:w-[90%] border-b-[#0000001f]">
          <h3 className="text-sm text-[#000000de] py-2">دسته ها</h3>
          <ul>
            {sidebarListItems.map((listItem) => (
              <SidebarListItem key={listItem.id} href={listItem.href}>
                <span className="text-base">{listItem.icon}</span>
                <span>{listItem.title}</span>
              </SidebarListItem>
            ))}
            <SidebarListItem styles={{ marginBottom: "2rem" }} href="/">
              <LuUserCheck />
              <span>
                رزومه کارجویان <Highlight>(جدید)</Highlight>
              </span>
            </SidebarListItem>
          </ul>
        </section>

        <section className="mt-1 w-full md:w-[90%]">
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
