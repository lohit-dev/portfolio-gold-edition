import type { CSSProperties } from "react"

export function SectionLabel({
	n,
	title,
	id,
	style,
}: {
	n: string
	title: string
	id?: string
	style?: CSSProperties
}) {
	return (
		<div className="slabel" style={style} id={id}>
			<span className="sl-n">{n}</span>
			<div className="sl-line" />
			<span className="sl-t">{title}</span>
		</div>
	)
}
