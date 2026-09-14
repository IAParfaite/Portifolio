// Small pill badge for tags, tech stacks, labels, etc.
const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full border border-card bg-subtle px-3 py-1 text-xs font-medium text-secondary ${className}`}>
    {children}
  </span>
);

export default Badge;