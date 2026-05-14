import { useEffect, useState } from "react";
import { prefersReducedMotion } from "#/routes/-lib/motion";

export function useCounter(
	target: number,
	decimals: number,
	durationMs: number,
	active: boolean,
): string {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (!active) return;
		if (prefersReducedMotion()) {
			setValue(target);
			return;
		}
		let raf = 0;
		const start = performance.now();
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / durationMs);
			const eased = 1 - (1 - t) ** 3;
			setValue(target * eased);
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, durationMs, active]);
	return decimals === 0
		? Math.round(value).toString()
		: value.toFixed(decimals);
}
