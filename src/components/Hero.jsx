import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute inset-0">

        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        />

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            Open to Internship Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-8xl font-bold mt-6 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ashray Kapoor
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl text-gray-300 mt-4"
        >
          Aspiring Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mt-8 text-gray-400 text-lg leading-relaxed"
        >
          Computer Science student focused on software development,
          full-stack engineering, and building real-world applications
          using React, Node.js, Express.js, and MongoDB.
        </motion.p>

        <div className="flex flex-wrap gap-4 mt-10">

          <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            View Projects
          </button>

          <a
            href="https://github.com/ashray-legion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ashray-kapoor-58892331a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}