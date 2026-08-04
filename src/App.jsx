import { motion } from "framer-motion"

function App() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "Java", ".NET Fundamentals"],
    },
    {
      title: "Machine Learning",
      skills: [
        "Supervised Learning",
        "KNN",
        "Classification",
        "Time-Series Prediction",
        "Computer Vision",
        "Feature Engineering",
      ],
    },
    {
      title: "Systems & Data",
      skills: [
        "REST APIs",
        "Relational Databases",
        "Schema Design",
        "Edge Computing",
        "Raspberry Pi",
        "ESP32",
        "Analytics Dashboards",
      ],
    },
    {
      title: "Engineering",
      skills: [
        "Git",
        "Agile",
        "Scrum",
        "SDLC",
        "Software Testing",
        "Defect Tracking",
        "Network Monitoring",
        "Network Security",
        "AWS Fundamentals",
      ],
    },
  ]

  const experiences = [
    {
      role: "Software Quality Assurance Engineer",
      company: "Texas Mobile",
      period: "Feb 2025 – Aug 2025",
      responsibilities: [
        "Executed functional, system, and regression testing across medical-device software and firmware.",
        "Analyzed defects, release risks, and quality trends to improve software reliability.",
        "Mapped test cases to requirements and design controls while maintaining validation evidence.",
        "Collaborated with software, firmware, and quality engineering teams in regulated SDLC and QMS environments.",
      ],
    },
    {
      role: "Network Engineer",
      company: "Solve Tech LLC",
      period: "Jan 2023 – Jan 2024",
      responsibilities: [
        "Designed and maintained secure, scalable, and highly available network infrastructure.",
        "Monitored performance and resolved connectivity, configuration, and infrastructure issues.",
        "Supported disaster recovery, backup strategies, business continuity, and network security improvements.",
        "Evaluated networking technologies to improve performance, scalability, and reliability.",
      ],
    },
    {
      role: "Web Developer",
      company: "Rejolt EdTech Pvt. Ltd.",
      period: "Aug 2022 – Dec 2022",
      responsibilities: [
        "Developed responsive point-of-sale, mobile, and website interfaces.",
        "Integrated REST APIs and collaborated with cross-functional Agile teams.",
        "Participated in sprint testing, debugging, and technical documentation.",
      ],
    },
  ]

  const projects = [
    {
      number: "01",
      title: "ThermoGuardian AI",
      description:
        "An edge AI healthcare-monitoring prototype using ESP32 sensor nodes and Raspberry Pi for continuous data collection, fever-trend analysis, dashboard visualization, and low-latency alerts.",
      tech: [
        "Python",
        "Machine Learning",
        "Raspberry Pi",
        "ESP32",
        "IoT",
      ],
      github: "https://github.com/Mark180665",
    },
    {
      number: "02",
      title: "Bone Deformity Identification",
      description:
        "A computer-vision workflow for medical-image classification, dataset preprocessing, feature engineering, baseline comparison, and evaluation of model performance and limitations.",
      tech: [
        "Python",
        "Computer Vision",
        "Image Classification",
        "Feature Engineering",
      ],
      github: "https://github.com/Mark180665",
    },
    {
      number: "03",
      title: "Stock Price Prediction",
      description:
        "A KNN-based time-series forecasting pipeline with data cleaning, feature scaling, model evaluation, and reproducible experiments to study prediction accuracy.",
      tech: [
        "Python",
        "KNN",
        "Time-Series Prediction",
        "Model Evaluation",
      ],
      github: "https://github.com/Mark180665",
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111f]/90 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight">
            AKM<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          <a
            href="/Aslam_Khan_Mohammed_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition"
          >
            Resume
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-7">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Open to AI/ML and software engineering opportunities
            </div>

            <p className="text-lg text-slate-400 mb-3">
              Hello, I’m
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Aslam Khan
              <span className="block text-cyan-400">Mohammed</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-200">
              AI/ML Engineer and Computer Engineering Graduate
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
              I build practical machine-learning, computer-vision,
              edge-computing, software-quality, and network-engineering
              solutions for real-world applications.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
              >
                Explore My Work
              </a>

              <a
                href="https://github.com/Mark180665"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                GitHub Profile
              </a>

              <a
                href="/Aslam_Khan_Mohammed_Resume.pdf"
                download
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
              <img
                src="/profile_pic.jpeg"
                alt="Aslam Khan Mohammed"
                className="h-80 w-full rounded-2xl object-cover object-top"
              />

              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                  Based in
                </p>
                <p className="mt-1 text-xl font-semibold">
                  Stevenson Ranch, California
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <p className="text-2xl font-bold text-cyan-400">
                      2+
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Years of experience
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <p className="text-2xl font-bold text-cyan-400">
                      3
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Featured projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-white/10 bg-white/[0.025]">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[0.35fr_0.65fr] gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                About
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                Engineering intelligent and reliable systems.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-5 text-lg leading-relaxed text-slate-400"
            >
              <p>
                I am an AI/ML Engineer and M.S. Computer Engineering
                graduate from California State University, Northridge.
                My professional experience spans applied machine
                learning, software quality assurance, network engineering,
                and web development.
              </p>

              <p>
                I enjoy working at the intersection of intelligent
                models, connected devices, data systems, and dependable
                software. My goal is to build practical technology that
                is accurate, scalable, secure, and useful.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Capabilities
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:border-cyan-400/50 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-800/80 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="border-y border-white/10 bg-white/[0.025]"
        >
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Career
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                Professional Experience
              </h2>
            </div>

            <div className="relative space-y-10 md:ml-5 md:border-l md:border-cyan-400/30">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.role}-${experience.company}`}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative md:pl-10"
                >
                  <div className="hidden md:block absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-[#08111f]" />

                  <div className="rounded-2xl border border-white/10 bg-[#0d1828] p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          {experience.role}
                        </h3>
                        <p className="mt-1 text-cyan-400">
                          {experience.company}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
                        {experience.period}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3 text-slate-400">
                      {experience.responsibilities.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:-translate-y-2 hover:border-cyan-400/50 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-white/10 group-hover:text-cyan-400/30 transition">
                    {project.number}
                  </span>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    Project
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-grow leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  View on GitHub
                  <span aria-hidden="true">→</span>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[0.35fr_0.65fr] gap-10 rounded-3xl border border-white/10 bg-[#0d1828] p-8 md:p-10"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Education
                </p>
                <h2 className="mt-3 text-3xl font-bold">
                  Academic Background
                </h2>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Master of Science in Computer Engineering
                </h3>

                <p className="mt-2 text-lg text-cyan-400">
                  California State University, Northridge
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full border border-white/10 px-4 py-2 text-slate-300">
                    Jan 2024 – May 2026
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-slate-300">
                    GPA: 3.58 / 4.00
                  </span>
                </div>

                <p className="mt-6 leading-relaxed text-slate-400">
                  Relevant coursework includes Computer Systems
                  Architecture, SoC Design, Biomedical Engineering
                  Models, Verilog/SystemVerilog, and ASIC Development.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-[#0d1828] to-[#0d1828] p-8 md:p-12"
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Contact
                </p>

                <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                  Let’s build something meaningful.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
                  I’m exploring opportunities in AI/ML engineering,
                  software engineering, computer vision, quality
                  engineering, and related technology roles.
                </p>
              </div>

              <a
                href="mailto:khanaslam0604@gmail.com?subject=Portfolio%20Contact"
                className="inline-flex justify-center rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
              >
                Email Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 border-t border-white/10 pt-8 text-slate-300">
              <a
                href="mailto:khanaslam0604@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                khanaslam0604@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/aslam-khan-mohammed-535a6b290"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Mark180665"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <span className="text-slate-500">
                Stevenson Ranch, California
              </span>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500">
          <p>© 2026 Aslam Khan Mohammed</p>
          <p>AI/ML Engineer and Software Engineer</p>
        </div>
      </footer>
    </div>
  )
}

export default App
