import { motion } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i=0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } })
}

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-5xl mx-auto px-4 py-24 md:py-32">
    <motion.h2
      className="text-2xl md:text-3xl font-semibold mb-6 gradient-text"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {title}
    </motion.h2>
    {children}
  </section>
)

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      {/* subtle radial spotlight */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_at_50%_0%,rgba(120,120,120,0.25),transparent_60%)]"></div>

      <Nav />

      {/* HERO */}
      <header id="home" className="max-w-5xl mx-auto px-4 pt-36 pb-24 md:pt-44 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm tracking-widest text-neutral-400">SOFTWARE ENGINEER</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold gradient-text">
            Demario Asquitt
          </h1>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Building delightful, scalable products with AI, distributed systems, and strong product taste.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="px-5 py-2 rounded-xl bg-white text-black hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-xl border border-white/30 hover:bg-white/10 transition">Contact</a>
          </div>
        </motion.div>
      </header>

      {/* ABOUT */}
      <Section id="about" title="About">
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <Card>
              <p className="text-neutral-300 leading-relaxed">
                I'm a software engineer with experience across Bank of America, Apple, Splunk, DoD, and startups.
                I focus on building secure, scalable systems and refined user experiences. I love working on AI chatbots,
                platform tooling, and performance-sensitive services.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card>
              <ul className="text-neutral-300 space-y-2">
                <li>• Distributed systems, APIs, Kubernetes, OAuth</li>
                <li>• Python, Java, C++, React, Kotlin</li>
                <li>• Framer Motion, Tailwind, Vercel</li>
                <li>• Research: Multilingual Sentiment Analysis (NEDSI winner)</li>
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {[
            {
              role: "Software Engineer – Bank of America",
              time: "Jan 2023 – Mar 2025, New York, NY",
              bullets: [
                "Built secure dashboards and APIs for $23.7B activity platform (Python, Java, AMPS, Cassandra).",
                "Containerized and orchestrated services with Docker/Kubernetes (–30% deployment time).",
                "Led impact analysis across 17k LOC migration for risk/collateral systems."
              ]
            },
            {
              role: "Engineering PM Intern – Apple",
              time: "May 2022 – Aug 2022, Cupertino, CA",
              bullets: [
                "Automated bug workflows (JS, Bash) cutting processing time by 84%.",
                "Developed AI/ML experiences showcased at WWDC22."
              ]
            },
            {
              role: "Undergraduate Research Fellow – DoD",
              time: "May 2021 – Dec 2022, Washington, D.C.",
              bullets: [
                "Applied NLP for threat prediction with Multilingual Sentiment Analysis.",
                "Won First Place at NEDSI 2022."
              ]
            },
            {
              role: "Software Engineer Intern – Splunk",
              time: "May 2021 – Aug 2021, San Jose, CA",
              bullets: [
                "Implemented HA for dockerized proxy (C++, Kubernetes), reducing downtime by 97%."
              ]
            },
            {
              role: "Software Engineer – DAFE Solutions (Startup)",
              time: "2024 – Present",
              bullets: [
                "Building AI chatbots for school websites and internal tooling."
              ]
            }
          ].map((item, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <Card>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-neutral-400">{item.time}</p>
                  </div>
                  <ul className="mt-2 md:mt-0 text-neutral-300 list-disc pl-5 space-y-1">
                    {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { name: "UDP Data Sequencer", desc: "Reorders and streams UDP packets in sequence with loss handling.", link: "#" },
            { name: "Gossip Consensus", desc: "Peer-to-peer largest-integer consensus across a fully-connected graph.", link: "#" },
            { name: "Calendar Consolidator", desc: "Merges overlapping time slots to produce a busy-view schedule.", link: "#" },
            { name: "Candy Crush Engine", desc: "1D chain reaction matcher with iterative crush evaluation.", link: "#" },
            { name: "AI Chatbots", desc: "Conversational agents for school websites; retrieval + orchestration.", link: "#" },
            { name: "Alien Sort", desc: "Sorts strings by a custom alphabet order with stability.", link: "#" },
          ].map((p, i) => (
            <motion.a key={i} href={p.link} variants={fadeUp}>
              <Card className="h-full hover:translate-y-[-2px] transition">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-2 text-neutral-300 text-sm">{p.desc}</p>
                <div className="mt-4 text-sm underline underline-offset-4">View</div>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </Section>

      {/* CONTACT / RESUME */}
      <Section id="contact" title="Contact & Resume">
        <Card>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-neutral-300">Open to roles in product engineering, infra, and AI/ML.</p>
              <p className="text-neutral-400 text-sm mt-1">Email: <a className="underline" href="mailto:demario@example.com">demario@example.com</a></p>
              <p className="text-neutral-400 text-sm">GitHub: <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">github.com/your-handle</a></p>
            </div>
            <div className="flex gap-3">
              <a href="/resume.pdf" className="px-5 py-2 rounded-xl bg-white text-black hover:opacity-90 transition">Download Resume</a>
              <a href="#home" className="px-5 py-2 rounded-xl border border-white/30 hover:bg-white/10 transition">Back to Top</a>
            </div>
          </div>
        </Card>
      </Section>

      <footer className="py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Demario Asquitt. Built with React, Vite, Tailwind, and Framer Motion.
      </footer>
    </div>
  )
}
