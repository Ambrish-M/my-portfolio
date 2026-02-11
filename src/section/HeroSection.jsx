import { motion } from 'framer-motion';
import myImage from "../assets/my-photo.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 gap-10 bg-primaryBg"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-gopher mb-4 leading-tight">
          Hi, This is Ambrish
        </h1>
        <p className="text-lg md:text-xl font-sanscripf mb-6 max-w-md">
          FullStack Developer | MERN Enthusiast | Web  Developer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-4">
          <a
            href="/Ambrish Resume.pdf"
            download
            className="px-1 py-3 bg-primaryText text-primaryBg rounded-lg font-semibold hover:scale-105 transition-transform text-center"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-primaryText rounded-lg hover:bg-primaryText hover:text-primaryBg transition text-center"
          >
            View My Work
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start mt-2 text-2xl">
          <a
            href="https://github.com/Ambrish-M"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryText hover:text-gray-700 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ambrish-m-baa36b2a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryText hover:text-blue-600 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <img
          src={myImage}
          alt="Ambrish"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primaryText shadow-lg"
        />
      </motion.div>
    </section>
  );
}
