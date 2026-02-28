import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import myImage from "../assets/my-photo.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const TYPING_TEXTS = [
  'FullStack Developer',
  'MERN Enthusiast',
  'Web Developer',
  'React Specialist',
];

function TypingText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setDeleting(false);
      setTextIndex((t) => (t + 1) % TYPING_TEXTS.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <span className="text-[oklch(80%_0.18_195)]" style={{ textShadow: '0 0 15px oklch(80% 0.18 195)' }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-10 md:gap-16 pt-24 md:pt-0 overflow-hidden bg-[oklch(8%_0.02_264)]"
    >
      {/* Animated cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,oklch(80%_0.18_195/0.04),transparent)]" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-t-2 border-l-2 border-[oklch(80%_0.18_195/0.4)]" />
      <div className="absolute top-24 right-6 w-16 h-16 border-t-2 border-r-2 border-[oklch(65%_0.22_290/0.4)]" />
      <div className="absolute bottom-10 left-6 w-16 h-16 border-b-2 border-l-2 border-[oklch(65%_0.22_290/0.4)]" />
      <div className="absolute bottom-10 right-6 w-16 h-16 border-b-2 border-r-2 border-[oklch(80%_0.18_195/0.4)]" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[oklch(80%_0.18_195)]"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            boxShadow: '0 0 6px oklch(80% 0.18 195)',
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-6 px-4 py-2 border border-[oklch(80%_0.18_195/0.3)] bg-[oklch(80%_0.18_195/0.05)]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
        >
          <span className="w-2 h-2 rounded-full bg-[oklch(75%_0.2_145)] animate-pulse shadow-[0_0_6px_oklch(75%_0.2_145)]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[oklch(60%_0.02_264)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Available for hire
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-2"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[oklch(60%_0.02_264)] mb-2" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
            &gt; INITIALIZING PROFILE...
          </p>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-2"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(135deg, oklch(95% 0.01 264) 0%, oklch(80% 0.18 195) 50%, oklch(65% 0.22 290) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AMBRISH
          </h1>
        </motion.div>

        {/* Typing text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl font-semibold mb-8 tracking-wider"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
        >
          <TypingText />
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
        >
          <a href="/Ambrish Resume.pdf" download className="btn-neon-solid">
            <span>Download Resume</span>
          </a>
          <a href="#projects" className="btn-neon">
            <span>View My Work</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-6 justify-center md:justify-start"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/Ambrish-M', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ambrish-m-baa36b2a0/', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="relative w-10 h-10 flex items-center justify-center border border-[oklch(80%_0.18_195/0.3)] text-[oklch(60%_0.02_264)] hover:text-[oklch(80%_0.18_195)] hover:border-[oklch(80%_0.18_195)] hover:shadow-[0_0_15px_oklch(80%_0.18_195/0.4)] transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 flex-1 flex justify-center md:justify-end"
      >
        <div className="relative">
          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-6 border border-[oklch(80%_0.18_195/0.2)] rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-12 border border-dashed border-[oklch(65%_0.22_290/0.15)] rounded-full"
          />

          {/* Glow orbs */}
          <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,oklch(80%_0.18_195/0.15),transparent_70%)]" />

          {/* Hexagonal frame */}
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-2 border-[oklch(80%_0.18_195/0.6)]"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              boxShadow: '0 0 30px oklch(80% 0.18 195 / 0.3), inset 0 0 30px oklch(80% 0.18 195 / 0.05)',
            }}
          >
            <img
              src={myImage}
              alt="Ambrish"
              className="w-full h-full object-cover"
            />
            {/* Scan overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,oklch(80%_0.18_195/0.03)_3px,oklch(80%_0.18_195/0.03)_4px)]" />
          </div>

          {/* Corner data labels */}
          <div
            className="absolute -bottom-4 -right-4 px-3 py-1 bg-[oklch(8%_0.02_264)] border border-[oklch(80%_0.18_195/0.4)] text-[oklch(80%_0.18_195)] text-xs"
            style={{ fontFamily: 'Share Tech Mono, monospace', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
          >
            MERN DEV
          </div>
          <div
            className="absolute -top-4 -left-4 px-3 py-1 bg-[oklch(8%_0.02_264)] border border-[oklch(65%_0.22_290/0.4)] text-[oklch(65%_0.22_290)] text-xs"
            style={{ fontFamily: 'Share Tech Mono, monospace', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
          >
            v2.0.26
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-[oklch(40%_0.02_264)]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[oklch(80%_0.18_195)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
