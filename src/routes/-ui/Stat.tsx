import { useCounter } from "#/routes/-hooks/useCounter"
import { useInView } from "#/routes/-hooks/useInView"

export function Stat({
	target,
	decimals = 0,
	prefix = "",
	suffix = "",
	label,
}: {
	target: number
	decimals?: number
	prefix?: string
	suffix?: string
	label: string
}) {
	const { ref, inView } = useInView<HTMLDivElement>(0.5)
	const value = useCounter(target, decimals, 1400, inView)
	return (
		<div className="hb-stat" ref={ref}>
			<div className="hb-stat-n">
				{prefix}
				{value}
				{suffix}
			</div>
			<div className="hb-stat-l">{label}</div>
		</div>
	)
}
