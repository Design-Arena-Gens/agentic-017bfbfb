"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Sparkle, Layers, Orbit, ArrowUpRight, Youtube, Github } from "lucide-react";

const HeroStage = dynamic(() => import("@/components/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="h-[28rem] w-full animate-pulse rounded-3xl bg-slate-900/40" />
  ),
});

const projects = [
  {
    title: "Lumen Atelier",
    description:
      "Immersive brand world for a lighting collective featuring volumetric gradients, seamless 3D product reveals, and responsive storytelling.",
    disciplines: ["3D Art Direction", "Creative Coding", "UX Strategy"],
    year: "2024",
    palette: "from-cyan-400/90 via-sky-500/80 to-emerald-300/90",
    accent: "border-cyan-300/60",
  },
  {
    title: "Midnight Bloom",
    description:
      "Interactive editorial that layers choreography, motion graphics, and generative botanicals to narrate a fragrance launch event.",
    disciplines: ["Motion Design", "Experiential", "Sound Reactive"],
    year: "2023",
    palette: "from-fuchsia-400/90 via-indigo-500/80 to-slate-900/90",
    accent: "border-fuchsia-300/60",
  },
  {
    title: "Atlas Parade",
    description:
      "Digital-first exhibition identity where physical sculptures are captured as high-fidelity WebGL artifacts with adaptive lighting modes.",
    disciplines: ["3D Capture", "Interactive Installations", "Brand Systems"],
    year: "2024",
    palette: "from-amber-300/90 via-rose-400/85 to-sky-500/80",
    accent: "border-amber-200/60",
  },
] as const;

const expertise = [
  {
    icon: Palette,
    name: "Immersive Art Direction",
    copy: "Synthesizing color, typography, and spatial composition across screens, stages, and installations.",
  },
  {
    icon: Orbit,
    name: "Realtime 3D & WebGL",
    copy: "Crafting performant 3D experiences that feel fluid, tactile, and grounded in narrative intention.",
  },
  {
    icon: Layers,
    name: "Design Systems",
    copy: "Building adaptable systems that hold together brand universes from prototype to flagship launch.",
  },
  {
    icon: Sparkle,
    name: "Motion Language",
    copy: "Composing kinetic rituals and transitions that elevate usability while showcasing craft.",
  },
] as const;

const process = [
  {
    title: "Signal Scouting",
    description:
      "Immersive workshops to uncover emotional cues, audience rituals, and multisensory references that shape direction.",
  },
  {
    title: "Spatial Storyboarding",
    description:
      "Prototype spatial narratives in realtime — blending motion, materiality, and interactivity before production kicks off.",
  },
  {
    title: "Realtime Refinement",
    description:
      "Iterative cycles that merge design intent with engineering, ensuring delight translates from pitch to pixel.",
  },
  {
    title: "Launch Stewardship",
    description:
      "Creative oversight through deployment with playbooks for content refreshes, experiential rollouts, and evolution.",
  },
] as const;

