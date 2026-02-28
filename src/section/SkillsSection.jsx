import { motion } from 'framer-motion';
import htmlIcon from '../assets/icons/html5.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import tailwindIcon from '../assets/icons/tailwindcss.png';
import redux from '../assets/icons/redux.png';
import nodejs from '../assets/icons/nodejs.png';
import expressjs from '../assets/icons/express.png';
import mongodb from '../assets/icons/mongodb.png';
import bootstrap from "../assets/icons/bootstrap.png";
import zustand from "../assets/icons/zustand.png";

const skills = [
  { icon: htmlIcon, name: 'HTML5' },
  { icon: cssIcon, name: 'CSS3' },
  { icon: jsIcon, name: 'JavaScript' },
  { icon: reactIcon, name: 'React' },
  { icon: tailwindIcon, name: 'Tailwind' },
  { icon: redux, name: 'Redux' },
  { icon: nodejs, name: 'Node.js' },
  { icon: expressjs, name: 'Express' },
  { icon: mongodb, name: 'MongoDB' },
  { icon: bootstrap, name: 'Bootstrap' },
  { icon: zustand, name: 'Zustand' },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 px-4 sm:px-10 bg-[oklch(11%_0.025_264)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,oklch(80%_0.18_195/0.04),transparent)]" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-[oklch(80%_0.18_195)] mb-3" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; TECH_STACK.load()
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
          MY SKILLS
        </h2>
        <div className="glow-line mt-6 w-48 mx-auto" />
      </motion.div>

      {/* Infinite scroll strip 1 */}
      <div className="relative z-10 w-full overflow-hidden mb-6">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[oklch(11%_0.025_264)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[oklch(11%_0.025_264)] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' } }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-3 group"
            >
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-[oklch(13%_0.03_264/0.8)] border border-[oklch(80%_0.18_195/0.15)] group-hover:border-[oklch(80%_0.18_195/0.5)] group-hover:shadow-[0_0_20px_oklch(80%_0.18_195/0.2)] transition-all duration-300"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 4px oklch(80% 0.18 195 / 0.3))' }}
                />
              </div>
              <span className="text-xs tracking-[0.1em] uppercase text-[oklch(50%_0.02_264)] group-hover:text-[oklch(80%_0.18_195)] transition-colors duration-300" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite scroll strip 2 (reverse) */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[oklch(11%_0.025_264)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[oklch(11%_0.025_264)] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-3 group"
            >
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-[oklch(13%_0.03_264/0.8)] border border-[oklch(65%_0.22_290/0.15)] group-hover:border-[oklch(65%_0.22_290/0.5)] group-hover:shadow-[0_0_20px_oklch(65%_0.22_290/0.2)] transition-all duration-300"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 4px oklch(65% 0.22 290 / 0.3))' }}
                />
              </div>
              <span className="text-xs tracking-[0.1em] uppercase text-[oklch(50%_0.02_264)] group-hover:text-[oklch(65%_0.22_290)] transition-colors duration-300" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
      >
        {[
          { value: '11+', label: 'Technologies' },
          { value: '8+', label: 'Projects' },
          { value: '1', label: 'Intern' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div
              className="text-3xl font-black text-[oklch(80%_0.18_195)] mb-1"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                textShadow: '0 0 15px oklch(80% 0.18 195)',
              }}
            >
              {value}
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-[oklch(50%_0.02_264)]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
