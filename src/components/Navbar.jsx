import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'py-3 bg-[oklch(8%_0.02_264/0.95)] backdrop-blur-xl border-b border-[oklch(80%_0.18_195/0.2)] shadow-[0_0_30px_oklch(80%_0.18_195/0.1)]'
        : 'py-5 bg-transparent'
        }`}
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,oklch(0%_0_0/0.02)_2px,oklch(0%_0_0/0.02)_4px)]" />
      </div>

      <div className="relative flex justify-between items-center px-6 md:px-20">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 border border-[oklch(80%_0.18_195)] rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
            <div className="absolute inset-1 border border-[oklch(65%_0.22_290/0.6)] rotate-12 group-hover:rotate-[192deg] transition-transform duration-700" />
          </div>
          <span
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            className="text-sm font-bold tracking-[0.2em] uppercase text-[oklch(80%_0.18_195)]"

          >
            AMBRISH
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              values={activeLink}
              onClick={() => setActiveLink(link.name)}
              className="relative group text-sm tracking-[0.15em] uppercase font-medium text-[oklch(60%_0.02_264)] hover:text-[oklch(80%_0.18_195)] transition-colors duration-300"
              style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem' }}
            >
              <span className="relative z-10">{link.name}</span>
              {/* Underline glow */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(80%_0.18_195)] group-hover:w-full transition-all duration-300 shadow-[0_0_6px_oklch(80%_0.18_195)]" />
              {/* Corner accents */}
              <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-[oklch(80%_0.18_195/0)] group-hover:border-[oklch(80%_0.18_195)] transition-all duration-300" />
              <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-[oklch(80%_0.18_195/0)] group-hover:border-[oklch(80%_0.18_195)] transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center border border-[oklch(80%_0.18_195/0.4)] text-[oklch(80%_0.18_195)] hover:border-[oklch(80%_0.18_195)] hover:shadow-[0_0_10px_oklch(80%_0.18_195/0.4)] transition-all duration-300"
          style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
        >
          {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[oklch(8%_0.02_264/0.98)] backdrop-blur-xl border-b border-[oklch(80%_0.18_195/0.2)]"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  values={activeLink}

                  onClick={() => setActiveLink(link.name)}
                  className="text-sm tracking-[0.2em] uppercase text-[oklch(60%_0.02_264)] hover:text-[oklch(80%_0.18_195)] transition-colors duration-300"
                  style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
