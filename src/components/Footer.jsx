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
      className="relative bg-[oklch(8%_0.02_264)] overflow-hidden py-12 px-6 md:px-20"
    >
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,oklch(65%_0.22_290/0.04),transparent)]" />

      {/* Top border glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[oklch(80%_0.18_195/0.3)] shadow-[0_0_8px_oklch(80%_0.18_195/0.4)]" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[oklch(80%_0.18_195/0.5)]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[oklch(80%_0.18_195/0.5)]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3
            className="text-xl font-black mb-1 tracking-tight"
            style={{
              fontFamily: "Orbitron, sans-serif",
              background: "linear-gradient(135deg, oklch(95% 0.01 264), oklch(80% 0.18 195))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AMBRISH
          </h3>
          <p
            className="text-xs tracking-[0.2em] uppercase text-[oklch(75%_0.02_264/0.7)]"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            MERN Stack Developer • Building modern web experiences
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {[
            { href: "https://github.com/Ambrish-M", icon: <FaGithub size={20} />, label: "GH" },
            { href: "https://www.linkedin.com/in/ambrish-m-baa36b2a0/", icon: <FaLinkedin size={20} />, label: "LI" },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 text-[oklch(80%_0.18_195)] border border-[oklch(80%_0.18_195/0.3)] bg-[oklch(80%_0.18_195/0.05)] hover:bg-[oklch(80%_0.18_195/0.15)] hover:border-[oklch(80%_0.18_195/0.7)] hover:shadow-[0_0_12px_oklch(80%_0.18_195/0.3)] transition-all duration-300"
              style={{
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Back To Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-5 py-2 text-xs tracking-[0.2em] uppercase font-semibold text-[oklch(8%_0.02_264)] bg-[oklch(80%_0.18_195)] hover:bg-[oklch(85%_0.18_195)] hover:shadow-[0_0_16px_oklch(80%_0.18_195/0.4)] transition-all duration-300"
          style={{
            fontFamily: "Share Tech Mono, monospace",
            clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
          }}
        >
          <HiArrowUp size={16} />
          Top
        </motion.button>
      </div>

      {/* Bottom Line */}
      <div
        className="relative z-10 text-center mt-10 text-xs tracking-[0.25em] uppercase text-[oklch(75%_0.02_264/0.5)]"
        style={{ fontFamily: "Share Tech Mono, monospace" }}
      >
        © {new Date().getFullYear()} Ambrish. All rights reserved.
      </div>
    </motion.footer>
  );
}