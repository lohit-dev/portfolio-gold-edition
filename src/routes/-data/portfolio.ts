type Project = {
	idx: string
	nameLines: string[]
	desc: string
	tags: Array<{ label: string; highlight?: boolean }>
	/** Opens in a new tab when the whole card is clickable */
	href?: string
	kicker?: string
	span?: "wide" | "tall"
	minHeight?: number
}

type ExperienceEntry = {
	role: string
	period: string
	company: string
	desc: string
}

type SkillChip = { name: string; highlight?: boolean }

export const RESUME_URL = "https://resume.lohit.xyz"

/** Canonical site origin */
export const SITE_ORIGIN = "https://lohit.xyz"

export const GITHUB_URL = "https://github.com/lohit-dev"

/** Polkadot hackathon monorepo) */
export const TRAVELID_HACKATHON_REPO_URL = "https://github.com/lohit-dev/hackathon"

export const PROJECTS: Project[] = [
	{
		idx: "001",
		nameLines: ["TravelID 2.0"],
		desc: "Decentralized travel-document verification on Polkadot: cryptographic proof without exposing passports, licenses, or national IDs to verifiers or the chain—only hashes. Users upload in the React app; the Rust (Axum) service hashes documents (SHA-256), persists metadata with SQLx/PostgreSQL, and writes hashes on-chain via Subxt as system remarks. Anyone can verify by comparing a document’s hash to the recorded remark; QR codes and links share proof. Polkadot.js / Talisman wallet integration, shadcn/ui, TanStack Query, Zustand, Vite. Third place ($1,000) at the Polkadot Hackathon — opens the monorepo (backend + frontend submodules).",
		tags: [
			{ label: "3rd · $1,000 · Polkadot Hackathon", highlight: true },
			{ label: "Rust · Axum · Subxt · SQLx · Tokio" },
			{ label: "React · TS · Vite · Polkadot.js" },
			{ label: "PostgreSQL · shadcn · TanStack Query" },
		],
		href: TRAVELID_HACKATHON_REPO_URL,
		span: "wide",
	},
	{
		idx: "002",
		nameLines: ["Garden Watchers", "& Bots"],
		desc: "Watcher services and monitoring bots that still run at Hashira. A Twitter bot that posts trade cards for any $10K+ swap, a Strava-to-Discord bridge for the team, and a TypeScript arbitrage bot. Three full rewrites in, still in production.",
		tags: [
			{ label: "Go" },
			{ label: "Rust" },
			{ label: "Python" },
			{ label: "TypeScript" },
		],
		kicker: "In production",
		span: "tall",
	},
	{
		idx: "003",
		nameLines: ["Garden Analyzer"],
		desc: "MCP-integrated analytics over Garden.Finance's multi-chain data. Surfaces things like an 82% Q2-vs-Q1 volume drop, 304% new-user growth, and 98% Starknet outbound dominance — without anyone writing a SQL query.",
		tags: [{ label: "Go" }, { label: "Claude MCP" }, { label: "TypeScript" }],
	},
	{
		idx: "004",
		nameLines: ["Animax"],
		desc: "React Native anime streaming app — browse, search, episode playback. Tuned API fetches and screen transitions so it stays snappy on a 4G phone with a weak signal.",
		tags: [
			{ label: "React Native" },
			{ label: "TypeScript" },
			{ label: "Tailwind" },
			{ label: "AniWatch API" },
		],
		span: "wide",
	},
]

export const EXPERIENCE: ExperienceEntry[] = [
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

export const SKILLS: SkillChip[] = [
	{ name: "Go", highlight: true },
	{ name: "Rust", highlight: true },
	{ name: "TypeScript", highlight: true },
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

export const INTERESTS = [
	"Watching anime 📺",
	"Reading manga 📚",
	"Sleep (a lot) 😴",
	"PC games 🎮",
	"Vim keybindings ✌️",
	"Music all day 🎧",
	"Reading (rare) 📖",
	"Phone 📱",
]

export const SETUP: Array<[string, string]> = [
	["machine", "MacBook Pro M5"],
	["editor", "Neovim"],
	["terminal", "Ghostty"],
	["shell", "Fish + Zsh"],
	["before this", "Arch Linux, 6 mo"],
]

export const SOCIALS: Array<{ label: string; href: string }> = [
	{ label: "GitHub", href: GITHUB_URL },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/dinavahi-lohit-sai-192a382b1",
	},
	{ label: "Site", href: `${SITE_ORIGIN}/` },
	{ label: "Resume", href: RESUME_URL },
]
