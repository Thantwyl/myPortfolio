import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`border-t ${
        darkMode ? "border-white/10 bg-slate-950" : "border-slate-200 bg-white"
      }`}
    >
      <div className="container-width section-padding py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">
              Thantwyl <span className="text-blue-500">Dev.</span>
            </h3>
            <p className={`mt-2 text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Learning, building, and improving every day.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl p-3 transition ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <FaGithub size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl p-3 transition ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#home"
              className={`rounded-xl p-3 transition ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <FaArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className={`mt-6 text-center text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          © 2026 {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;