const socialLinks = [
  { label: "Behance Reel", href: "https://behance.net/", icon: ArrowUpRight },
  { label: "Process Journal", href: "https://dribbble.com/", icon: ArrowUpRight },
  { label: "Github Experiments", href: "https://github.com/", icon: Github },
  { label: "Vimeo Archive", href: "https://vimeo.com/", icon: Youtube },
] as const;

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 md:pt-24 lg:gap-28 lg:px-12">
      <header className="relative flex flex-col items-start gap-14 lg:flex-row lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 flex-col gap-8"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-slate-700/60 bg-slate-900/50 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-300">
            Nova Vega · Visual Designer
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl xl:text-7xl">
              Elevating brands into cinematic, responsive worlds rooted in story, sensation, and craft.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
              Nova conjures multisensory identities for future-facing brands — harmonizing 3D environments, motion systems, and human-centered interactions across digital and physical touchpoints.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="mailto:hello@novavega.studio"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-900 transition hover:bg-white"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="#showreel"
              className="inline-flex items-center gap-3 rounded-full border border-slate-100/30 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-200 transition hover:border-slate-100/60 hover:text-white"
            >
              Watch showreel
            </Link>
          </div>
          <dl className="grid gap-6 pt-10 text-sm uppercase tracking-[0.3em] text-slate-400 sm:grid-cols-3">
            <div>
              <dd className="text-3xl font-semibold text-slate-100">38</dd>
              <dt className="mt-2 text-xs text-slate-400">Experiential Launches</dt>
            </div>
            <div>
              <dd className="text-3xl font-semibold text-slate-100">5</dd>
              <dt className="mt-2 text-xs text-slate-400">Continents Activated</dt>
            </div>
            <div>
              <dd className="text-3xl font-semibold text-slate-100">12</dd>
              <dt className="mt-2 text-xs text-slate-400">Awards & Features</dt>
            </div>
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-xl flex-1">
            <HeroStage />
          </div>
        </motion.div>
      </header>

      <section id="showreel" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-10 text-slate-200 shadow-[0_40px_120px_rgba(15,23,42,0.65)]"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Signature projects engineered for resonance.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300/85">
            Designing for dimensionality means inviting audiences to feel. Nova&apos;s collaborations stretch across immersive retail, experiential product launches, spatial UI, and speculative AR.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            <span className="rounded-full border border-slate-600/50 px-4 py-2">WebGL</span>
            <span className="rounded-full border border-slate-600/50 px-4 py-2">Motion Systems</span>
            <span className="rounded-full border border-slate-600/50 px-4 py-2">Spatial UI</span>
            <span className="rounded-full border border-slate-600/50 px-4 py-2">Experiential</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-panel flex flex-col justify-between gap-6 rounded-3xl p-10 text-slate-200"
        >
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.28em] text-slate-400">
            <span>Recent collaborator highlights</span>
            <span>— 2024</span>
          </div>
          <ul className="space-y-4 text-base leading-relaxed">
            <li>
              <span className="text-slate-400">Adidas /// </span> Metaverse Capsule Launch
            </li>
            <li>
              <span className="text-slate-400">MoMA /// </span> Sonic Light Residency
            </li>
            <li>
              <span className="text-slate-400">IKEA Space Lab /// </span> Immersive Studio Portal
            </li>
            <li>
              <span className="text-slate-400">NASA /// </span> Astral Habitat VR Showcase
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 transition hover:border-slate-200/80 hover:text-white"
              >
                {item.label}
                <item.icon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="grid gap-10 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
            className="group flex flex-col gap-6 rounded-3xl border border-slate-800/40 bg-slate-900/30 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.35)] transition hover:-translate-y-1 hover:border-slate-400/30 hover:bg-slate-900/60"
          >
            <div className={`relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br ${project.palette}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,23,42,0.3),transparent_55%)]" />
              <div className="absolute inset-0 mix-blend-screen opacity-70 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="h-24 w-24 rounded-full border-4 border-white/80"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute h-32 w-32 rounded-full border border-white/40"
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>{project.year}</span>
                <span>— Immersive Suite</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300/90">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.disciplines.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border ${project.accent} bg-slate-900/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-200`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="mailto:hello@novavega.studio"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-300 transition group-hover:text-white"
            >
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </motion.article>
        ))}
      </section>

      <section className="grid gap-10 rounded-3xl border border-slate-800/40 bg-slate-900/30 p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Disciplines tuned for experiential design.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-300/90">
            From XR prototypes to launch films, Nova designs cohesive journeys. Each engagement is grounded in research, prototyped in realtime, and delivered with cinematic precision.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-6 transition hover:border-slate-400/40 hover:bg-slate-900/60"
              >
                <item.icon className="mb-4 h-6 w-6 text-slate-200" />
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">{item.copy}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="flex flex-col justify-between gap-10 rounded-3xl border border-slate-800/40 bg-gradient-to-br from-white/5 via-slate-900/60 to-slate-950/80 p-8 text-slate-200"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Recognitions</span>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <span className="font-semibold text-white">Awwwards</span> Site of the Day · 2× Winner
              </li>
              <li>
                <span className="font-semibold text-white">Red Dot</span> Product Design · 2023
              </li>
              <li>
                <span className="font-semibold text-white">SXSW</span> Immersive Finalist · 2024
              </li>
              <li>
                <span className="font-semibold text-white">FWA</span> Cutting Edge Award · 4× Winner
              </li>
            </ul>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Select Press</span>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <span className="text-slate-300">It&apos;s Nice That</span> — Immersive identity for Atlas Parade
              </li>
              <li>
                <span className="text-slate-300">DesignBoom</span> — Spatial design for NASA showcase
              </li>
              <li>
                <span className="text-slate-300">Creative Review</span> — AR ritual for Lumen Atelier
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-slate-800/50 bg-slate-900/30 p-10 lg:grid-cols-4 lg:gap-8 lg:p-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="lg:col-span-1"
        >
          <h2 className="text-3xl font-semibold text-white">Process anchored in collaboration.</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
            Each phase invites technical and creative partners into the room, ensuring the work feels distinctive while landing on time.
          </p>
        </motion.div>
        <div className="lg:col-span-3">
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/85">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="flex flex-col gap-10 rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-950/70 via-slate-900/80 to-slate-950/90 p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-slate-500">Let&apos;s shape what&apos;s next</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to translate your vision into a responsive, immersive story?
          </h2>
          <p className="text-sm leading-relaxed text-slate-300/85">
            Nova partners with founders, creative directors, and product teams to build design systems that move. Share your brief for access to schedule, estimates, and bespoke concept sessions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em]"
        >
          <Link
            href="mailto:hello@novavega.studio"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            hello@novavega.studio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://cal.com/"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-slate-100/40 px-6 py-3 text-xs font-semibold text-slate-200 transition hover:border-white hover:text-white"
          >
            Book discovery call
          </Link>
          <div className="text-xs uppercase tracking-[0.4em] text-slate-500">
            Currently booking <span className="text-white">April · 2025</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
