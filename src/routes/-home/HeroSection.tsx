import { RESUME_URL } from "#/routes/-data/portfolio";
import { useHeroParallax } from "#/routes/-hooks/useHeroParallax";
import { Stat } from "#/routes/-ui/Stat";

export function HeroSection() {
	const ghostRef = useHeroParallax();

	return (
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
						<span className="hero-meta-mark">Open to SDE-1 backend roles</span>
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
					<p className="hero-kicker">
						<span className="hero-kicker-aka">a.k.a.</span>{" "}
						<span className="hero-kicker-name">King Grey</span>
						<span className="hero-kicker-dot" aria-hidden="true">
							&nbsp;·&nbsp;
						</span>
						<span className="hero-kicker-exp">
							1.5+ yrs production experience
						</span>
					</p>
				</div>
			</div>
			<div className="hero-bottom">
				<div className="hb-left">
					<p className="hb-desc">
						Backend developer in <strong>Go, Rust and Typescript</strong>. Spent
						the last year and a half at Hashira Works on Garden.Finance's
						cross-chain infrastructure. B.Tech done, currently looking for an
						SDE-1 role — backend, systems, distributed services.
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
	);
}
