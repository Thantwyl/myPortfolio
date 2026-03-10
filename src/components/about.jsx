import { motion } from "framer-motion";
import { aboutInfo } from "../data/portfolioData";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            About
          </p>
          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">About Me</h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
            <div
              className={`card-style h-full p-6 sm:p-8 ${
                darkMode
                  ? "border-white/10 bg-white/10 backdrop-blur-md"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <h3 className="mb-4 text-2xl font-semibold">Who I Am</h3>
              <p
                className={`mb-4 leading-8 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {aboutInfo.paragraph1}
              </p>
              <p
                className={`leading-8 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {aboutInfo.paragraph2}
              </p>
            </div>

            <div
              className={`card-style h-full p-6 sm:p-8 ${
                darkMode
                  ? "border-white/10 bg-white/10 backdrop-blur-md"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <h3 className="mb-4 text-2xl font-semibold">Education</h3>

              <div className="space-y-6">
                {aboutInfo.education.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold">{item.degree}</h4>
                    <p
                      className={`mt-1 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.school}
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.year}
                    </p>
                    <p
                      className={`mt-1 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.GPA}
                    </p>
                    <p
                      className={`mt-2 leading-7 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;