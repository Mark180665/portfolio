import { motion } from "framer-motion"

function App() {
  const projects = [
    {
      title: "NotebookLM Clone",
      description:
        "AI-powered document assistant with PDF upload, RAG chat, FAISS search, and podcast generation.",
      tech: ["React", "FastAPI", "FAISS", "Groq", "Ollama"],
      github: "https://github.com/codeyme/ai-study-notebook",
    },
    {
      title: "RiskWise AI",
      description:
        "Machine learning application for defect and risk prediction using Random Forest models.",
      tech: ["Python", "FastAPI", "SQLite", "Docker"],
      github: "https://github.com/codeyme/riskwise-project",
    },
    {
      title: "ANN Churn Prediction",
      description:
        "Deep learning project to predict customer churn using Artificial Neural Networks.",
      tech: ["TensorFlow", "Keras", "Streamlit"],
      github: "https://github.com/codeyme/ANN-classification-Churn",
    },
    {
      title: "AWS Skill Builder Labs",
      description:
        "Hands-on AWS learning repository focused on cloud fundamentals and S3-based lab practice.",
      tech: ["AWS", "S3", "Python", "HTML"],
      github: "https://github.com/codeyme/aws-skill-builder-labs",
    },
    {
      title: "AI Study Notebook",
      description:
        "Full-stack AI-powered study assistant with PDF upload, semantic search, RAG-based Q&A, and AI-generated podcast summaries.",
      tech: [
        "React",
        "FastAPI",
        "FAISS",
        "Sentence Transformers",
        "Groq",
        "Ollama",
      ],
      github: "https://github.com/codeyme/ai-study-notebook",
    },
  ]

  const skills = [
    "Python",
    "Java",
    "SQL",
    "JavaScript",
    "React",
    "FastAPI",
    "Machine Learning",
    "TensorFlow",
    "Scikit-learn",
    "RAG",
    "OpenAI API",
    "AWS",
    "GCP",
    "Docker",
    "Kafka",
    "Spark",
    "Airflow",
    "Tailwind CSS",
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
            AI/ML & Cloud-Focused Software Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I’m{" "}
            <span className="text-purple-500">Prakriti Shakya</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            I build intelligent applications using Machine Learning,
            Full-Stack development, Data Engineering, and Cloud technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Shakya_Prakriti.pdf"
              download
              className="bg-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-500 hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/codeyme"
              target="_blank"
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
            alt="Prakriti Shakya"
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
            I am a Computer Science graduate student at California State
            University, Northridge with experience in data engineering,
            machine learning, cloud computing, and full-stack AI applications.
            I enjoy building practical systems that combine clean user
            interfaces, scalable backend services, and intelligent models.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 hover:-translate-y-2 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-slate-300 mb-5">{project.description}</p>

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
                className="inline-block bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
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
      I’m actively looking for Software Engineering,
      Machine Learning, Cloud, and Data Engineering opportunities.
      Feel free to connect with me.
    </p>

    <div className="flex flex-wrap gap-4">
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=prakritishakya1168@gmail.com&su=Portfolio%20Contact"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
>
  Email Me
</a>

  <a
    href="https://linkedin.com/in/prakriti-shakya"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/codeyme"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
  >
    GitHub
  </a>

  <a
    href="/Shakya_Prakriti.pdf"
    download
    className="border border-slate-400 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
  >
    Download Resume
  </a>
</div>
  </motion.div>
  <p className="text-slate-400 mt-6">
  Email:{" "}
  <a
    href="mailto:prakritishakya1168@gmail.com"
    className="text-purple-400 hover:text-purple-300 underline"
  >
    prakritishakya1168@gmail.com
  </a>
</p>
</section>


      <footer className="border-t border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-slate-400">
          © 2026 Prakriti Shakya
        </div>
      </footer>
    </div>
  )
}

export default App