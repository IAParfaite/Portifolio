// Professional footer — brand + socials, no duplicated navigation.
import { FiMail, FiGithub, FiLinkedin, FiArrowUp, FiMapPin } from "react-icons/fi";
import { SiX } from "react-icons/si";
import { profile } from "../data/portfolioData.js";

const socials = [
  { label: "Email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`, icon: FiMail },
  { label: "GitHub", href: profile.github, icon: FiGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FiLinkedin },
  { label: "X", href: profile.twitter, icon: SiX },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card bg-base-900/40">
      {/* Statement */}
      <div className="container-x pt-14 text-center">
        <p className="mx-auto max-w-2xl font-display text-2xl font-semibold leading-snug text-primary md:text-3xl">
          Let's build something worth <span className="text-gradient">sharing</span>.
        </p>
      </div>

      {/* Top — brand + socials */}
      <div className="container-x flex flex-col items-center justify-between gap-6 py-12 md:flex-row">
        <div className="text-center md:text-left">
          <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted md:justify-start">
            <FiMapPin aria-hidden="true" className="text-accent-terracotta" /> {profile.location}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={s.label}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl border-card bg-subtle text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-paper/50 hover:text-primary hover:shadow-glow-sm"
            >
              <s.icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">Designed & built with intent.</p>
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border-card bg-subtle px-4 py-2 text-xs font-semibold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
          >
            Back to top <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;