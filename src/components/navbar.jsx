import { useState } from "react";
import { HiMenu, HiX, HiHome, HiUser, HiCode, HiCollection, HiMail } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", icon: <HiHome size={18} /> },
  { label: "About", href: "#about", icon: <HiUser size={18} /> },
  { label: "Skills", href: "#skills", icon: <HiCode size={18} /> },
  { label: "Projects", href: "#projects", icon: <HiCollection size={18} /> },
  { label: "Contact", href: "#contact", icon: <HiMail size={18} /> },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        darkMode
          ? "border-white/10 bg-slate-950/30"
          : "border-slate-200 bg-white/80"
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="text-xl font-bold tracking-wide">
            Thantwyl <span className="text-blue-500">Dev.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                  darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                <span className="text-blue-500">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-xl p-3 transition ${
                darkMode
                  ? "bg-white/10 backdrop-blur-md hover:bg-white/20"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`rounded-xl p-2 md:hidden ${
                darkMode
                  ? "bg-white/10 backdrop-blur-md hover:bg-white/20"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
              aria-label="Open menu"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div
            className={`mb-4 rounded-2xl border p-4 md:hidden backdrop-blur-md ${
              darkMode
                ? "border-white/10 bg-slate-900/40"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    darkMode
                      ? "text-white hover:bg-white/10"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-blue-500">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;