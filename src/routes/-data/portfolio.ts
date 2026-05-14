type Project = {
	idx: string;
	nameLines: string[];
	desc: string;
	tags: Array<{ label: string; highlight?: boolean }>;
	/** Opens in a new tab when the whole card is clickable */
	href?: string;
	span?: "wide" | "tall";
	minHeight?: number;
};

type ExperienceEntry = {
	role: string;
	period: string;
	company: string;
	desc: string;
};

type SkillChip = { name: string; highlight?: boolean };

export const RESUME_URL = "https://resume.lohit.xyz";

/** Canonical site origin */
export const SITE_ORIGIN = "https://lohit.xyz";

export const GITHUB_URL = "https://github.com/lohit-dev";

/** Polkadot hackathon monorepo (code) */
export const TRAVELID_HACKATHON_REPO_URL =
	"https://github.com/lohit-dev/hackathon";

/** TravelID on Devpost — story, screenshots, demo links */
export const TRAVELID_DEVPOST_URL =
	"https://devpost.com/software/travelid-2-0-secure-travel-document-verification";

/** Live Twitter/X bot posting Garden.Finance trade cards for $10K+ swaps */
export const GARDEN_WATCHER_BOT_URL = "https://x.com/garden_watcher";

/** Animax React Native anime streaming app */
export const ANIMAX_REPO_URL = "https://github.com/lohit-dev/Animax-anitaku_V2";

/** Deployed Rust crypto API */
export const CATALOG_CRYPTO_API_REPO_URL =
	"https://github.com/lohit-dev/catalog-crypto-api";

/** Real-time Node.js chat app (Navodita internship project) */
export const CHAT_APP_REPO_URL =
	"https://github.com/lohit-dev/Backend-Node.js-Chat-App";

// Garden Analyzer is an internal Hashira project (private repo).
// Add href on that project if/when open-sourced.

export const PROJECTS: Project[] = [
	{
		idx: "001",
		nameLines: ["TravelID 2.0"],
		desc: "Polkadot hackathon build (3rd · $1k): SHA-256 doc hashes anchored on-chain via Subxt system remarks—Rust Axum + SQLx/PostgreSQL; verifiers compare hashes only (QR/links, no raw passport blob). React, Polkadot.js / Talisman, shadcn, TanStack Query. Full story and demo on Devpost.",
		tags: [
			{ label: "3rd · $1,000 · Polkadot Hackathon", highlight: true },
			{ label: "Rust · Axum · Subxt · SQLx · Tokio" },
			{ label: "React · TS · Vite · Polkadot.js" },
			{ label: "PostgreSQL · shadcn · TanStack Query" },
		],
		href: TRAVELID_DEVPOST_URL,
		span: "wide",
	},
	{
		idx: "002",
		nameLines: ["Garden Watchers", "& Bots"],
		desc: "Watcher services and monitoring bots that still run at Hashira. A Twitter bot that posts trade cards for any $10K+ swap, a Strava-to-Discord bridge for the team, and a TypeScript arbitrage bot. Three full rewrites in, still in production.",
		tags: [
			{ label: "In Production", highlight: true },
			{ label: "Go" },
			{ label: "Rust" },
			{ label: "Python" },
			{ label: "TypeScript" },
		],
		href: GARDEN_WATCHER_BOT_URL,
		span: "tall",
	},
	{
		idx: "003",
		nameLines: ["Garden Analyzer"],
		desc: "Discord insight bot for Garden.Finance (Al-Lyzer): commands post embed-style metrics—e.g. 82% Q2-vs-Q1 volume drop, 304% new-user growth, 98% Starknet outbound dominance—without PMs in SQL. OpenClaw orchestrates; Go and TypeScript under the hood.",
		tags: [
			{ label: "OpenClaw", highlight: true },
			{ label: "Discord" },
			{ label: "Go · TypeScript" },
		],
	},
	{
		idx: "004",
		nameLines: ["Animax"],
		desc: "React Native anime streaming app — browse, search, episode playback. Tuned API fetches and screen transitions so it stays snappy on a 4G phone with a weak signal.",
		tags: [
			{ label: "React Native", highlight: true },
			{ label: "TypeScript" },
			{ label: "Tailwind" },
			{ label: "AniWatch API" },
		],
		href: ANIMAX_REPO_URL,
		span: "wide",
	},
	{
		idx: "005",
		nameLines: ["Catalog Crypto API"],
		desc: "Rust REST API deployed on Render with PostgreSQL behind it. SQLx migrations keep schema changes explicit and reviewable; logging is structured enough to follow requests through production logs. The codebase splits HTTP handling from data access so it reads like a small service rather than a single-file tutorial.",
		tags: [
			{ label: "Rust", highlight: true },
			{ label: "REST" },
			{ label: "SQLx" },
			{ label: "PostgreSQL" },
			{ label: "Render" },
		],
		href: CATALOG_CRYPTO_API_REPO_URL,
	},
];

export const EXPERIENCE: ExperienceEntry[] = [
	{
		role: "Software Associate — Go & Rust",
		period: "Dec 2024 — Apr 2026",
		company: "Hashira Works · hashira.io",
		desc: "Backend for Garden.Finance — watcher services, on-chain extraction pipelines, Spark and Lightning integrations in Rust. Built Garden Analyzer (Discord insight bot with OpenClaw: command-driven embeds that surface metrics like bridge volume, user growth, and route dominance—no SQL handoffs for the team) and the monitoring bots the team checks every morning. Also own a chunk of the deployment scripts on our self-hosted Gitea.",
	},
	{
		role: "Backend Developer Intern",
		period: "Feb — Mar 2024",
		company: "Navodita Infotech",
		desc: `Multi-room real-time chat with Node, Express, and Socket.io. Code: ${CHAT_APP_REPO_URL}. The Socket.io work here later carried over to features I built at Hashira. Letter of Recommendation.`,
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
];

export const SKILLS: SkillChip[] = [
	{ name: "Go", highlight: true },
	{ name: "Rust", highlight: true },
	{ name: "TypeScript", highlight: true },
	{ name: "Python" },
	{ name: "Node.js" },
	{ name: "Express" },
	{ name: "Axum" },
	{ name: "GORM" },
	{ name: "Chi router" },
	{ name: "React" },
	{ name: "React Native" },
	{ name: "Tailwind" },
	{ name: "PostgreSQL" },
	{ name: "MongoDB" },
	{ name: "WebSockets" },
	{ name: "Socket.io" },
	{ name: "MCP" },
	{ name: "Docker" },
	{ name: "Docker Compose" },
	{ name: "AWS" },
	{ name: "Gitea" },
	{ name: "Coolify" },
];

export const INTERESTS = [
	"Watching anime 📺",
	"Reading manga 📚",
	"Sleep (a lot) 😴",
	"PC games 🎮",
	"Vim keybindings ✌️",
	"Music all day 🎧",
	"Reading (rare) 📖",
	"Phone 📱",
];

export const SETUP: Array<[string, string]> = [
	["machine", "MacBook Pro M5"],
	["editor", "Neovim"],
	["terminal", "Ghostty"],
	["shell", "Fish + Zsh"],
	["before this", "Arch Linux, 6 mo"],
];

export const SOCIALS: Array<{ label: string; href: string }> = [
	{ label: "GitHub", href: GITHUB_URL },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/dinavahi-lohit-sai-192a382b1",
	},
	{ label: "Site", href: `${SITE_ORIGIN}/` },
	{ label: "Resume", href: RESUME_URL },
];
