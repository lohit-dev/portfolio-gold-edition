import { SOCIALS } from "#/routes/-data/portfolio"
import { Reveal } from "#/routes/-ui/Reveal"
import { SectionLabel } from "#/routes/-home/SectionLabel"

export function ContactSection() {
	return (
		<>
			<SectionLabel n="04" title="Contact" id="contact" />
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
		</>
	)
}
