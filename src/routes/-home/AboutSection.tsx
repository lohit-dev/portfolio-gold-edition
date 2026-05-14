import { INTERESTS, SETUP } from "#/routes/-data/portfolio";
import { SectionLabel } from "#/routes/-home/SectionLabel";
import { Reveal } from "#/routes/-ui/Reveal";

export function AboutSection() {
	return (
		<>
			<SectionLabel n="03" title="About" id="about" />
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
								&amp; Data Science from NRI Institute of Technology, finished in
								2026 — Google Developers Club member, first place in our SQL-app
								competition somewhere along the way.
							</p>
							<p>
								Most of my work is backend. Go and Rust for production stuff,
								Node when the team needs it. On the side I've shipped two React
								Native apps to the Play Store and a stack of automation bots
								that I keep telling myself I'll consolidate one day.
							</p>
							<p>
								Ran Arch for six months before switching to an M5 Mac. RE2
								Remake was the first game I bought with my own money. Currently
								between jobs, re-watching Re:Zero, and reading more light novels
								than I should.
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
								{INTERESTS.map((item) => (
									<span className="int" key={item}>
										{item}
									</span>
								))}
							</div>
						</div>
					</Reveal>
				</div>
			</section>
		</>
	);
}
