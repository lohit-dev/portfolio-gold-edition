import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"

export const Route = createFileRoute("/")({ component: Home })

type Project = {
	idx: string
	name: React.ReactNode
	desc: string
	tags: Array<{ label: string; highlight?: boolean }>
	kicker?: string
	span?: "wide" | "tall"
	minHeight?: number
}

const PROJECTS: Array<Project> = [
	{
		idx: "001",
		name: "TravelID 2.0",
		desc: "Travel document verification on Polkadot. SHA-256 hashing of the document, on-chain Subxt remarks, wallet connect, and a QR verification flow. Led the Rust + Axum backend; co-built the wallet and verification frontend.",
		tags: [
			{ label: "3rd · $1,000 · Polkadot Hackathon", highlight: true },
			{ label: "Rust" },
			{ label: "Axum" },
			{ label: "Subxt" },
			{ label: "React" },
			{ label: "PostgreSQL" },
		],
		span: "wide",
		minHeight: 240,
	},
	{
		idx: "002",
		name: (
			<>
				Garden Watchers
				<br />
				&amp; Bots
			</>
		),
		desc: "Watcher services and monitoring bots that still run at Hashira. A Twitter bot that posts trade cards for any $10K+ swap, a Strava-to-Discord bridge for the team, and a TypeScript arbitrage bot. Three full rewrites in, still in production.",
		tags: [
			{ label: "Go" },
			{ label: "Rust" },
			{ label: "Python" },
			{ label: "TypeScript" },
		],
		kicker: "In production",
		span: "tall",
		minHeight: 500,
	},
	{
		idx: "003",
		name: "Garden Analyzer",
		desc: "MCP-integrated analytics over Garden.Finance's multi-chain data. Surfaces things like an 82% Q2-vs-Q1 volume drop, 304% new-user growth, and 98% Starknet outbound dominance — without anyone writing a SQL query.",
		tags: [{ label: "Go" }, { label: "Claude MCP" }, { label: "TypeScript" }],
		minHeight: 240,
	},
	{
		idx: "004",
		name: "Animax",
		desc: "React Native anime streaming app — browse, search, episode playback. Tuned API fetches and screen transitions so it stays snappy on a 4G phone with a weak signal.",
		tags: [
			{ label: "React Native" },
			{ label: "TypeScript" },
			{ label: "Tailwind" },
			{ label: "AniWatch API" },
		],
		span: "wide",
		minHeight: 200,
	},
]

const EXPERIENCE = [
	{
		role: "Software Associate — Go & Rust",
		period: "Dec 2024 — Apr 2026",
		company: "Hashira Works · hashira.io",
		desc: "Backend for Garden.Finance — watcher services, on-chain extraction pipelines, Spark and Lightning integrations in Rust. Built the Garden Analyzer MCP app and the monitoring bots the team checks every morning. Also own a chunk of the deployment scripts on our self-hosted Gitea.",
	},
	{
		role: "Backend Developer Intern",
		period: "Feb — Mar 2024",
		company: "Navodita Infotech",
		desc: "Multi-room real-time chat with Node, Express, and Socket.io. The Socket.io work here later carried over to features I built at Hashira. Letter of Recommendation.",
	},
	{
		role: "Web Developer Intern",
		period: "Mar — Apr 2024",
		company: "InternIQ",
		desc: "One-month internship building and optimizing features in their web app. Letter of Recommendation.",
	},
	{
		role: "Python Instructor (Part-time)",
		period: "May — Aug 2022",
		company: "NRI Institute of Technology",
		desc: "Taught Python to first-year students — file I/O, basic logic, small projects like a text-file analyzer and Rock-Paper-Scissors. First time I had to explain code to people who hadn't written any.",
	},
]

const SKILLS: Array<{ name: string; on?: boolean }> = [
	{ name: "Go", on: true },
	{ name: "Rust", on: true },
	{ name: "TypeScript", on: true },
	{ name: "Python" },
	{ name: "Node.js" },
	{ name: "Express" },
	{ name: "Axum" },
	{ name: "React" },
	{ name: "React Native" },
	{ name: "Tailwind" },
	{ name: "PostgreSQL" },
	{ name: "MongoDB" },
	{ name: "WebSockets" },
	{ name: "Socket.io" },
	{ name: "MCP" },
	{ name: "Docker" },
	{ name: "AWS" },
	{ name: "Gitea" },
]

const INTERESTS = [
	"Re:Zero",
	"No Game No Life",
	"Maid-sama",
	"light novels",
	"manga",
	"Resident Evil",
	"Neovim",
	"Japanese (learning)",
]

