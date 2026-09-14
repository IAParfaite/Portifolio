// App shell — manages theme, assembles all sections in order.
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Hobbies from "./components/Hobbies.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  // Theme defaults to dark; persisted in localStorage (see index.html pre-paint script).
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base-950">
      {/* Reading progress bar */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div className="h-full bg-accent-gradient transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <Footer />

      {/* Film-grain texture over everything for a premium finish */}
      <div className="pointer-events-none fixed inset-0 z-[90] bg-noise opacity-[0.035] mix-blend-overlay" aria-hidden="true" />
    </div>
  );
};

export default App;