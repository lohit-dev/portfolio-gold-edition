import { Logo } from "#/routes/-ui/Logo";

export function SiteFooter() {
	return (
		<footer className="footer">
			<div className="footer-l">
				<Logo size="md" />
				<span className="footer-meta">
					© 2026 · Dinavahi Lohith Sai · Vijayawada, IN
				</span>
			</div>
			<span className="fr">TanStack Start · Bun · Tailwind</span>
		</footer>
	);
}
