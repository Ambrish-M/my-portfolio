import { motion } from "framer-motion";
import profileImg from "../assets/myprofile.png"; // optional

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20 bg-primaryBg"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-primaryText/20 to-primaryText/5 p-6 rounded-full">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-64 h-64 md:w-80 md:h-80 object-contain"
                            />
                        </div>
                    </div>

                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-gopher mb-6">
                        About Me
                    </h2>

                    <p className="text-base md:text-lg text-primaryText mb-4 leading-relaxed">
                        I am an entry-level MERN Stack Developer passionate about building
                        modern, responsive, and scalable web applications. I specialize in
                        React for frontend development and Node.js + Express for backend APIs.
                    </p>

                    <p className="text-base md:text-lg text-primaryText mb-6 leading-relaxed">
                        I have hands-on experience developing full-stack projects including
                        e-commerce platforms, portfolio websites, and social applications
                        using MongoDB, Zustand, and REST APIs.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <span className="px-4 py-2 rounded-full text-sm font-medium
                 border border-primaryText/30
                 bg-primaryText/5
                 hover:bg-primaryText hover:text-primaryBg
                 transition-all duration-300 ease-in-out
                 hover:-translate-y-1">
                            MERN Stack
                        </span>

                        <span className="px-4 py-2 rounded-full text-sm font-medium
                 border border-primaryText/30
                 bg-primaryText/5
                 hover:bg-primaryText hover:text-primaryBg
                 transition-all duration-300 ease-in-out
                 hover:-translate-y-1">
                            REST APIs
                        </span>

                        <span className="px-4 py-2 rounded-full text-sm font-medium
                 border border-primaryText/30
                 bg-primaryText/5
                 hover:bg-primaryText hover:text-primaryBg
                 transition-all duration-300 ease-in-out
                 hover:-translate-y-1">
                            Responsive Design
                        </span>

                        <span className="px-4 py-2 rounded-full text-sm font-medium
                 border border-primaryText/30
                 bg-primaryText/5
                 hover:bg-primaryText hover:text-primaryBg
                 transition-all duration-300 ease-in-out
                 hover:-translate-y-1">
                            Zustand
                        </span>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