const SETUP: Array<[string, string]> = [
	["machine", "MacBook Pro M5"],
	["editor", "Neovim"],
	["terminal", "Ghostty"],
	["shell", "Fish + Zsh"],
	["before this", "Arch Linux, 6 mo"],
]

const RESUME_URL = "https://resume.lohit.xyz"

const SOCIALS: Array<{ label: string; href: string }> = [
	{ label: "GitHub", href: "https://github.com/lohit-dev" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/dinavahi-lohit-sai-192a382b1",
	},
	{ label: "Site", href: "https://lohit.xyz" },
	{ label: "Resume", href: RESUME_URL },
]

function useReveal<T extends HTMLElement>() {
	const ref = useRef<T | null>(null)
	useEffect(() => {
		const el = ref.current
		if (!el || typeof IntersectionObserver === "undefined") return
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible")
						io.unobserve(entry.target)
					}
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
		)
		io.observe(el)
		return () => io.disconnect()
	}, [])
	return ref
}

function prefersReducedMotion() {
	if (typeof window === "undefined") return false
	return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
}

function useInView<T extends HTMLElement>(
	options: IntersectionObserverInit = { threshold: 0.4 },
) {
	const ref = useRef<T | null>(null)
	const [inView, setInView] = useState(false)
	useEffect(() => {
		const el = ref.current
		if (!el || typeof IntersectionObserver === "undefined") {
			setInView(true)
			return
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setInView(true)
				io.disconnect()
			}
		}, options)
		io.observe(el)
		return () => io.disconnect()
	}, [options])
	return { ref, inView }
}

function useCounter(
	target: number,
	decimals: number,
	durationMs: number,
	active: boolean,
) {
	const [value, setValue] = useState(0)
	useEffect(() => {
		if (!active) return
		if (prefersReducedMotion()) {
			setValue(target)
			return
		}
		let raf = 0
		const start = performance.now()
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / durationMs)
			const eased = 1 - (1 - t) ** 3
			setValue(target * eased)
			if (t < 1) raf = requestAnimationFrame(tick)
		}
		raf = requestAnimationFrame(tick)
		return () => cancelAnimationFrame(raf)
	}, [target, durationMs, active])
	return decimals === 0 ? Math.round(value).toString() : value.toFixed(decimals)
}

function Stat({
	target,
	decimals = 0,
	prefix = "",
	suffix = "",
	label,
}: {
	target: number
	decimals?: number
	prefix?: string
	suffix?: string
	label: string
}) {
	const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 })
	const value = useCounter(target, decimals, 1400, inView)
	return (
		<div className="hb-stat" ref={ref}>
			<div className="hb-stat-n">
				{prefix}
				{value}
				{suffix}
			</div>
			<div className="hb-stat-l">{label}</div>
		</div>
	)
}

function Logo({
	size = "md",
	as: Tag = "span",
	className = "",
}: {
	size?: "sm" | "md" | "lg"
	as?: "span" | "a" | "div"
	className?: string
}) {
	const Component = Tag as React.ElementType
	return (
		<Component
			className={`logo logo-${size} ${className}`.trim()}
			aria-label="lohit."
		>
			<span aria-hidden="true">lohit</span>
			<span className="logo-dot" aria-hidden="true">
				.
			</span>
		</Component>
	)
}

function Reveal({
	as: Tag = "div",
	className = "",
	delay = 0,
	children,
	...rest
}: {
	as?: keyof React.JSX.IntrinsicElements
	className?: string
	delay?: number
	children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
	const ref = useReveal<HTMLElement>()
	const Component = Tag as React.ElementType
	return (
		<Component
			ref={ref}
			className={`reveal ${className}`.trim()}
			style={{ transitionDelay: `${delay}ms`, ...(rest.style ?? {}) }}
			{...rest}
		>
			{children}
		</Component>
	)
}

function useHeroParallax() {
	const ref = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		const el = ref.current
		if (!el) return
		if (prefersReducedMotion()) return
		let raf = 0
		const update = () => {
			raf = 0
			const y = window.scrollY
			if (y > window.innerHeight) return
			el.style.setProperty("--parallax", `${y * 0.12}px`)
		}
		const onScroll = () => {
			if (raf) return
			raf = requestAnimationFrame(update)
		}
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => {
			window.removeEventListener("scroll", onScroll)
			if (raf) cancelAnimationFrame(raf)
		}
	}, [])
	return ref
}

