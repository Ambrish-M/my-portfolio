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

// Skill images array
const skills = [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon, redux, nodejs, expressjs, mongodb, bootstrap, zustand];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-10"
    >
      <h2 className="text-3xl sm:text-4xl font-gopher mb-12 text-center">My Skills</h2>

      {/* Infinite scroll container */}
      <div className="overflow-hidden w-full relative">
        <motion.div
          className="flex gap-6 sm:gap-10"
          animate={{ x: ['0%', '-50%'] }} // animate left to -50%
          transition={{
            x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' },
          }}
        >
          {/* Duplicate skills array for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 sm:w-32 h-20 sm:h-32 flex justify-center items-center"
            >
              <img
                src={skill}
                alt="Skill"
                className="w-16 sm:w-24 h-16 sm:h-24 object-contain hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
