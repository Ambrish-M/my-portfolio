import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import aijobtracker from "../assets/projects/aijobtracker.png";
import social from "../assets/projects/social.png";
import park from "../assets/projects/park.png";
import electrical from "../assets/projects/electrical.png";
import ecommerce from "../assets/projects/ecommerce.png";
import netfix from "../assets/projects/netflix.png";
import twitter from "../assets/projects/twitter.png";
import product from "../assets/projects/product.png";

const projects = [
  {
    name: 'AI-Job Tracker',
    description: "A role-based job application with AI-integration for smart tracking.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js", "Zustand"],
    github: "https://github.com/Ambrish-M/Ai-job-Tracker",
    live: 'https://ai-job-trackerr.netlify.app/',
    image: aijobtracker,
    featured: true,
  },
  {
    name: 'Social Media App',
    description: 'Mini social platform built with MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node', 'Bootstrap'],
    github: 'https://github.com/Ambrish-M/Mini-Social_Post-App-Frontend',
    live: 'https://min-social-post-application.netlify.app/',
    image: social,
  },
  {
    name: 'ParkClarity',
    description: "Public parking decision assistant for markets, malls, hospitals and offices.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/Ambrish-M/Parkclarity-Public-Parking-Decision-Assistant",
    live: "https://parkclarity-public-parking-decision.vercel.app",
    image: park,
  },
  {
    name: 'Ambaagiee Electricals',
    description: 'Business platform showcasing services and customer connection portal.',
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ambrish-M/Ambaagiee-electricals-",
    live: "https://ambaajeeelectricals.netlify.app/",
    image: electrical,
  },
  {
    name: 'E-Commerce App',
    description: 'Full-stack e-commerce platform with React and Node.js.',
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Ambrish-M/mern-ecommerce",
    live: "https://mern-ecommerce-t1vk.onrender.com",
    image: ecommerce,
  },
  {
    name: 'Netflix Clone',
    description: "Clone with authentication, movie browsing, trailers and responsive UI.",
    tech: ["React", "Node.js", "TMDB API", "Tailwind"],
    github: "https://github.com/Ambrish-M/mern-Netflix-clone",
    live: "https://mern-netflix-clone-1-ufbj.onrender.com",
    image: netfix,
  },
  {
    name: 'Product Creator',
    description: "CRUD app to manage products with images uploaded via Cloudinary.",
    tech: ["React", "Node.js", "MongoDB", "Chakra UI"],
    github: "https://github.com/Ambrish-M/Product_Creater",
    live: "https://product-creater.onrender.com",
    image: product,
  },
  {
    name: 'X-Clone',
    description: "Functional Twitter clone with real-time updates, posts, likes and auth.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "DaisyUI"],
    github: "https://twitter-clone-1hdy.onrender.com",
    live: "https://product-creater.onrender.com",
    image: twitter,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 md:px-20 bg-[oklch(8%_0.02_264)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,oklch(65%_0.22_290/0.04),transparent)]" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-[oklch(80%_0.18_195)] mb-3" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; PROJECTS.render()
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
          MY PROJECTS
        </h2>
        <div className="glow-line mt-6 w-48 mx-auto" />
      </motion.div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative bg-[oklch(13%_0.03_264/0.9)] backdrop-blur-md border border-[oklch(80%_0.18_195/0.15)] hover:border-[oklch(80%_0.18_195/0.5)] transition-all duration-400 overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
            }}
          >
            {/* Hover glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top, oklch(80% 0.18 195 / 0.05), transparent 60%)' }}
            />

            {/* Featured badge */}
            {project.featured && (
              <div
                className="absolute top-3 right-3 z-20 px-2 py-0.5 text-xs bg-[oklch(80%_0.18_195)] text-[oklch(8%_0.02_264)] font-bold tracking-[0.1em]"
                style={{ fontFamily: 'Share Tech Mono, monospace', clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
              >
                FEATURED
              </div>
            )}

            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(13%_0.03_264)] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,oklch(0%_0_0/0.05)_3px,oklch(0%_0_0/0.05)_4px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">

              {/* Project name */}
              <h3
                className="font-bold text-[oklch(95%_0.01_264)] group-hover:text-[oklch(80%_0.18_195)] transition-colors duration-300"
                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', letterSpacing: '0.05em' }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-[oklch(60%_0.02_264)] leading-relaxed"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {project.description}
              </p>

              {/* Tech Stack — centered inside a single bordered box */}
              <div
                className="flex flex-wrap justify-center items-center gap-1.5 py-3 px-2 border border-[oklch(80%_0.18_195/0.2)] bg-[oklch(80%_0.18_195/0.03)]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[oklch(80%_0.18_195)] bg-[oklch(80%_0.18_195/0.08)] px-2 py-0.5 rounded-sm"
                    style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.05em' }}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span
                    className="text-[oklch(50%_0.02_264)]"
                    style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem' }}
                  >
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[oklch(80%_0.18_195)] text-[oklch(8%_0.02_264)] text-xs font-bold tracking-[0.1em] hover:shadow-[0_0_15px_oklch(80%_0.18_195/0.5)] transition-all duration-300"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                >
                  <HiExternalLink size={12} />
                  LIVE
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-[oklch(80%_0.18_195/0.3)] text-[oklch(60%_0.02_264)] hover:text-[oklch(80%_0.18_195)] hover:border-[oklch(80%_0.18_195)] hover:shadow-[0_0_10px_oklch(80%_0.18_195/0.3)] transition-all duration-300"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[oklch(80%_0.18_195/0.4)]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[oklch(80%_0.18_195/0.4)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}