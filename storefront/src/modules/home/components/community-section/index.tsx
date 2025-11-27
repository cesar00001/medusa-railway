"use client"

import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CommunitySection = () => {
  return (
    <div className="content-container py-16 bg-white">
      <div className="grid grid-cols-1 medium:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2
            className="text-3xl small:text-4xl font-light text-ui-fg-base mb-6"
          >
            Rewild Your Spices
          </h2>
          <p className="text-lg text-ui-fg-subtle mb-6 leading-relaxed">
            Rare food. Real people. We&apos;re putting power back in the hands of
            independent food producers and changing the food system for the
            better.
          </p>
          <p className="text-base text-ui-fg-muted mb-8">
            Connect directly with foragers, farmers, and artisans who harvest
            and create unique, hard-to-find specialty ingredients shipped fresh
            to your door.
          </p>

          <div className="flex flex-col small:flex-row gap-4">
            <LocalizedClientLink href="/store">
              <Button
                size="large"
                className="bg-[#B6C800] text-black hover:bg-[#B6C800]/90 px-8 py-3 text-lg font-medium border-0 rounded-lg"
              >
                Start Exploring
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/about">
              <Button
                variant="secondary"
                size="large"
                className="border-[#B6C800] text-[#B6C800] hover:bg-[#B6C800]/10 px-8 py-3 text-lg font-medium bg-transparent rounded-lg"
              >
                Learn More
              </Button>
            </LocalizedClientLink>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-medium text-ui-fg-base mb-6">
              Latest from Our Community
            </h3>
            <div className="grid grid-cols-2 small:grid-cols-4 gap-4">
               <div className="aspect-square bg-ui-bg-subtle rounded-lg overflow-hidden">
                  <img
                    src="/instagram/ig1.jpg"
                    alt="Community post 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
               </div>
               <div className="aspect-square bg-ui-bg-subtle rounded-lg overflow-hidden">
                  <video
                    src="/instagram/video1.mp4"
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
               </div>
               <div className="aspect-square bg-ui-bg-subtle rounded-lg overflow-hidden">
                  <img
                    src="/instagram/ig2.jpg"
                    alt="Community post 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
               </div>
               <div className="aspect-square bg-ui-bg-subtle rounded-lg overflow-hidden">
                  <video
                    src="/instagram/video2.mp4"
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
               </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-ui-fg-base">500+</div>
              <div className="text-sm text-ui-fg-muted">Producers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ui-fg-base">50+</div>
              <div className="text-sm text-ui-fg-muted">States</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ui-fg-base">1000+</div>
              <div className="text-sm text-ui-fg-muted">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunitySection
