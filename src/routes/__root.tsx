import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Analytics } from "@vercel/analytics/react";

import { SITE_ORIGIN, SOCIALS } from "#/routes/-data/portfolio";
import appCss from "../styles.css?url";

const PAGE_TITLE = "Dinavahi Lohith Sai — Backend engineer · lohit.xyz";

const PAGE_DESCRIPTION =
	"Go, Rust, TypeScript backend — Hashira, TravelID (Polkadot). SDE-1 roles · Vijayawada, IN.";

const CANONICAL = `${SITE_ORIGIN}/`;
const OG_IMAGE = `${SITE_ORIGIN}/og.png`;
const OG_IMAGE_W = "1200";
const OG_IMAGE_H = "630";

const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
const PERSON_ID = `${SITE_ORIGIN}/#person`;

const seoJsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": WEBSITE_ID,
			url: CANONICAL,
			name: PAGE_TITLE,
			alternateName: ["lohit.xyz", "Dinavahi Lohith Sai Portfolio"],
			description: PAGE_DESCRIPTION,
			inLanguage: "en-IN",
			publisher: { "@id": PERSON_ID },
		},
		{
			"@type": "Person",
			"@id": PERSON_ID,
			name: "Dinavahi Lohith Sai",
			alternateName: ["King Grey", "Lohith Sai"],
			url: CANONICAL,
			description: PAGE_DESCRIPTION,
			jobTitle: "Backend & Systems Developer",
			worksFor: {
				"@type": "Organization",
				name: "Hashira Works",
				url: "https://hashira.io",
			},
			address: {
				"@type": "PostalAddress",
				addressLocality: "Vijayawada",
				addressRegion: "Andhra Pradesh",
				addressCountry: "IN",
			},
			sameAs: [...new Set(SOCIALS.map(({ href }) => href))],
			knowsAbout: [
				"Go",
				"Rust",
				"TypeScript",
				"Backend engineering",
				"Distributed systems",
				"Polkadot",
				"PostgreSQL",
			],
			mainEntityOfPage: { "@id": WEBSITE_ID },
		},
	],
};

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover",
			},
			{ title: PAGE_TITLE },
			{ name: "description", content: PAGE_DESCRIPTION },
			{ name: "application-name", content: "lohit.xyz" },
			{ name: "author", content: "Dinavahi Lohith Sai" },
			{ name: "publisher", content: "Dinavahi Lohith Sai" },
			{ name: "robots", content: "index, follow, max-image-preview:large" },
			{
				name: "googlebot",
				content: "index, follow, max-image-preview:large, max-snippet:-1",
			},
			{ name: "theme-color", content: "#0d0d0b" },
			{ name: "color-scheme", content: "dark" },
			{ name: "geo.region", content: "IN-AP" },
			{ name: "geo.placename", content: "Vijayawada" },
			{ name: "referrer", content: "strict-origin-when-cross-origin" },
			{ property: "og:type", content: "website" },
			{ property: "og:locale", content: "en_IN" },
			{ property: "og:site_name", content: "lohit.xyz" },
			{ property: "og:title", content: PAGE_TITLE },
			{ property: "og:description", content: PAGE_DESCRIPTION },
			{ property: "og:url", content: CANONICAL },
			{ property: "og:image", content: OG_IMAGE },
			{ property: "og:image:secure_url", content: OG_IMAGE },
			{ property: "og:image:width", content: OG_IMAGE_W },
			{ property: "og:image:height", content: OG_IMAGE_H },
			{
				property: "og:image:alt",
				content: "Dinavahi Lohith Sai — Backend developer, lohit.xyz",
			},
			{ property: "og:image:type", content: "image/png" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: PAGE_TITLE },
			{ name: "twitter:description", content: PAGE_DESCRIPTION },
			{ name: "twitter:url", content: CANONICAL },
			{ name: "twitter:image", content: OG_IMAGE },
			{
				name: "twitter:image:alt",
				content: "Dinavahi Lohith Sai — Backend developer, lohit.xyz",
			},
		],
		links: [
			{ rel: "image_src", href: OG_IMAGE },
			{ rel: "canonical", href: CANONICAL },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap",
			},
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "apple-touch-icon", href: "/favicon.svg" },
			{ rel: "mask-icon", href: "/favicon.svg", color: "#ede9e0" },
			{ rel: "manifest", href: "/manifest.json" },
			{ rel: "stylesheet", href: appCss },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-IN">
			<head>
				<HeadContent />
				<script type="application/ld+json">{JSON.stringify(seoJsonLd)}</script>
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
				<Analytics />
			</body>
		</html>
	);
}
