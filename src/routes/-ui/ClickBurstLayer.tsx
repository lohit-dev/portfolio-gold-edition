import { useEffect, useRef, useState } from "react"
import { prefersReducedMotion } from "#/routes/-lib/motion"

type Burst = { id: number; x: number; y: number }

function shouldSkipBurstTarget(el: Element | null) {
	if (!el?.closest) return false
	if (el.closest("[data-no-click-fx]")) return true
	if (el.closest("textarea, select")) return true
	const inp = el.closest("input")
	if (inp instanceof HTMLInputElement) {
		const skip = ["text", "search", "email", "password", "url", "tel", "number"]
		if (skip.includes(inp.type)) return true
	}
	return false
}

export function ClickBurstLayer() {
	const [bursts, setBursts] = useState<Burst[]>([])
	const nextId = useRef(0)

	useEffect(() => {
		if (prefersReducedMotion()) return

		const onPointerDown = (e: PointerEvent) => {
			if (e.button !== 0) return
			let n: Node | null = e.target as Node | null
			while (n && n.nodeType !== Node.ELEMENT_NODE) n = n.parentNode
			const el = n instanceof Element ? n : null
			if (shouldSkipBurstTarget(el)) return

			const id = ++nextId.current
			setBursts((prev) => [...prev.slice(-14), { id, x: e.clientX, y: e.clientY }])
			window.setTimeout(() => {
				setBursts((prev) => prev.filter((b) => b.id !== id))
			}, 720)
		}

		window.addEventListener("pointerdown", onPointerDown, { capture: true })
		return () =>
			window.removeEventListener("pointerdown", onPointerDown, { capture: true })
	}, [])

	return (
		<div className="click-burst-root" aria-hidden>
			{bursts.map((b) => (
				<div
					key={b.id}
					className="click-burst-anchor"
					style={{ left: b.x, top: b.y }}
				>
					<span className="click-burst-ring" />
					<span className="click-burst-ring click-burst-ring--delayed" />
					<span className="click-burst-dot" />
					<span className="click-burst-cross" aria-hidden />
				</div>
			))}
		</div>
	)
}
