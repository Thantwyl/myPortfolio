import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/Profile-1.png";
import resumePdf from "../assets/resume.pdf";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center"
    >
      <div className="relative z-10 container-width section-padding w-full py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
              Welcome to my portfolio
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I’m 
              <div>{personalInfo.name} </div>
            </h1>

            <h2
              className={`mb-6 text-xl sm:text-2xl font-semibold ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {personalInfo.title}
            </h2>

            <p
              className={`max-w-2xl text-base leading-8 sm:text-lg ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {personalInfo.shortBio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`primary-btn ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                View Projects
              </a>

              <a
                href={resumePdf}
                download="resume.pdf"
                className={`primary-btn border ${
                  darkMode
                    ? "border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20"
                    : "border-slate-300 bg-white hover:bg-slate-100"
                }`}
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`rounded-xl p-3 transition ${
                  darkMode
                    ? "bg-white/10 backdrop-blur-md hover:bg-white/20"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <FaGithub size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`rounded-xl p-3 transition ${
                  darkMode
                    ? "bg-white/10 backdrop-blur-md hover:bg-white/20"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div
              className={`relative w-[280px] sm:w-[340px] md:w-[380px] rounded-[2rem] border p-3 shadow-2xl ${
                darkMode
                  ? "border-white/10 bg-white/10 backdrop-blur-md"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <img
                src={profileImg}
                alt="Profile"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
