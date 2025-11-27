"use client"

import { useEffect, useRef } from "react"

const ParallaxSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const bottleRef = useRef<HTMLDivElement>(null)
  const midpepperRef = useRef<HTMLDivElement>(null)
  const pepperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax()
          ticking = false
        })
        ticking = true
      }
    }

    const updateParallax = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // Only apply parallax when the section is in view
      if (
        scrollY + windowHeight > containerTop &&
        scrollY < containerTop + containerHeight
      ) {
        const relativeScroll = scrollY - containerTop
        const parallaxStrength = 0.5

        // Different speeds for each layer
        if (bottleRef.current) {
          const bottleOffset = relativeScroll * 0.2 * parallaxStrength
          bottleRef.current.style.transform = `translateY(${bottleOffset}px) rotate(${
            bottleOffset * 0.01
          }deg)`
        }
        if (midpepperRef.current) {
          const midpepperOffset = relativeScroll * 0.4 * parallaxStrength
          midpepperRef.current.style.transform = `translateY(${midpepperOffset}px) rotate(${
            midpepperOffset * -0.005
          }deg)`
        }
        if (pepperRef.current) {
          const pepperOffset = relativeScroll * 0.6 * parallaxStrength
          pepperRef.current.style.transform = `translateY(${pepperOffset}px) rotate(${
            pepperOffset * 0.008
          }deg)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[90vh] overflow-hidden bg-gradient-to-b from-earth-50 via-earth-100 to-forest-50 -mx-4 md:-mx-8"
    >
      {/* Background layer - bottle (slowest movement) */}
      <div
        ref={bottleRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        <img
          src="/bottle.png"
          alt="Bottle"
          className="size-dvh h-auto opacity-25 drop-shadow-lg"
        />
      </div>

      {/* Middle layer - midpepper (medium movement) */}
      <div
        ref={midpepperRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        <img
          src="/midpepper.png"
          alt="Mid Pepper"
          className="w-[900px] h-auto opacity-35 drop-shadow-lg"
        />
      </div>

      {/* Foreground layer - pepper (fastest movement) */}
      <div
        ref={pepperRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        <img
          src="/pepper.png"
          alt="Pepper"
          className="size h-auto opacity-45 drop-shadow-xl"
        />
      </div>

      {/* Content overlay with glassmorphism effect */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-3xl px-6 py-12 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
          <h2 className="text-4xl small:text-5xl medium:text-6xl font-light text-earth-800 mb-6 drop-shadow-sm">
            Nature's Finest
          </h2>
          <p className="text-lg small:text-xl text-earth-700 leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
            Discover the perfect harmony of flavors from our carefully curated
            selection of wild and specialty ingredients, harvested with passion
            and delivered with care.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-earth-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-earth-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-earth-600 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParallaxSection
