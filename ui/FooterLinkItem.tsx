import Link from "next/link";

interface IFooterLinkItemProps {
  children: React.ReactNode;
  href: string;
  size?: "small" | "medium" | "large";
}

const FooterLinkItem: React.FC<IFooterLinkItemProps> = ({
  children,
  href,
  size = "small",
}) => {
  return (
    <Link
      href={href}
      className={`text-[#0000008f] leading-5 transition-all duration-150 inline-block ${
        size === "small" ? "text-xs" : size === "large" ? "text-lg" : "text-md"
      } p-2 hover:text-black`}
    >
      {children}
    </Link>
  );
};

export default FooterLinkItem;
