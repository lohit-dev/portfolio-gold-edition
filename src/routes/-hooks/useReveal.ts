import { useEffect, useRef } from "react"

export function useReveal<T extends HTMLElement>() {
	const ref = useRef<T | null>(null)
	useEffect(() => {
		const el = ref.current
		if (!el || typeof IntersectionObserver === "undefined") return
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible")
						io.unobserve(entry.target)
					}
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
		)
		io.observe(el)
		return () => io.disconnect()
	}, [])
	return ref
}
