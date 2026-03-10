import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaTools,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiFastapi,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiSqlite,
  SiMongodb,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { skillsData } from "../data/portfolioData";

const iconMap = {
  react: FaReact,
  tailwind: SiTailwindcss,
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  python: FaPython,
  git: FaGitAlt,
  github: FaGithub,
  docker: FaDocker,
  django: SiDjango,
  fastapi: SiFastapi,
  dotnet: SiDotnet,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  supabase: SiSupabase,
  sqlite: SiSqlite,
  mongodb: SiMongodb,
  postman: SiPostman,
  render: SiRender,
  vercel: SiVercel,
  api: FaTools,
  cloud: FaCloud,
  database: FaDatabase,
};

const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Skills
          </p>
          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {skillsData.map((skillGroup, index) => (
              <div
                key={index}
                className={`card-style p-6 ${
                  darkMode
                    ? "border-white/10 bg-white/10 backdrop-blur-md"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <h3 className="mb-5 text-xl font-semibold">
                  {skillGroup.category}
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {skillGroup.items.map((skill, i) => {
                    const Icon = iconMap[skill.iconKey] || FaTools;

                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                          darkMode
                            ? "bg-slate-800/80 text-slate-200 hover:bg-slate-700"
                            : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Icon className="shrink-0 text-lg text-blue-500" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;