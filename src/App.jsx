import { motion } from "framer-motion"

function App() {
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
        "Monitored network performance and resolved connectivity, configuration, and infrastructure issues.",
        "Supported disaster recovery, backup strategies, business continuity, and network security improvements.",
        "Evaluated emerging networking technologies to improve performance, scalability, and reliability.",
      ],
    },
    {
      role: "Web Developer",
      company: "Rejolt EdTech Pvt. Ltd.",
      period: "Aug 2022 – Dec 2022",
      responsibilities: [
        "Developed responsive point-of-sale, mobile, and website user interfaces.",
        "Integrated REST APIs and collaborated with cross-functional Agile teams.",
        "Participated in sprint testing, debugging, and technical documentation.",
      ],
    },
  ]

  const projects = [
    {
      title: "ThermoGuardian AI",
      description:
        "An edge AI healthcare-monitoring prototype using ESP32 sensor nodes and Raspberry Pi for continuous data collection, fever-trend analysis, dashboard visualization, and low-latency alerts.",
      tech: [
        "Python",
        "Machine Learning",
        "Edge AI",
        "Raspberry Pi",
        "ESP32",
        "IoT",
      ],
      github: "https://github.com/Mark180665",
    },
    {
      title: "Bone Deformity Identification",
      description:
        "A computer-vision workflow for medical-image classification, including dataset preprocessing, feature engineering, baseline model comparison, performance evaluation, and documentation of model limitations.",
      tech: [
        "Python",
        "Computer Vision",
        "Machine Learning",
        "Image Classification",
        "Feature Engineering",
      ],
      github: "https://github.com/Mark180665",
    },
    {
      title: "Stock Price Prediction",
      description:
        "A KNN-based time-series forecasting pipeline built in Python with data cleaning, feature scaling, model evaluation, and reproducible experiments to analyze prediction accuracy and limitations.",
      tech: [
        "Python",
        "KNN",
        "Time-Series Prediction",
        "Data Preprocessing",
        "Model Evaluation",
      ],
      github: "https://github.com/Mark180665",
    },
  ]

  const skills = [
    "Python",
    "SQL",
    "Java",
    ".NET Fundamentals",
    "Machine Learning",
    "Supervised Learning",
    "KNN",
    "Classification",
    "Time-Series Prediction",
    "Computer Vision",
    "Feature Engineering",
    "REST APIs",
    "Relational Databases",
    "Schema Design",
    "Edge Computing",
    "Raspberry Pi",
    "ESP32",
    "Analytics Dashboards",
    "Git",
    "Agile",
    "Scrum",
    "SDLC",
    "Software Testing",
    "Defect Tracking",
    "Network Monitoring",
    "Network Security",
    "Infrastructure Support",
    "AWS Fundamentals",
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 font-semibold mb-4">
            AI/ML Engineer | Software Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I’m{" "}
            <span className="text-purple-500">
              Aslam Khan Mohammed
            </span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            I build machine-learning, computer-vision, edge-computing,
            software-quality, and network-engineering solutions for
            real-world applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Aslam_Khan_Mohammed_Resume.pdf"
              download
              className="bg-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-500 hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Mark180665"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="#projects"
              className="border border-slate-600 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile_pic.jpeg"
            alt="Aslam Khan Mohammed"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-purple-500 shadow-[0_0_45px_rgba(168,85,247,0.55)] hover:scale-105 transition duration-300"
          />
        </motion.div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-slate-300 leading-relaxed">
            I am an AI/ML Engineer and M.S. Computer Engineering
            candidate at California State University, Northridge. I
            have more than two years of engineering experience across
            applied machine learning, software quality assurance,
            network engineering, and web development. I enjoy building
            reliable systems that combine intelligent models,
            scalable software, edge computing, and practical
            engineering solutions.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.02,
              }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-10">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.role}-${experience.company}`}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="text-purple-400 font-medium mt-1">
                    {experience.company}
                  </p>
                </div>

                <p className="text-slate-400">
                  {experience.period}
                </p>
              </div>

              <ul className="space-y-3 text-slate-300">
                {experience.responsibilities.map(
                  (responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 hover:-translate-y-2 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
              >
                View GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Education</h2>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">
                Master of Science in Computer Engineering
              </h3>

              <p className="text-purple-400 mt-2">
                California State University, Northridge
              </p>

              <p className="text-slate-300 mt-3">
                GPA: 3.58 / 4.00
              </p>
            </div>

            <p className="text-slate-400">
              January 2024 – May 2026
            </p>
          </div>

          <p className="text-slate-300 mt-6 leading-relaxed">
            <span className="font-semibold text-white">
              Relevant coursework:
            </span>{" "}
            Computer Systems Architecture, SoC Design, Biomedical
            Engineering Models, Verilog/SystemVerilog, and ASIC
            Development.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="bg-gradient-to-r from-purple-900 to-slate-900 rounded-2xl p-8 border border-purple-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Let’s Work Together
          </h2>

          <p className="text-slate-300 mb-8">
            I’m actively exploring AI/ML Engineering, Software
            Engineering, Computer Vision, Quality Engineering, and
            related technology opportunities. Feel free to connect
            with me.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:khanaslam0604@gmail.com?subject=Portfolio%20Contact"
              className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/aslam-khan-mohammed-535a6b290"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Mark180665"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              GitHub
            </a>

            <a
              href="/Aslam_Khan_Mohammed_Resume.pdf"
              download
              className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="mt-6 space-y-2 text-slate-400">
          <p>
            Email:{" "}
            <a
              href="mailto:khanaslam0604@gmail.com"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              khanaslam0604@gmail.com
            </a>
          </p>

          <p>Location: Stevenson Ranch, California, USA</p>
        </div>
      </section>

      <footer className="border-t border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-slate-400">
          © 2026 Aslam Khan Mohammed
        </div>
      </footer>
    </div>
  )
}

export default App
