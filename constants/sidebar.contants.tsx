import { AiOutlineHome, AiTwotoneCar } from "react-icons/ai";
import {
  PiTwitterLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiAndroidLogoFill,
  PiDeviceMobileCameraLight,
  PiLamp,
  PiPaintBrushBroad,
  PiWatch,
  PiDiceSix,
  PiUsers,
  PiMicrophone,
  PiSuitcaseSimple,
} from "react-icons/pi";

export const sidebarListItems = [
  {
    id: 1,
    icon: <AiOutlineHome />,
    title: "املاک",
    href: "/",
  },
  {
    id: 2,
    icon: <AiTwotoneCar />,
    title: "وسایل نقلیه",
    href: "/",
  },
  {
    id: 3,
    icon: <PiDeviceMobileCameraLight />,
    title: "کالای دیجیتال",
    href: "/",
  },
  {
    id: 4,
    icon: <PiLamp />,
    title: "خانه و آشپزخانه",
    href: "/",
  },
  {
    id: 5,
    icon: <PiPaintBrushBroad />,
    title: "خدمات",
    href: "/",
  },
  {
    id: 6,
    icon: <PiWatch />,
    title: "وسایل شخصی",
    href: "/",
  },
  {
    id: 7,
    icon: <PiDiceSix />,
    title: "سرگرمی و فراغت",
    href: "/",
  },
  {
    id: 8,
    icon: <PiUsers />,
    title: "اجتماعی",
    href: "/",
  },
  {
    id: 9,
    icon: <PiMicrophone />,
    title: "تجهیزات و صنعتی",
    href: "/",
  },
  {
    id: 10,
    icon: <PiSuitcaseSimple />,
    title: "استخدام و کاریابی",
    href: "/",
  },
];

export const sidebarListBoxes = [
  { id: 1, title: "محل", hasSubItems: false },
  { id: 2, title: "قیمت", hasSubItems: false },
  { id: 3, title: "وضعیت آگهی", hasSubItems: false },
];

export const footerLinks = [
  { id: 1, title: "درباره دیوار", href: "/" },
  { id: 2, title: "دریافت برنامه", href: "/" },
  { id: 3, title: "اتاق خبر", href: "/" },
  { id: 4, title: "کسب و کارها", href: "/" },
  { id: 5, title: "پشتیبانی و قوانین", href: "/" },
];

export const footerSocialLinks = [
  { id: 1, icon: <PiTwitterLogoFill />, href: "/" },
  { id: 2, icon: <PiInstagramLogoFill />, href: "/" },
  { id: 3, icon: <PiLinkedinLogoFill />, href: "/" },
  { id: 4, icon: <PiAndroidLogoFill />, href: "/" },
];

export const footerValidationImagesLinks = [
  { id: 1, imageUrl: "/enemad.png", href: "/", alt: "enemad logo" },
  { id: 2, imageUrl: "/etehadieh.png", href: "/", alt: "etehadieh logo" },
  { id: 3, imageUrl: "/samandehi.png", href: "/", alt: "samandehi logo" },
];
