import {
  footerLinks,
  footerSocialLinks,
  footerValidationImagesLinks,
} from "@/constants/sidebar.contants";
import FooterLinkItem from "./FooterLinkItem";
import FooterImageLink from "./FooterImageLink";

const Footer = () => {
  return (
    <footer>
      <article className="pt-2">
        <nav className="flex flex-wrap">
          {footerLinks.map((link) => (
            <FooterLinkItem key={link.id} href={link.href}>
              {link.title}
            </FooterLinkItem>
          ))}
        </nav>

        <nav className="flex flex-wrap justify-center">
          {footerSocialLinks.map((link) => (
            <FooterLinkItem key={link.id} href={link.href} size="large">
              {link.icon}
            </FooterLinkItem>
          ))}
        </nav>
      </article>

      {/* validation */}
      <article className="flex items-start justify-between m-3 flex-wrap">
        {footerValidationImagesLinks.map((linkItem) => (
          <FooterImageLink
            key={linkItem.id}
            alt={linkItem.alt}
            imageUrl={linkItem.imageUrl}
            href={linkItem.href}
          />
        ))}
      </article>
    </footer>
  );
};

export default Footer;
