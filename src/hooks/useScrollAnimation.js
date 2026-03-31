import { useEffect, useRef } from 'react'

/**
 * Custom hook: observes the ref element and adds 'is-visible'
 * when it enters the viewport. Triggers once.
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // add is-visible to all animate-on-scroll children + self
          el.classList.add('is-visible')
          el.querySelectorAll('.animate-on-scroll').forEach(child =>
            child.classList.add('is-visible')
          )
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
