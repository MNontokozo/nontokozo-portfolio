import { useState } from 'react'
import { Menu, X, Mail, ExternalLink, Code2, Database, Server, Headphones } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

const projects = [
  {
    title: "SupportDesk Pro",
    description: "Full-stack IT Support Ticket System with user authentication, ticket creation, status workflow, live statistics dashboard and filtering. Built for Application Support and Service Desk roles.",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Tailwind"],
    link: "#",
    github: "https://github.com/MNontokozo/SupportDesk-Pro",
    status: "Completed"
  },
  {
    title: "NAMTECH Innovations",
    description: "Company website and digital solutions for small businesses. Built with HTML, CSS, JavaScript and WordPress. Includes hosting, maintenance and client support.",
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
    link: "https://www.namtechinnovations.co.za",
    github: "https://github.com/MNontokozo/NAMTECH-INNOVATIONS",
    status: "Live"
  },
  {
    title: "Farm Digitalisation Systems",
    description: "Supported development of systems that streamline farming operations, improve data management and enhance operational efficiency (Bigro).",
    tech: ["JavaScript", "Node.js", "SQL", "REST APIs"],
    link: "#",
    github: "#",
    status: "Professional Work"
  }
]

  const skills = [
    { category: "Frontend", items: ["React", "Angular", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express.js", "C#", "REST APIs", "PHP"] },
    { category: "Databases", items: ["MySQL", "SQL Server", "SQL Development", "Relational Design"] },
    { category: "Tools & Support", items: ["Git/GitHub", "WordPress", "Docker (Basic)", "cPanel", "Troubleshooting"] }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-teal-400" />
              <span className="font-bold text-lg">nontokozo.dev</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-teal-400 transition">About</a>
              <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
              <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
              <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block hover:text-teal-400" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="block hover:text-teal-400" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="block hover:text-teal-400" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block hover:text-teal-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Software Developer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm Nontokozo Mathaba
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I build practical web applications, work with databases, integrate systems, 
              and support digital solutions that improve business operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="border border-slate-600 hover:border-teal-400 px-6 py-3 rounded-lg transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a Software Developer with a Diploma in ICT and currently studying 
                BSc Software Engineering at the University of Mpumalanga.
              </p>
              <p>
                My experience includes building and maintaining web applications, 
                integrating REST APIs, working with relational databases (MySQL & SQL Server), 
                and providing technical support for business and agricultural systems.
              </p>
              <p>
                I focus on creating reliable solutions that solve real business problems 
                — from custom websites to system integrations and application support.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <Code2 className="w-8 h-8 text-teal-400 mb-3" />
                <h3 className="font-semibold mb-1">Full-Stack</h3>
                <p className="text-sm text-slate-400">Frontend + Backend development</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <Database className="w-8 h-8 text-teal-400 mb-3" />
                <h3 className="font-semibold mb-1">Databases</h3>
                <p className="text-sm text-slate-400">SQL Server & MySQL</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <Server className="w-8 h-8 text-teal-400 mb-3" />
                <h3 className="font-semibold mb-1">Integration</h3>
                <p className="text-sm text-slate-400">REST APIs & systems</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <Headphones className="w-8 h-8 text-teal-400 mb-3" />
                <h3 className="font-semibold mb-1">IT Support</h3>
                <p className="text-sm text-slate-400">Troubleshooting & maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Selected work that demonstrates development, databases, systems integration and support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-teal-400 transition">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-slate-800 text-teal-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 hover:text-white"
                    >
                      View Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-slate-300 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            I'm currently open to Software Developer, Full-stack, SQL/Database, 
            Application Support and Systems Integration roles.
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <a 
              href="mailto:mathabantokozokhona@gmail.com"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a 
              href="https://github.com/MNontokozo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-teal-400 px-6 py-3 rounded-lg transition"
            >
              GitHub Profile
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            Nelspruit, Mpumalanga • Available immediately • Willing to relocate
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Nontokozo Akhona Mathaba • nontokozo.dev</p>
      </footer>
    </div>
  )
}

export default App