import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDocker,
  FaTools,
  FaCloud,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiSupabase,
  SiRender,
  SiVercel,
} from "react-icons/si";

const iconMap = {
  react: FaReact,
  tailwind: SiTailwindcss,
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  python: FaPython,
  docker: FaDocker,
  django: SiDjango,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  render: SiRender,
  vercel: SiVercel,
  cloud: FaCloud,
};

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-lg transition duration-300 hover:-translate-y-1 ${
        darkMode
          ? "border-white/10 bg-white/10 backdrop-blur-md"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>

        <p
          className={`mb-4 leading-7 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        <div className="mb-3">
          <span className="font-semibold text-blue-500">Role: </span>
          <span className={darkMode ? "text-slate-300" : "text-slate-700"}>
            {project.role}
          </span>
        </div>

        {/* <div className="mb-5">
          <span className="font-semibold text-blue-500">Experience: </span>
          <span className={darkMode ? "text-slate-300" : "text-slate-700"}>
            {project.experience}
          </span>
        </div> */}

        <div className="mb-6">
          <p className="mb-3 font-semibold text-blue-500">Tools & Languages</p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.tech.map((item, index) => {
              const Icon = iconMap[item.iconKey] || FaTools;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                    darkMode
                      ? "bg-slate-800/80 text-slate-200"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <Icon className="shrink-0 text-lg text-blue-500" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`primary-btn ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className={`primary-btn border ${
                darkMode
                  ? "border-white/20 bg-white/5 hover:bg-white/10"
                  : "border-slate-300 bg-white hover:bg-slate-100"
              }`}
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;