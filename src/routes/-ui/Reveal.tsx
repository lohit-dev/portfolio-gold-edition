import { useReveal } from "#/routes/-hooks/useReveal"

export function Reveal({
	as: Tag = "div",
	className = "",
	delay = 0,
	children,
	...rest
}: {
	as?: keyof React.JSX.IntrinsicElements
	className?: string
	delay?: number
	children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
	const ref = useReveal<HTMLElement>()
	const Component = Tag as React.ElementType
	return (
		<Component
			ref={ref}
			className={`reveal ${className}`.trim()}
			style={{ transitionDelay: `${delay}ms`, ...(rest.style ?? {}) }}
			{...rest}
		>
			{children}
		</Component>
	)
}
