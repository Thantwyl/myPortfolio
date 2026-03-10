import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import ProjectCard from "./projectCard";

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Projects
          </p>

          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>

          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                darkMode={darkMode}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;