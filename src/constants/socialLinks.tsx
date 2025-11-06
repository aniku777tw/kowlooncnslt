import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nightmarket888/",
    icon: <FaInstagram className="h-6 w-6 text-current" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nightmarket888",
    icon: <FaTiktok className="h-6 w-6 text-current" />,
  },
  {
    label: "Email",
    href: "mailto:info@kowlooncnslt.com",
    icon: <FaEnvelope className="h-6 w-6 text-current" />,
  },
  {
    label: "LINE",
    href: "https://line.me/R/ti/p/@nightmarket888",
    icon: <FaLine className="h-6 w-6 text-current" />,
  },
];
