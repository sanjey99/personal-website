const pinnedProjects = [
  {
    name: "Polymarket Arbitrage Bot",
    stack: "Python, Risk Engine, CLOB Integration, Telegram Controls",
    impact:
      "Built a paper-first, risk-controlled trading system with canary execution gates, telemetry, and command-based controls.",
    proof: "Technical depth: execution controls, kill-switches, telemetry pipeline.",
    link: "https://github.com/sanjey99/polymarket-arbitrage-bot",
  },
  {
    name: "PRISM (HacX 2025)",
    stack: "React, Node.js, Express, TypeScript, Socket.IO",
    impact:
      "Engineered a full-stack prison transport management system with real-time vehicle and inmate telemetry.",
    proof: "Award proof: 2nd place at HacX 2025 (HTX x Microsoft).",
    link: "https://github.com/sanjey99/PRISM-hacx",
  },
  {
    name: "HarvestChain",
    stack: "React, Tailwind, Vite, Flask, Python, MongoDB, XRPL, Solidity",
    impact:
      "Built a blockchain solution focused on fairer fish pricing and financial equity for fisherfolk.",
    proof: "Business/User impact: reduced volatility + middleman exploitation model.",
    link: "https://github.com/sanjey99/harvestchain",
  },
];

const experience = [
  {
    role: "Software Development Intern",
    org: "Rohde & Schwarz Asia",
    period: "May 2025 – Jul 2025",
    detail:
      "Built Python analytics pipelines (Pandas/NumPy) and improved system efficiency by 30% through statistical analysis and visualisation.",
  },
  {
    role: "Freelance Coding & Robotics Instructor",
    org: "Empire Code",
    period: "May 2024 – May 2025",
    detail:
      "Delivered coding/robotics lessons for classes up to 38 students and led project-based weekly training sessions.",
  },
  {
    role: "Financial Controller, Hall 10 TOP Main Comm",
    org: "NTU",
    period: "Sep 2025 – Present",
    detail:
      "Managed a $10,000 budget for a 200-participant orientation and enforced transparent tracking + reimbursement controls.",
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
            <a href="#now">Now</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="grid min-h-[88vh] place-items-center py-12">
          <div className="glass grid w-full max-w-6xl overflow-hidden rounded-3xl md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-200/80">
                Recruiter-focused Portfolio
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl" style={{ fontFamily: "Georgia, ui-serif, serif" }}>
                Building reliable systems
                <br />
                for real-world impact.
              </h1>
              <p className="mt-5 max-w-xl text-white/80 md:text-lg">
                NTU Computer Engineering undergraduate focused on quant-ready tooling,
                full-stack systems, and high-impact project execution.
              </p>

              <div className="mt-5 rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                Open to internships: <strong>May–Dec 2026</strong> and <strong>May–Jul 2027</strong>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <a className="rounded-lg border border-cyan-300/40 px-4 py-2 text-cyan-100 hover:bg-cyan-300/10" href="/Sanjey_Resume.pdf" target="_blank" rel="noreferrer">
                  View Resume
                </a>
                <a className="rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10" href="#projects">
                  View Projects
                </a>
              </div>
            </div>

            <div className="relative min-h-[320px] bg-gradient-to-br from-[#121a30] via-[#121a2b] to-[#211536] p-6">
              <div className="flex h-full items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-b from-[#111a31] to-[#0a1020] p-4">
                <div className="monolith-shell">
                  <div className="monolith-scan" />
                  <div className="absolute left-0 right-0 top-3 text-center font-mono text-[11px] text-cyan-200/80">
                    ORDER BOOK MONOLITH
                  </div>
                  <div className="order-layer top-[18%] bg-cyan-300/45" style={{ animationDelay: "0s" }} />
                  <div className="order-layer top-[24%] bg-cyan-300/35" style={{ animationDelay: "0.2s" }} />
                  <div className="order-layer top-[30%] bg-cyan-300/25" style={{ animationDelay: "0.35s" }} />
                  <div className="absolute left-[10%] right-[10%] top-[44%] h-[2px] bg-white/35" />
                  <div className="absolute left-[10%] right-[10%] top-[46%] text-center font-mono text-[11px] text-white/70">
                    discovery + execution discipline
                  </div>
                  <div className="order-layer top-[58%] bg-violet-300/25" style={{ animationDelay: "0.1s" }} />
                  <div className="order-layer top-[64%] bg-violet-300/35" style={{ animationDelay: "0.25s" }} />
                  <div className="order-layer top-[70%] bg-violet-300/45" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-14">
          <h2 className="mb-6 text-3xl font-semibold" style={{ fontFamily: "Georgia, ui-serif, serif" }}>Pinned Projects</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {pinnedProjects.map((p) => (
              <article key={p.name} className="glass rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/30">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-cyan-100/80">{p.stack}</p>
                <p className="mt-3 text-sm text-white/85">{p.impact}</p>
                <p className="mt-3 text-xs text-white/60">{p.proof}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-cyan-200 underline underline-offset-4">
                  View project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-14">
          <h2 className="mb-6 text-3xl font-semibold" style={{ fontFamily: "Georgia, ui-serif, serif" }}>Experience & Leadership</h2>
          <div className="space-y-4">
            {experience.map((e) => (
              <article key={e.role} className="glass rounded-2xl p-5">
                <p className="text-lg font-semibold">{e.role}</p>
                <p className="text-sm text-cyan-100/80">{e.org} · {e.period}</p>
                <p className="mt-2 text-sm text-white/85">{e.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-white/65">
            Relevant coursework: Data Structures, Software Engineering, Algorithms Analysis, Computer Networks, Statistics & Probability.
          </p>
        </section>

        <section id="now" className="py-14">
          <h2 className="mb-4 text-3xl font-semibold" style={{ fontFamily: "Georgia, ui-serif, serif" }}>Now</h2>
          <div className="glass rounded-2xl p-5 text-sm text-white/85">
            Building execution-safe trading tooling, refining portfolio systems, and preparing for high-impact internship opportunities.
          </div>
        </section>

        <section id="contact" className="py-14">
          <h2 className="mb-4 text-3xl font-semibold" style={{ fontFamily: "Georgia, ui-serif, serif" }}>Contact</h2>
          <div className="glass rounded-2xl p-5 text-sm text-white/85">
            <p>Email (NTU): sanjeyan001@e.ntu.edu.sg</p>
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
