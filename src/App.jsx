import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects/>
    </div>
  )
}

export default App