import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import darkBg from "./assets/dark-bg.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${
        darkMode ? "text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* Fixed dark background image */}
      {darkMode && (
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${darkBg})` }}
        />
      )}

      {/* Dark transparent overlay */}
      {darkMode && (
        <div className="fixed inset-0 -z-10 bg-slate-950/75" />
      )}

      {/* Light mode plain background */}
      {!darkMode && <div className="fixed inset-0 -z-10 bg-white" />}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;