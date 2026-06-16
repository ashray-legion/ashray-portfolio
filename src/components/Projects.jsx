import { motion } from "framer-motion"
import faceRecognition from "../assets/face-recognition.png"

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <motion.div
        whileHover={{ y: -10 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
      >
        <img
          src={faceRecognition}
          alt="Face Recognition Attendance System"
          className="w-full h-72 object-cover"
        />

        <div className="p-8">
          <h3 className="text-2xl font-bold">
            Face Recognition Attendance System
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            An intelligent attendance management system utilizing
            OpenCV's LBPH Face Recognizer for real-time facial
            identification, automated attendance logging,
            and student registration.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="https://github.com/ashray-legion/face-recognition-attendance-system"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  )
}