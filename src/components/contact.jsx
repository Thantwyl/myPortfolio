import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const reasons = [
  "Delivers reliable and high-quality backend solutions",
  "Hands-on experience in real-world web application projects",
  "Supports smooth teamwork with communication and integration",
  "Driven to grow in backend development, AI, and automation",
];

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Contact
          </p>

          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div
              className={`card-style p-6 sm:p-8 ${
                darkMode
                  ? "border-white/10 bg-white/10 backdrop-blur-md"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <h3 className="mb-6 text-2xl font-semibold">Contact Info</h3>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="mt-1 text-blue-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p
                      className={
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }
                    >
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="mt-1 text-blue-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p
                      className={
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }
                    >
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location + Social Icons */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="mt-1 text-blue-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p
                      className={
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }
                    >
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[12px] shrink-0" />
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-xl p-3 transition ${
                        darkMode
                          ? "bg-white/10 hover:bg-white/20"
                          : "bg-white border border-slate-200 hover:bg-slate-100"
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
                          ? "bg-white/10 hover:bg-white/20"
                          : "bg-white border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Work With Me */}
              <div
                className={`mt-8 rounded-2xl p-5 sm:p-6 ${
                  darkMode
                    ? "border border-white/10 bg-white/8"
                    : "border border-slate-200 bg-slate-100"
                }`}
              >
                <h4 className="mb-5 text-xl font-semibold">Why Work With Me?</h4>

                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 shrink-0 text-blue-500" />
                      <p
                        className={
                          darkMode ? "text-slate-300" : "text-slate-700"
                        }
                      >
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`card-style p-6 sm:p-8 ${
                darkMode
                  ? "border-white/10 bg-white/10 backdrop-blur-md"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <h3 className="mb-6 text-2xl font-semibold">Send Message</h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    darkMode
                      ? "border-white/10 bg-slate-900 text-white placeholder:text-slate-400"
                      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500"
                  }`}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    darkMode
                      ? "border-white/10 bg-slate-900 text-white placeholder:text-slate-400"
                      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500"
                  }`}
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    darkMode
                      ? "border-white/10 bg-slate-900 text-white placeholder:text-slate-400"
                      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500"
                  }`}
                />

                <button
                  type="submit"
                  className={`primary-btn w-full ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;