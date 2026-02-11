import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function AnimatedFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-primaryBg border-t border-primaryText/20 py-12 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-center justify-between gap-8">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="font-gopher text-xl mb-2">
            Ambrish
          </h3>
          <p className="font-sanscripf text-sm opacity-70">
            MERN Stack Developer • Building modern web experiences
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Ambrish-M"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/ambrish-m-baa36b2a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 
                     px-4 py-2 rounded-lg 
                     border border-primaryText/30 
                     hover:bg-primaryText 
                     hover:text-primaryBg 
                     transition duration-300"
        >
          <HiArrowUp size={18} />
          Top
        </button>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-xs opacity-60">
        © {new Date().getFullYear()} Ambrish. All rights reserved.
      </div>
    </motion.footer>
  );
}
