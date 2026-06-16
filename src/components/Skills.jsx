import { motion } from "framer-motion"

const skills = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Git",
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center hover:scale-105 transition"
          >
            {skill}
          </motion.div>
        ))}

      </div>
    </section>
  )
}