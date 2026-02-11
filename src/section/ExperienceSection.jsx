import { motion } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const experiences = [
  {
    role: "Fullstack Developer Intern",
    company: "Novitech R&D Pvt Ltd",
    duration: "Feb 2025 - May 2025",
    description:
      "Gained hands-on experience in full-stack development technologies including HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Progressed into the MERN stack to build dynamic and scalable web applications.",
    certificate: "/Fullstack-Internship.pdf",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 md:px-20 bg-primaryBg"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-gopher text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative group"
          >
            {/* Left Accent Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-primaryText rounded-full"></div>

            {/* Card */}
            <div className="ml-6 md:ml-10 p-8 md:p-12 rounded-2xl 
                            bg-white/50 backdrop-blur-md 
                            border border-primaryText/10 
                            shadow-lg transition-all duration-300 
                            group-hover:shadow-2xl">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-gopher">
                    {exp.role}
                  </h3>
                  <p className="font-sanscripf text-sm mt-1">
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm opacity-70">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-8">
                {exp.description}
              </p>

              <a
                href={exp.certificate}
                download
                className="inline-flex items-center gap-2 
                           px-6 py-3 rounded-xl 
                           bg-primaryText text-primaryBg 
                           font-semibold 
                           transition-transform duration-300 
                           hover:scale-105"
              >
                <HiOutlineDocumentDownload size={20} />
                Download Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
