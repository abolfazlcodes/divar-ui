import Link from "next/link";
import { CSSProperties } from "react";

interface ISidebarListItemProps {
  children: React.ReactNode;
  href: string;
  styles?: CSSProperties;
}

const SidebarListItem: React.FC<ISidebarListItemProps> = ({
  children,
  href,
  styles,
}) => {
  return (
    <li
      style={styles}
      className="rounded-[4px] outiline-none cursor-pointer text-[#0000008f] hover:text-[#000000de] duration-150 transition-all text-sm mb-2"
    >
      <Link href={href} className="flex py-1 items-center gap-2">
        {children}
      </Link>
    </li>
  );
};

export default SidebarListItem;
