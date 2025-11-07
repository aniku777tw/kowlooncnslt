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
      : "flex items-center justify-center gap-5 text-[rgba(var(--background-rgb),0.8)] md:justify-start";

  const baseButtonClass =
    variant === "nav"
      ? "inline-flex h-10 w-10 items-center justify-center text-brand-primary transition-transform duration-150 ease-out hover:scale-110 hover:text-brand-accent md:h-11 md:w-11"
      : variant === "mobile-nav"
      ? "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-brand-primary shadow-sm transition-colors duration-150 hover:bg-[var(--secondary)] hover:text-brand-primary"
      : "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-background transition-colors duration-150 hover:bg-[var(--warm)] hover:text-brand-primary md:h-11 md:w-11";

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
