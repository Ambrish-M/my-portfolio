import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BE | Computer Science and Engineering",
    institution: "Sree Sakthi Engineering College",
    year: "2021-2025",
  },
  {
    degree: "Higher Secondary",
    institution: "Government Higher Secondary School",
    year: "2019-2020",
  },
  {
    degree: "Secondary School Leaving Certificate",
    institution: "Government Higher Secondary School",
    year: "2017-2018",
  },
];

/* Animation Variants */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: index % 2 === 0 ? -80 : 80,
    scale: 0.9,
  }),
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // smooth premium easing
    },
  },
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen py-24 px-6 md:px-20 bg-primaryBg overflow-hidden"
    >
      {/* Section Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-gopher text-center mb-20"
      >
        Education
      </motion.h2>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative">

        {/* Animated Timeline Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-0 w-full h-[2px] bg-primaryText/30 origin-left"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-between items-center relative"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className={`w-80 p-8 bg-white/60 backdrop-blur-md rounded-3xl 
              shadow-xl border border-primaryText/10 
              transition-all duration-300
              ${index % 2 === 0 ? "mb-28" : "mt-28"}`}
            >
              <h3 className="font-gopher text-xl mb-3">
                {item.degree}
              </h3>
              <p className="font-sanscripf text-sm mb-1">
                {item.institution}
              </p>
              <p className="text-xs opacity-70">{item.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col gap-14 relative">

        {/* Animated Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-4 top-0 bottom-0 w-[2px] bg-primaryText/30 origin-top"
        />

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="pl-12 relative"
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="absolute left-0 top-2 w-4 h-4 bg-primaryText rounded-full"
            />

            <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-primaryText/10">
              <h3 className="font-gopher text-lg mb-2">
                {item.degree}
              </h3>
              <p className="font-sanscripf text-sm mb-1">
                {item.institution}
              </p>
              <p className="text-xs opacity-70">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
