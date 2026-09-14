// Sticky, glassy top navigation with a mobile menu and theme toggle.
import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolioData.js";
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      const pos = window.scrollY + 120;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = `#${id}`;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48) {
        current = `#${ids[ids.length - 1]}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setOpen((o) => !o);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-card bg-base-950/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Accessible hidden skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent-terracotta focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="focus-ring rounded-lg font-display text-lg font-bold text-primary">
          Parfaite<span className="text-gradient">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`group focus-ring relative rounded-md py-1 text-sm font-medium transition-colors ${
                  active === link.href ? "text-accent-cream" : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent-gradient transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Mobile toggle */}
          <button
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border-card bg-subtle text-secondary md:hidden"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-card bg-base-950/95 backdrop-blur-md md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-subtle hover:text-primary ${
                    active === link.href ? "text-accent-cream" : "text-secondary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;