function onCardPointerMove(e: React.PointerEvent<HTMLElement>) {
	const card = e.currentTarget
	const rect = card.getBoundingClientRect()
	card.style.setProperty("--mx", `${e.clientX - rect.left}px`)
	card.style.setProperty("--my", `${e.clientY - rect.top}px`)
}

function Home() {
	const ghostRef = useHeroParallax()
	return (
		<div className="page" id="top">
			<nav className="nav">
				<div className="nav-pill">
					<a className="nav-brand" href="#top" aria-label="lohit. — home">
						<Logo size="sm" />
					</a>
					<a className="ni" href="#work">
						work
					</a>
					<a className="ni" href="#about">
						about
					</a>
					<a className="ni" href="#contact">
						contact
					</a>
					<div className="ns">
						<div className="nd" />
						<span className="nt">open to work</span>
					</div>
				</div>
			</nav>

			<section className="hero">
				<div className="hero-main">
					<div className="hero-ghost" aria-hidden="true" ref={ghostRef}>
						Lohith
					</div>

					<div className="hero-meta">
						<div className="hero-meta-l">
							<span className="hero-meta-mark">lohit.xyz</span>
							<span className="hero-meta-dot" aria-hidden="true" />
							<span className="hero-meta-dim">Portfolio · 2026</span>
						</div>
						<div className="hero-meta-r">
							<span className="hero-meta-dim">Status</span>
							<span className="hero-meta-mark">
								Open to SDE-1 backend roles
							</span>
						</div>
					</div>

					<div className="hero-center">
						<div className="hero-tag">
							<div className="hero-tag-line" />
							<span className="hero-tag-text">
								Fullstack &amp; Systems Developer · Vijayawada, India
							</span>
						</div>
						<h1 className="hero-name">
							Dinavahi
							<br />
							<em>Lohith Sai</em>
						</h1>
					</div>
				</div>
				<div className="hero-bottom">
					<div className="hb-left">
						<p className="hb-desc">
							Backend developer in <strong>Go, Rust and Typescript</strong>. Spent the last
							year and a half at Hashira Works on Garden.Finance's cross-chain
							infrastructure. B.Tech done, currently looking for an SDE-1 role —
							backend, systems, distributed services.
						</p>
						<div className="hb-actions">
							<a className="btn-s" href="#work">
								See the work
							</a>
							<a
								className="btn-g"
								href={RESUME_URL}
								target="_blank"
								rel="noreferrer"
							>
								Read résumé ↗
							</a>
						</div>
					</div>
					<div className="hb-right">
						<Stat target={1.5} decimals={1} suffix="+" label="yrs prod" />
						<Stat target={3} suffix="rd" label="hackathon" />
						<Stat target={2} label="play store" />
					</div>
				</div>
				<div className="scroll-cue" aria-hidden="true">
					<span className="sc-text">scroll</span>
					<div className="sc-line" />
				</div>
			</section>

			<div className="slabel" style={{ marginTop: 64 }} id="work">
				<span className="sl-n">01</span>
				<div className="sl-line" />
				<span className="sl-t">Selected Work</span>
			</div>
			<section className="work">
				<Reveal className="work-head">
					<h2 className="work-h">
						A few things
						<br />
						I've <em>built</em>
					</h2>
					<a
						className="work-all"
						href="https://github.com/lohit-dev"
						target="_blank"
						rel="noreferrer"
					>
						everything on github ↗
					</a>
				</Reveal>

				<div className="bento">
					{PROJECTS.map((p, i) => (
						<Reveal
							key={p.idx}
							as="article"
							delay={i * 80}
							className={`bc ${p.span === "wide" ? "bc-wide" : ""} ${
								p.span === "tall" ? "bc-tall" : ""
							}`.trim()}
							style={p.minHeight ? { minHeight: p.minHeight } : undefined}
							onPointerMove={onCardPointerMove}
						>
							<div className="bc-num" aria-hidden="true">
								{Number.parseInt(p.idx, 10)}
							</div>
							<div className="bc-top">
								<span className="bc-idx">{p.idx}</span>
								<span className="bc-arrow">↗</span>
							</div>
							<div className="bc-body">
								{p.kicker ? <div className="bc-kicker">{p.kicker}</div> : null}
								<div className="bc-name">{p.name}</div>
								<div className="bc-desc">{p.desc}</div>
								<div className="bc-tags">
									{p.tags.map((t) => (
										<span
											key={t.label}
											className={`bt ${t.highlight ? "bt-hi" : ""}`.trim()}
										>
											{t.label}
										</span>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			<div className="slabel">
				<span className="sl-n">02</span>
				<div className="sl-line" />
				<span className="sl-t">Experience</span>
			</div>
			<section className="exp">
				<Reveal className="exp-l">
					<h2 className="exp-lh">
						Where I've
						<br />
						been <em>working</em>
					</h2>
					<p className="exp-lb">
						A year and a half of backend work, mostly at Hashira on
						Garden.Finance. Watcher services, on-chain extraction pipelines,
						Lightning and Spark integrations in Rust, an MCP analytics app, and
						the bots the team still checks every morning. Wrapped that chapter
						in April 2026 — open to what's next.
					</p>
					<div className="skills">
						{SKILLS.map((s, i) => (
							<span
								key={s.name}
								className={`sk ${s.on ? "on" : ""}`.trim()}
								style={{ animationDelay: `${i * 35}ms` }}
							>
								{s.name}
							</span>
						))}
					</div>
				</Reveal>
				<Reveal className="exp-r" delay={120}>
					{EXPERIENCE.map((e) => (
						<div className="ej" key={`${e.company}-${e.period}`}>
							<div className="ej-top">
								<span className="ej-role">{e.role}</span>
								<span className="ej-per">{e.period}</span>
							</div>
							<div className="ej-co">{e.company}</div>
							<div className="ej-d">{e.desc}</div>
						</div>
					))}
				</Reveal>
			</section>

			<div className="slabel" id="about">
				<span className="sl-n">03</span>
				<div className="sl-line" />
				<span className="sl-t">About</span>
			</div>
			<section className="about">
				<div className="about-inner">
					<Reveal className="about-l">
						<div className="about-pull">
							Started with Java in college.
							<br />
							Got paid to write <em>Rust.</em>
						</div>
						<div className="about-body">
							<p>
								I'm Lohith, based in Vijayawada. B.Tech in Computer Science
								& Data Science from NRI Institute of Technology, finished in
								2026 — Google Developers Club member, first place in our
								SQL-app competition somewhere along the way.
							</p>
							<p>
								Most of my work is backend. Go and Rust for production stuff,
								Node when the team needs it. On the side I've shipped two
								React Native apps to the Play Store and a stack of automation
								bots that I keep telling myself I'll consolidate one day.
							</p>
							<p>
								Ran Arch for six months before switching to an M5 Mac. RE2
								Remake was the first game I bought with my own money.
								Currently between jobs, re-watching Re:Zero, and reading more
								light novels than I should.
							</p>
						</div>
					</Reveal>
					<Reveal className="about-r" delay={120}>
						<div className="acard">
							<div className="acard-l">current setup</div>
							{SETUP.map(([k, v]) => (
								<div className="srow" key={k}>
									<span className="sk2">{k}</span>
									<span className="sv">{v}</span>
								</div>
							))}
						</div>
						<div className="acard">
							<div className="acard-l">off the clock</div>
							<div className="ints">
								{INTERESTS.map((i) => (
									<span className="int" key={i}>
										{i}
									</span>
								))}
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<div className="slabel" id="contact">
				<span className="sl-n">04</span>
				<div className="sl-line" />
				<span className="sl-t">Contact</span>
			</div>
			<section className="contact">
				<Reveal className="cbox">
					<div className="cbox-l">
						<div className="c-lede">get in touch</div>
						<h2 className="c-h">
							Currently looking for
							<br />
							<em>my next role.</em>
						</h2>
						<div className="c-sub">
							SDE-1 backend, systems, distributed services. Based in Vijayawada
							(IST), open to relocating. Email is the fastest way to reach me.
						</div>
					</div>
					<div className="cbox-r">
						<a className="c-btn" href="mailto:lohitsaidev@gmail.com">
							lohitsaidev@gmail.com ↗
						</a>
						<div className="c-links">
							{SOCIALS.map((s) => (
								<a
									key={s.label}
									className="c-lnk"
									href={s.href}
									target="_blank"
									rel="noreferrer"
								>
									<span>{s.label}</span>
									<span aria-hidden="true">↗</span>
								</a>
							))}
						</div>
					</div>
				</Reveal>
			</section>

			<footer className="footer">
				<div className="footer-l">
					<Logo size="md" />
					<span className="footer-meta">
						© 2026 · Dinavahi Lohith Sai · Vijayawada, IN
					</span>
				</div>
				<span className="fr">TanStack Start · Bun · Tailwind</span>
			</footer>
		</div>
	)
}
