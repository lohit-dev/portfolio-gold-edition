import type { CSSProperties } from "react";

export function SectionLabel({
	n,
	title,
	id,
	style,
	badge,
}: {
	n: string;
	title: string;
	id?: string;
	style?: CSSProperties;
	/** Small pill next to the title (e.g. status). */
	badge?: string;
}) {
	return (
		<div className="slabel" style={style} id={id}>
			<span className="sl-n">{n}</span>
			<div className="sl-line" />
			<span className="sl-t">{title}</span>
			{badge ? <span className="sl-badge">{badge}</span> : null}
		</div>
	);
}
