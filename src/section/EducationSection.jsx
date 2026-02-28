import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BE | Computer Science and Engineering",
    institution: "Sree Sakthi Engineering College",
    year: "2021–2025",
    code: "CSE-001",
  },
  {
    degree: "Higher Secondary",
    institution: "Government Higher Secondary School",
    year: "2019–2020",
    code: "HSC-002",
  },
  {
    degree: "Secondary School Leaving Certificate",
    institution: "Government Higher Secondary School",
    year: "2017–2018",
    code: "SSLC-003",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
  hidden: (index) => ({ opacity: 0, y: index % 2 === 0 ? -80 : 80, scale: 0.9 }),
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen py-24 px-6 md:px-20 bg-[oklch(8%_0.02_264)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,oklch(65%_0.22_290/0.04),transparent)]" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-[oklch(80%_0.18_195)] mb-3" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; EDUCATION.log
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
          EDUCATION
        </h2>
        <div className="glow-line mt-6 w-48 mx-auto" />
      </motion.div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block relative z-10">
        {/* Animated Timeline Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-0 w-full h-px origin-left"
          style={{
            background: 'linear-gradient(90deg, transparent, oklch(80% 0.18 195 / 0.6), oklch(65% 0.22 290 / 0.6), transparent)',
            boxShadow: '0 0 10px oklch(80% 0.18 195 / 0.4)',
          }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-between items-center relative"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: index % 2 === 0 ? -8 : 8 }}
              className={`relative w-72 ${index % 2 === 0 ? "mb-32" : "mt-32"}`}
            >
              {/* Connector dot */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[oklch(80%_0.18_195)] rounded-full ${index % 2 === 0 ? '-bottom-[calc(8rem+6px)]' : '-top-[calc(8rem+6px)]'}`}
                style={{ boxShadow: '0 0 10px oklch(80% 0.18 195), 0 0 20px oklch(80% 0.18 195 / 0.5)' }}
              />

              {/* Card */}
              <div
                className="p-6 bg-[oklch(13%_0.03_264/0.9)] backdrop-blur-md border border-[oklch(80%_0.18_195/0.2)] hover:border-[oklch(80%_0.18_195/0.5)] transition-all duration-300 group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                  boxShadow: '0 0 20px oklch(80% 0.18 195 / 0.05)',
                }}
              >
                {/* Top accent */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[oklch(80%_0.18_195)] rounded-full" style={{ boxShadow: '0 0 6px oklch(80% 0.18 195)' }} />
                  <span className="text-xs text-[oklch(80%_0.18_195)] tracking-[0.15em]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    {item.code}
                  </span>
                </div>

                <h3
                  className="font-bold text-base mb-2 text-[oklch(95%_0.01_264)] leading-snug"
                  style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem' }}
                >
                  {item.degree}
                </h3>
                <p className="text-sm text-[oklch(65%_0.02_264)] mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {item.institution}
                </p>
                <div
                  className="inline-block px-3 py-1 text-xs text-[oklch(80%_0.18_195)] border border-[oklch(80%_0.18_195/0.3)] bg-[oklch(80%_0.18_195/0.05)]"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  {item.year}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, oklch(80% 0.18 195 / 0.03), transparent)' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden relative z-10 flex flex-col gap-10">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-4 top-0 bottom-0 w-px origin-top"
          style={{
            background: 'linear-gradient(180deg, oklch(80% 0.18 195 / 0.6), oklch(65% 0.22 290 / 0.6), transparent)',
            boxShadow: '0 0 8px oklch(80% 0.18 195 / 0.3)',
          }}
        />

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="pl-12 relative"
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.1 }}
              viewport={{ once: true }}
              className="absolute left-1 top-4 w-3 h-3 bg-[oklch(80%_0.18_195)] rounded-full"
              style={{ boxShadow: '0 0 8px oklch(80% 0.18 195), 0 0 16px oklch(80% 0.18 195 / 0.4)' }}
            />

            <div
              className="p-5 bg-[oklch(13%_0.03_264/0.9)] backdrop-blur-md border border-[oklch(80%_0.18_195/0.2)] hover:border-[oklch(80%_0.18_195/0.4)] transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-[oklch(80%_0.18_195)] rounded-full" style={{ boxShadow: '0 0 4px oklch(80% 0.18 195)' }} />
                <span className="text-xs text-[oklch(80%_0.18_195)] tracking-[0.1em]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  {item.code}
                </span>
              </div>
              <h3 className="font-bold text-sm mb-2 text-[oklch(95%_0.01_264)]" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}>
                {item.degree}
              </h3>
              <p className="text-sm text-[oklch(65%_0.02_264)] mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {item.institution}
              </p>
              <span className="text-xs text-[oklch(80%_0.18_195)]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                {item.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
