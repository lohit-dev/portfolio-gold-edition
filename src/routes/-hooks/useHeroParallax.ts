import { useEffect, useRef } from "react"
import { prefersReducedMotion } from "#/routes/-lib/motion"

export function useHeroParallax() {
	const ref = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		const el = ref.current
		if (!el || prefersReducedMotion()) return
		let raf = 0
		const update = () => {
			raf = 0
			const y = window.scrollY
			if (y > window.innerHeight) return
			el.style.setProperty("--parallax", `${y * 0.12}px`)
		}
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update)
		}
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => {
			window.removeEventListener("scroll", onScroll)
			if (raf) cancelAnimationFrame(raf)
		}
	}, [])
	return ref
}
