const projects = [
  {
    name: "Polymarket Arbitrage Bot",
    stack: "Python, Risk Engine, CLOB Integration, Telegram Controls",
    impact:
      "Built a paper-first, risk-controlled trading system with canary execution gates, telemetry, and command-based controls.",
    metric: "Live canary + control bot",
    tag: "Trading Systems",
    link: "https://github.com/sanjey99/polymarket-arbitrage-bot",
  },
  {
    name: "HarvestChain",
    stack: "React, Tailwind, Vite, Flask, Python, MongoDB, XRPL, Solidity",
    impact:
      "Global 5th at APRU x Google Tech Policy Hackathon 2025; built SSI-enabled blockchain flow for fairer fish price locking.",
    metric: "Global 5th (APRU x Google)",
    tag: "Hackathon",
    link: "https://github.com/sanjey99/harvestchain",
  },
  {
    name: "PRISM (HacX 2025)",
    stack: "React, Node.js, Express, TypeScript, Socket.IO",
    impact:
      "2nd place at HacX 2025 (HTX x Microsoft); real-time prison transport management with telemetry and audit logging.",
    metric: "2nd place @ HacX 2025",
    tag: "GovTech / IoT",
    link: "https://github.com/sanjey99/PRISM-hacx",
  },
  {
    name: "Intern Analytics Project",
    stack: "Python, Pandas, NumPy, Excel",
    impact:
      "Built internship analytics pipelines and workflow visualizations, contributing to a 30% systems-efficiency improvement.",
    metric: "30% efficiency improvement",
    tag: "Internship",
    link: "",
  },
  {
    name: "WorldQuant Championship 2025",
    stack: "Alpha Modelling, Backtesting",
    impact:
      "Top 20% + Gold Award globally with 10,000 points; optimized alpha signals with decay, neutralization, and risk controls.",
    metric: "Top 20% + Gold",
    tag: "Quant",
    link: "",
  },
  {
    name: "HomeCast",
    stack: "Software Engineering Project, Web Platform, API Integration",
    impact:
      "Built a real-estate style platform that pulls property and amenity APIs to support broker-like discovery and filtering.",
    metric: "API-driven property discovery",
    tag: "Software Engineering",
    link: "",
  },
  {
    name: "QAI Ventures Quantum Hackathon",
    stack: "Quantum Hackathon Build",
    impact:
      "Built and submitted a project for the QAI Ventures Quantum Hackathon as part of rapid prototyping and emerging-tech exploration.",
    metric: "Hackathon participation",
    tag: "Quantum",
    link: "https://github.com/sanjey99/quantum_hackathon",
  },
];

const experience = [
  {
    role: "Software Development Intern",
    org: "Rohde & Schwarz Asia",
    period: "May 2025 – Jul 2025",
    detail:
      "Built Python analytics pipelines with Pandas/NumPy and improved systems efficiency by 30% with statistical analysis + visualization.",
  },
  {
    role: "Freelance Coding & Robotics Instructor",
    org: "Empire Code",
    period: "May 2024 – May 2025",
    detail:
      "Delivered coding lessons to classes up to 38 students and ran weekly robotics sessions through project-based learning.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06080dcc] backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <p className="font-semibold tracking-tight">Sanjey | Computer Engineering @ NTU</p>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="grid min-h-[88vh] place-items-center py-12">
          <div className="glass grid w-full max-w-6xl overflow-hidden rounded-3xl md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-200/80">
                Computer Engineering @ NTU
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Builds that ship.
                <br />
                Signal that compounds.
              </h1>
              <p className="mt-5 max-w-xl text-white/80 md:text-lg">
                I build quant-ready systems, automation workflows, and full-stack
                products with measurable outcomes.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-xs text-cyan-100">
                {[
                  "Quant Systems",
                  "Backend",
                  "Automation",
                  "Data",
                  "Product Delivery",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-cyan-300/30 px-3 py-1"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] bg-gradient-to-br from-[#121a30] via-[#121a2b] to-[#211536] p-6">
              <div className="h-full rounded-2xl border border-white/20 bg-gradient-to-b from-[#111a31] to-[#0a1020] p-4">
                <p className="mb-4 font-mono text-xs text-cyan-200/80">
                  /portfolio/scene
                </p>
                <div className="grid h-[85%] place-items-center rounded-xl border border-white/10 bg-gradient-to-b from-[#1a2c53] via-[#375f92] to-[#9dd5ff] text-xs text-white/90">
                  Apple-style cinematic scroll scene
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-14">
          <h2 className="mb-6 text-3xl font-semibold">Featured Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className="glass rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.2)]"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-cyan-300/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan-100/90">
                    {p.tag}
                  </span>
                  <span className="text-[11px] text-white/60">{p.metric}</span>
                </div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-cyan-100/80">{p.stack}</p>
                <p className="mt-3 text-sm text-white/85">{p.impact}</p>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-cyan-200 underline underline-offset-4"
                  >
                    View project
                  </a>
                ) : (
                  <p className="mt-4 text-xs text-white/50">Link available on request</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-14">
          <h2 className="mb-6 text-3xl font-semibold">Experience</h2>
          <div className="space-y-4">
            {experience.map((e) => (
              <article key={e.role} className="glass rounded-2xl p-5">
                <p className="text-lg font-semibold">{e.role}</p>
                <p className="text-sm text-cyan-100/80">
                  {e.org} · {e.period}
                </p>
                <p className="mt-2 text-sm text-white/85">{e.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-14">
          <h2 className="mb-4 text-3xl font-semibold">Contact</h2>
          <div className="glass rounded-2xl p-5 text-sm text-white/85">
            <p>Email: sanjeychrysh@gmail.com</p>
            <p>GitHub: github.com/sanjey99</p>
            <p>LinkedIn: linkedin.com/in/sanjey99</p>
            <p>Location: Singapore</p>
          </div>
        </section>
      </main>
    </div>
  );
}
