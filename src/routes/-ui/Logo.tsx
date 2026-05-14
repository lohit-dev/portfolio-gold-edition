export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
	return (
		<span className={`logo logo-${size}`} role="img" aria-label="lohit.">
			<span aria-hidden="true">lohit</span>
			<span className="logo-dot" aria-hidden="true">
				.
			</span>
		</span>
	);
}
