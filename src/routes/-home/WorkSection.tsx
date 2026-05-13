import { Fragment } from "react"
import { GITHUB_URL, PROJECTS } from "#/routes/-data/portfolio"
import { Reveal } from "#/routes/-ui/Reveal"
import { SectionLabel } from "#/routes/-home/SectionLabel"

export function WorkSection() {
	return (
		<>
			<SectionLabel n="01" title="Selected Work" id="work" />
			<section className="work">
				<Reveal className="work-head">
					<h2 className="work-h">
						A few things
						<br />
						I've <em>built</em>
					</h2>
					<a
						className="work-all"
						href={GITHUB_URL}
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
							as={p.href ? "a" : "article"}
							{...(p.href
								? {
										href: p.href,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": `${p.nameLines.join(" ")} — open repository`,
									}
								: {})}
							delay={i * 80}
							className={`bc ${p.span === "wide" ? "bc-wide" : ""} ${
								p.span === "tall" ? "bc-tall" : ""
							}`.trim()}
							style={p.minHeight ? { minHeight: p.minHeight } : undefined}
							onPointerMove={(e) => {
								const card = e.currentTarget
								const rect = card.getBoundingClientRect()
								card.style.setProperty("--mx", `${e.clientX - rect.left}px`)
								card.style.setProperty("--my", `${e.clientY - rect.top}px`)
							}}
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
								<div className="bc-name">
									{p.nameLines.map((line, li) => (
										<Fragment key={`${p.idx}-n-${li}`}>
											{li > 0 ? <br /> : null}
											{line}
										</Fragment>
									))}
								</div>
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
		</>
	)
}
