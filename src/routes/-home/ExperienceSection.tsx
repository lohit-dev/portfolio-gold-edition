import { EXPERIENCE, SKILLS } from "#/routes/-data/portfolio";
import { SectionLabel } from "#/routes/-home/SectionLabel";
import { Reveal } from "#/routes/-ui/Reveal";

export function ExperienceSection() {
	return (
		<>
			<SectionLabel n="02" title="Experience" />
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
						Lightning and Spark integrations in Rust, a Discord insight bot over
						Garden data (OpenClaw — metrics like volume, growth, and route mix,
						not ad-hoc SQL), and the bots the team still checks every morning.
						Wrapped that chapter in April 2026 — open to what's next.
					</p>
					<div className="skills">
						{SKILLS.map((s, i) => (
							<span
								key={s.name}
								className={`sk ${s.highlight ? "on" : ""}`.trim()}
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
		</>
	);
}
