import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 md:px-20 bg-primaryBg flex flex-col justify-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-gopher text-center mb-16"
      >
        Let’s Connect
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="font-sanscripf text-lg leading-relaxed">
            I’m currently open to internship and entry-level MERN stack
            opportunities. If you'd like to collaborate or discuss a project,
            feel free to reach out.
          </p>

          <a
            href="mailto:ambrish2706@gmail.com"
            className="flex items-center gap-3 text-lg hover:opacity-70 transition"
          >
            <HiOutlineMail size={22} />
            ambrish2706@gmail.com
          </a>

          <a
            href="tel:+918610422260"
            className="flex items-center gap-3 text-lg hover:opacity-70 transition"
          >
            <HiOutlinePhone size={22} />
            +91 8610422260
          </a>

          <div className="flex items-center gap-3 text-lg opacity-80">
            <HiOutlineLocationMarker size={22} />
            Tamil Nadu, India
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-primaryText/40 
                         bg-transparent py-3 outline-none"
            />
            <label
              className="absolute left-0 top-3 text-sm opacity-70 
                         transition-all duration-300
                         peer-placeholder-shown:top-3
                         peer-placeholder-shown:text-sm
                         peer-focus:-top-4
                         peer-focus:text-xs
                         peer-valid:-top-4
                         peer-valid:text-xs"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-primaryText/40 
               bg-transparent py-3 outline-none"
            />
            <label
              className="
      absolute left-0 top-3 text-sm opacity-70
      transition-all duration-300
      peer-focus:-top-4
      peer-focus:text-xs
      peer-not-placeholder-shown:-top-4
      peer-not-placeholder-shown:text-xs
    "
            >
              Your Email
            </label>
          </div>


          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-primaryText/40 
                         bg-transparent py-3 outline-none"
            />
            <label
              className="absolute left-0 top-3 text-sm opacity-70 
                         transition-all duration-300
                         peer-placeholder-shown:top-3
                         peer-placeholder-shown:text-sm
                         peer-focus:-top-4
                         peer-focus:text-xs
                         peer-valid:-top-4
                         peer-valid:text-xs"
            >
              Your Phone
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows="4"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-primaryText/40 
                         bg-transparent py-3 outline-none resize-none"
            ></textarea>
            <label
              className="absolute left-0 top-3 text-sm opacity-70 
                         transition-all duration-300
                         peer-placeholder-shown:top-3
                         peer-placeholder-shown:text-sm
                         peer-focus:-top-4
                         peer-focus:text-xs
                         peer-valid:-top-4
                         peer-valid:text-xs"
            >
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="px-8 py-3 bg-primaryText text-primaryBg 
                       rounded-xl font-semibold 
                       transition-transform duration-300 
                       hover:scale-105"
          >
            Send Message
          </button>

          {/* Success Message */}
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-green-600 text-sm font-medium mt-2"
              >
                ✅ Your message was sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
