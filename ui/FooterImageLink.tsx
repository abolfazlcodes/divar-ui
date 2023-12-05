import Image from "next/image";
import Link from "next/link";

interface IFooterImageLinkProps {
  href: string;
  imageUrl: string;
  alt: string;
}

const FooterImageLink: React.FC<IFooterImageLinkProps> = ({
  href,
  imageUrl,
  alt,
}) => {
  return (
    <Link
      href={href}
      className="cursor-pointer h-auto my-4 m-width-[120px] text-center w-1/2 md:w-1/3"
    >
      <div className="h-[91px] w-[84px] bg-none relative">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="w-full h-full rounded-sm"
        />
      </div>
    </Link>
  );
};

export default FooterImageLink;
