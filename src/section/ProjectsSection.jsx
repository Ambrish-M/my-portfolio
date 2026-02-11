import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import aijobtracker from "../assets/projects/aijobtracker.png"
import social from "../assets/projects/social.png"
import park from "../assets/projects/park.png"
import electrical from "../assets/projects/electrical.png"
import ecommerce from "../assets/projects/ecommerce.png"
import netfix from "../assets/projects/netflix.png"
import twitter from "../assets/projects/twitter.png"
import product from "../assets/projects/product.png"

//  project data
const projects = [
  {
    name: 'AI-job tracker',
    description: "A role based job application with ai-integration",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js", "Framer Motion", "Cloudinary", "Zustand"],
    github: "https://github.com/Ambrish-M/Ai-job-Tracker",
    live: 'https://ai-job-trackerr.netlify.app/',
    image: aijobtracker,
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
    name: 'Parkclarity-Public-Parking-Decision-Assistant',
    description: "In public places such as markets, malls, hospitals, offices, and event areas, drivers often waste time trying to determine whether parking is allowed.",
    tech: ["React", "tailwind"],
    github: "https://github.com/Ambrish-M/Parkclarity-Public-Parking-Decision-Assistant",
    live: "https://parkclarity-public-parking-decision.vercel.app",
    image: park,
  },
  {
    name: 'Ambaagiee-electricals',
    description: 'The platform showcases services, company information, and provides an easy way for customers to connect.',
    tech: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Ambrish-M/Ambaagiee-electricals-",
    live: "https://ambaajeeelectricals.netlify.app/",
    image: electrical,
  },
  {
    name: 'E-commerce App',
    description: 'Full-stack e-commerce platform with React and Node.js.',
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Ambrish-M/mern-ecommerce",
    live: "https://mern-ecommerce-t1vk.onrender.com",
    image: ecommerce,
  },
  {
    name: 'Netflix Clone',
    description: "Clone of Netflix with authentication, movie browsing, trailers, responsive UI.",
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
    name: 'X-clone',
    description: "Functional Twitter (X) clone with real-time updates, posts, likes, and authentication.",
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
      className="min-h-screen py-20 px-6 md:px-20 flex flex-col justify-center items-center bg-primaryBg"
    >
      <h2 className="text-4xl font-gopher mb-12 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-primaryBg border border-primaryText rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col h-[260px]">
              <h3 className="text-xl font-gopher mb-2">
                {project.name}
              </h3>

              <p className="text-primaryText font-sanscripf mb-4 text-sm">
                {project.description}
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
        px-3 py-1.5 text-xs font-medium rounded-full
        border border-primaryText/30
        bg-primaryText/5
        text-primaryText
        transition-all duration-300 ease-in-out
        hover:bg-primaryText hover:text-primaryBg
        hover:-translate-y-1 hover:shadow-md
      "
                  >
                    {tech}
                  </span>
                ))}
              </div>


              {/* Buttons */}
              <div className="flex items-center justify-between mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primaryText text-primaryBg rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-primaryText hover:scale-110 transition-transform"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
