import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a Computer Science student with a strong interest in
            software development and problem solving. I enjoy turning
            ideas into practical solutions and continuously improving
            my ability to design, build, and understand complex systems.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Beyond academics, I enjoy working on projects, exploring
            new concepts, and challenging myself with real-world
            problems that encourage growth and creativity. My goal is
            to build meaningful products while developing a strong
            foundation in software engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
        >
          <div className="space-y-6">

            <div>
              <h3 className="text-gray-500 text-sm">
                Education
              </h3>
              <p className="mt-2 text-lg">
                B.Tech Computer Science Engineering
              </p>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm">
                University
              </h3>
              <p className="mt-2 text-lg">
                SRM University
              </p>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm">
                Interests
              </h3>
              <p className="mt-2 text-lg">
                Software Development, Problem Solving,
                System Design, and Continuous Learning
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}