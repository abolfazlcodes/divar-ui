import { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface ISidebarListBoxProps {
  children: ReactNode;
}

const SidebarListBox: React.FC<ISidebarListBoxProps> = ({ children }) => {
  return (
    <div className="border-b border-b-[#0000001f] flex items-center relative py-1">
      <div className="inline-flex box-border items-center rounded-[4px] cursor-pointer grow-[1] h-12 outline-none text-base">
        <FaChevronDown className="text-sm" />
        {children}
      </div>
    </div>
  );
};

export default SidebarListBox;
