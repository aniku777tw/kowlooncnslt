import { socialLinks } from "@/constants/socialLinks";

type Variant = "nav" | "footer" | "mobile-nav";

export default function SocialLinks({
  variant = "nav",
}: {
  variant?: Variant;
}) {
  const containerClass =
    variant === "nav"
      ? "flex items-center justify-center gap-4 md:justify-start md:gap-5"
      : variant === "mobile-nav"
      ? "flex items-center justify-center gap-6"
      : "flex items-center justify-center gap-5 text-[#FAF3E6]/80 md:justify-start";

  const baseButtonClass =
    variant === "nav"
      ? "inline-flex h-10 w-10 items-center justify-center text-[#3E543B] transition-transform duration-150 ease-out hover:scale-110 hover:text-[#E2725B] md:h-11 md:w-11"
      : variant === "mobile-nav"
      ? "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#3E543B] shadow-sm transition-colors duration-150 hover:bg-[#F4D7A8] hover:text-[#3E543B]"
      : "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#FAF3E6] transition-colors duration-150 hover:bg-[#E4B873] hover:text-[#3E543B] md:h-11 md:w-11";

  return (
    <div className={containerClass}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseButtonClass}
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
