import { motion } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const experiences = [
  {
    role: "Fullstack Developer Intern",
    company: "Novitech R&D Pvt Ltd",
    duration: "Feb 2025 – May 2025",
    description:
      "Gained hands-on experience in full-stack development technologies including HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Progressed into the MERN stack to build dynamic and scalable web applications.",
    certificate: "/Fullstack-Internship.pdf",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 px-6 md:px-20 bg-[oklch(11%_0.025_264)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,oklch(80%_0.18_195/0.04),transparent)]" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-[oklch(80%_0.18_195)] mb-3" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; EXPERIENCE.json
        </p>
        <h2
          className="text-4xl md:text-5xl font-black tracking-tight"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            background: 'linear-gradient(135deg, oklch(95% 0.01 264), oklch(80% 0.18 195))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          EXPERIENCE
        </h2>
        <div className="glow-line mt-6 w-48 mx-auto" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Left accent line with glow */}
            <div
              className="absolute left-0 top-0 h-full w-0.5"
              style={{
                background: 'linear-gradient(180deg, oklch(80% 0.18 195), oklch(65% 0.22 290), transparent)',
                boxShadow: '0 0 10px oklch(80% 0.18 195 / 0.5)',
              }}
            />

            {/* Card */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="ml-8 md:ml-12 p-8 md:p-12 bg-[oklch(13%_0.03_264/0.9)] backdrop-blur-md border border-[oklch(80%_0.18_195/0.15)] group-hover:border-[oklch(80%_0.18_195/0.4)] transition-all duration-300"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                boxShadow: '0 0 30px oklch(80% 0.18 195 / 0.03)',
              }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  {/* Role */}
                  <h3
                    className="text-2xl md:text-3xl font-black mb-2 text-[oklch(95%_0.01_264)]"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                  >
                    {exp.role}
                  </h3>
                  {/* Company */}
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[oklch(80%_0.18_195)]" style={{ boxShadow: '0 0 6px oklch(80% 0.18 195)' }} />
                    <p className="text-[oklch(80%_0.18_195)] font-semibold tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Duration badge */}
                <div
                  className="flex-shrink-0 px-4 py-2 border border-[oklch(65%_0.22_290/0.4)] bg-[oklch(65%_0.22_290/0.05)] text-[oklch(65%_0.22_290)] text-xs tracking-[0.15em]"
                  style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  }}
                >
                  {exp.duration}
                </div>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-[oklch(70%_0.02_264)] mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {exp.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs text-[oklch(80%_0.18_195)] border border-[oklch(80%_0.18_195/0.25)] bg-[oklch(80%_0.18_195/0.05)]"
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Download button */}
              <a
                href={exp.certificate}
                download
                className="btn-neon-solid inline-flex items-center gap-2"
              >
                <HiOutlineDocumentDownload size={18} />
                <span>Download Certificate</span>
              </a>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[oklch(80%_0.18_195/0.3)]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[oklch(65%_0.22_290/0.3)]" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
