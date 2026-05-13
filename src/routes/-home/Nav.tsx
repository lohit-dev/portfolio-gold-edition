import { Logo } from "#/routes/-ui/Logo"

export function Nav() {
	return (
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
	)
}
