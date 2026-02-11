import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi'; // hamburger icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      animate={{ height: scrolled ? 60 : 100 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 bg-primaryBg shadow-md z-50"
    >
      {/* Logo / Name */}
      <h1 className="font-gopher text-xl md:text-2xl">My Portfolio</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-primaryText font-semibold">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="hover:underline">
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-primaryBg shadow-md flex flex-col items-center gap-4 py-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold hover:underline"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
