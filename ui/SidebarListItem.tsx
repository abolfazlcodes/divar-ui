import Link from "next/link";
import { ReactNode } from "react";

interface ISidebarListItemProps {
  children: ReactNode;
  href: string;
}

const SidebarListItem: React.FC<ISidebarListItemProps> = ({
  children,
  href,
}) => {
  return (
    <li className="rounded-[4px] outiline-none cursor-pointer text-[#0000008f] hover:text-[#000000de] duration-150 transition-all">
      <Link href={href} className="flex py-1 items-center gap-2">
        {children}
      </Link>
    </li>
  );
};

export default SidebarListItem;
