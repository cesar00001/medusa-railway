"use client"

import { useParams } from "next/navigation"
import { useState } from "react"

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { countryCode } = useParams()

  return (
    <div className="content-container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video Content */}
        <div className="relative">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                {/* Placeholder video thumbnail */}
                <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm opacity-80">Chiltepin Sauzal</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full flex items-center justify-center group"
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                    <svg
                      className="w-6 h-6 text-green-700 ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={`/${countryCode}/instagram/video2.mp4`}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-champion)" }}
          >
            ABOUT CHILTEPIN
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Chiltepin Sauzal is a community marketplace connecting foragers, farmers,
              and artisan producers with chefs, restaurants, and home cooks who
              value exceptional, hard-to-find ingredients.
            </p>
            <p>
              We believe in supporting local economies and sustainable
              harvesting practices that preserve our natural resources while
              bringing the finest wild and specialty foods to your table.
            </p>
            <p>
              From rare mushrooms and wild-caught seafood to specialty meats and
              pantry staples, every product in our marketplace tells a story of
              passion, tradition, and exceptional quality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#B6C800] text-black rounded-lg hover:bg-[#B6C800]/90 transition-colors font-medium">
              Learn More
            </button>
            <button className="px-6 py-3 border border-[#B6C800] text-[#B6C800] rounded-lg hover:bg-[#B6C800]/10 transition-colors font-medium bg-transparent">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
