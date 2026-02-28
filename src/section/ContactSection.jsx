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
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  const inputClass =
    "peer w-full bg-transparent py-3 outline-none text-[oklch(90%_0.02_264)] placeholder-transparent border-b border-[oklch(80%_0.18_195/0.3)] focus:border-[oklch(80%_0.18_195)] transition-colors duration-300";

  
  const labelClass =
    "absolute left-0 top-3 text-xs tracking-[0.2em] uppercase text-[oklch(80%_0.18_195/0.6)] transition-all duration-300 " +
    "peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs " +
    "peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-[oklch(80%_0.18_195)] " +
    "peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[0.65rem] peer-[&:not(:placeholder-shown)]:text-[oklch(80%_0.18_195/0.8)]";

  const fields = [
    { type: "text", label: "Your Name" },
    { type: "email", label: "Your Email" },
    { type: "tel", label: "Your Phone" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 bg-[oklch(8%_0.02_264)] overflow-hidden"
    >
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,oklch(65%_0.22_290/0.05),transparent)]" />

      {/* Corner decorators */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[oklch(80%_0.18_195/0.4)]" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[oklch(80%_0.18_195/0.4)]" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[oklch(80%_0.18_195/0.4)]" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[oklch(80%_0.18_195/0.4)]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase text-[oklch(80%_0.18_195)] mb-3"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            &gt; CONTACT.exe
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
            style={{
              fontFamily: "Orbitron, sans-serif",
              background:
                "linear-gradient(135deg, oklch(95% 0.01 264), oklch(80% 0.18 195))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LET'S CONNECT
          </h2>
          <div className="glow-line mx-auto w-48" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p
              className="text-base md:text-lg text-[oklch(75%_0.02_264)] leading-relaxed font-medium"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              I'm currently open to internship and entry-level MERN stack
              opportunities. If you'd like to collaborate or discuss a project,
              feel free to reach out.
            </p>

            {[
              {
                icon: <HiOutlineMail size={20} />,
                label: "ambrish2706@gmail.com",
                href: "mailto:ambrish2706@gmail.com",
              },
              {
                icon: <HiOutlinePhone size={20} />,
                label: "+91 8610422260",
                href: "tel:+918610422260",
              },
              {
                icon: <HiOutlineLocationMarker size={20} />,
                label: "Tamil Nadu, India",
                href: null,
              },
            ].map(({ icon, label, href }, i) => {
              const inner = (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={href ? { x: 6 } : {}}
                  className="flex items-center gap-4 px-4 py-3 border border-[oklch(80%_0.18_195/0.2)] bg-[oklch(80%_0.18_195/0.03)] hover:border-[oklch(80%_0.18_195/0.5)] hover:bg-[oklch(80%_0.18_195/0.08)] hover:shadow-[0_0_12px_oklch(80%_0.18_195/0.15)] transition-all duration-300 group"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  <span className="text-[oklch(80%_0.18_195)]">{icon}</span>
                  <span
                    className="text-[oklch(85%_0.02_264)] text-sm tracking-wide group-hover:text-[oklch(80%_0.18_195)] transition-colors duration-300"
                    style={{ fontFamily: "Share Tech Mono, monospace" }}
                  >
                    {label}
                  </span>
                </motion.div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8 relative p-6 border border-[oklch(80%_0.18_195/0.15)] bg-[oklch(80%_0.18_195/0.03)]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
            }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase text-[oklch(80%_0.18_195/0.7)] mb-6"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              &gt; INIT_MESSAGE
            </p>

            {/* Text / Email / Phone fields */}
            {fields.map(({ type, label }) => (
              <div key={label} className="relative">
                <input
                  type={type}
                  required
                  placeholder=" "
                  className={inputClass}
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                />
                <label
                  className={labelClass}
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  {label}
                </label>
              </div>
            ))}

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                required
                placeholder=" "
                className={`${inputClass} resize-none`}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              />
              <label
                className={labelClass}
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 font-semibold text-sm tracking-[0.2em] uppercase text-[oklch(8%_0.02_264)] bg-[oklch(80%_0.18_195)] hover:bg-[oklch(85%_0.18_195)] hover:shadow-[0_0_20px_oklch(80%_0.18_195/0.4)] transition-all duration-300"
              style={{
                fontFamily: "Share Tech Mono, monospace",
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              &gt; Send Message
            </motion.button>

            {/* Success Message */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[oklch(80%_0.18_195)] text-xs tracking-[0.2em] uppercase font-medium mt-2"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  ✅ MESSAGE TRANSMITTED SUCCESSFULLY
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner accents inside form */}
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[oklch(80%_0.18_195/0.5)]" />
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[oklch(80%_0.18_195/0.5)]" />
          </motion.form>
        </div>
      </div>
    </section>
  );
}