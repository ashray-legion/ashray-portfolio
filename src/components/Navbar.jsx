export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4">

          <h1 className="font-bold text-xl">
            AK
          </h1>

          <div className="flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </div>
    </nav>
  )
}