// Primary / secondary buttons used across the site — consistent styling.
// Uses native anchors; smooth scrolling is handled by CSS `scroll-behavior: smooth`.
import { motion } from "framer-motion";

const base =
  "focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

const variants = {
  primary:
    "bg-accent-gradient text-white hover:-translate-y-0.5 hover:shadow-glow",
  secondary:
    "border border-card-strong text-primary hover:border-accent-terracotta/60 hover:bg-accent-terracotta/10 hover:-translate-y-0.5",
};

const Button = ({ children, href, variant = "primary", className = "", ...props }) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  const external = href?.startsWith("http");

  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${classes} group relative overflow-hidden`}
      {...props}
    >
      {/* Sheen sweep on primary buttons */}
      {variant === "primary" && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden="true"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
};

export default Button;