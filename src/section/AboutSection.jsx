import { motion } from "framer-motion";
import profileImg from "../assets/myprofile.png";

const tags = ['MERN Stack', 'REST APIs', 'Responsive Design', 'Zustand', 'React', 'Node.js'];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 py-24 bg-[oklch(8%_0.02_264)] overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,oklch(65%_0.22_290/0.05),transparent)]" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Image with futuristic frame */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,oklch(65%_0.22_290/0.1),transparent_70%)]" />

            {/* Rotating border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border border-dashed border-[oklch(65%_0.22_290/0.3)] rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 border border-[oklch(80%_0.18_195/0.2)] rounded-full"
            />

            {/* Image container */}
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden"
              style={{
                border: '1px solid oklch(65% 0.22 290 / 0.5)',
                boxShadow: '0 0 40px oklch(65% 0.22 290 / 0.2), inset 0 0 40px oklch(65% 0.22 290 / 0.05)',
                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
              }}
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-contain"
              />
              {/* Scan lines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,oklch(65%_0.22_290/0.03)_3px,oklch(65%_0.22_290/0.03)_4px)]" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[oklch(80%_0.18_195)]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[oklch(80%_0.18_195)]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[oklch(80%_0.18_195)]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[oklch(80%_0.18_195)]" />
            </div>

            {/* Data label */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-[oklch(8%_0.02_264)] border border-[oklch(80%_0.18_195/0.4)] text-[oklch(80%_0.18_195)] text-xs whitespace-nowrap"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              ID: AMB-2025-MERN
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Section label */}
          <p className="text-xs tracking-[0.4em] uppercase text-[oklch(80%_0.18_195)] mb-3" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
            &gt; ABOUT.exe
          </p>

          <h2
            className="text-4xl md:text-5xl font-black mb-8 tracking-tight"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(135deg, oklch(95% 0.01 264), oklch(80% 0.18 195))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ABOUT ME
          </h2>

          {/* Glow line */}
          <div className="glow-line mb-8 md:w-48 mx-auto md:mx-0" />

          <p className="text-base md:text-lg text-[oklch(75%_0.02_264)] mb-4 leading-relaxed font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            I am an entry-level MERN Stack Developer passionate about building
            modern, responsive, and scalable web applications. I specialize in
            React for frontend development and Node.js + Express for backend APIs.
          </p>

          <p className="text-base md:text-lg text-[oklch(75%_0.02_264)] mb-8 leading-relaxed font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            I have hands-on experience developing full-stack projects including
            e-commerce platforms, portfolio websites, and social applications
            using MongoDB, Zustand, and REST APIs.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase text-[oklch(80%_0.18_195)] border border-[oklch(80%_0.18_195/0.3)] bg-[oklch(80%_0.18_195/0.05)] hover:bg-[oklch(80%_0.18_195/0.1)] hover:border-[oklch(80%_0.18_195/0.6)] hover:shadow-[0_0_10px_oklch(80%_0.18_195/0.2)] transition-all duration-300"
                style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
