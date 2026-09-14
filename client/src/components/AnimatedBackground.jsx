// Animated background — gradient mesh orbs + subtle grid + floating particles.
const AnimatedBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-accent-paper/20 blur-[120px] animate-pulseGlow" />
    <div className="absolute top-24 -right-24 h-96 w-96 rounded-full bg-accent-hunter/30 blur-[120px] animate-pulseGlow" />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />

    {/* Floating particles */}
    {[...Array(8)].map((_, i) => (
      <span
        key={i}
        className="absolute h-1.5 w-1.5 rounded-full bg-accent-paper/50 animate-float"
        style={{
          left: `${(i * 13) % 100}%`,
          top: `${(i * 29) % 90}%`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${7 + i}s`,
        }}
      />
    ))}
  </div>
);

export default AnimatedBackground;