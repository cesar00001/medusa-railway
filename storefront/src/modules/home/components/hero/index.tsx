import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative">
      {/* Top Banner - banner section */}
      <div className="w-full bg-[#B4D3DA] py-2 text-green-text lg:flex lg:items-center lg:justify-center max-h-[120px] overflow-hidden">
        <div className="content-container">
          <h1 className="m-0 text-[14px] font-medium md:text-[18px]">
            Hard to find ingredients, all in one place.
          </h1>
          <p className="mb-0 mt-1 w-2/3 text-[9px] md:w-[40%] md:text-[12px] md:font-medium">
            Foraged is a Specialty Foods Marketplace. Get hard-to-find
            ingredients directly from foragers, farmers, and artisans. Only at
            Foraged.
          </p>
        </div>
      </div>

      {/* Floating Images - positioned between banner and hero */}
      <div className="absolute top-[0px] right-2 md:right-[60px] lg:right-[60px] z-30 flex items-center">
        <img
          alt="explore new pathways!"
          loading="lazy"
          width="45"
          height="45"
          decoding="async"
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] lg:w-[65px] lg:h-[65px] flex-shrink-0 drop-shadow-lg relative z-20"
          src="/images/explore-new-pathways-badge.png"
        />
        <img
          alt="landing page illustration."
          loading="lazy"
          width="105"
          height="105"
          decoding="async"
          className="w-[85px] h-[85px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex-shrink-0 drop-shadow-lg relative z-10"
          style={{ marginLeft: "-16px" }}
          src="/images/LandingPage-box.png"
        />
      </div>

      {/* Main Hero Section */}
      <div className="h-[75vh] w-full relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/bg.png')`,
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 small:px-8 gap-8 pt-16 md:pt-0">
          <div className="max-w-4xl">
            <Heading
              level="h1"
              className="text-3xl small:text-4xl medium:text-5xl leading-tight text-white mb-4"
              style={{ fontFamily: "var(--font-champion)" }}
            >
              REWILD YOUR SPICES
            </Heading>
            <Heading
              level="h2"
              className="text-lg small:text-xl medium:text-2xl leading-relaxed text-white/90 mb-8"
              style={{ fontFamily: "var(--font-champion)" }}
            >
              Rare food. Real People.
            </Heading>
            <p className="text-base small:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              We&apos;re putting power back in the hands of independent food
              producers - and changing the food system for the better.
            </p>
          </div>

          <div className="flex flex-col small:flex-row gap-4">
            <LocalizedClientLink href="/store">
              <Button
                size="large"
                className="bg-[#B6C800] text-black hover:bg-[#B6C800]/90 px-8 py-3 text-lg font-medium border-0"
              >
                Explore Products
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/categories">
              <Button
                variant="secondary"
                size="large"
                className="border-white text-black hover:bg-white/80 px-8 py-3 text-lg font-medium bg-white/90"
              >
                Shop by Category
              </Button>
            </LocalizedClientLink>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
            <span>🌿 Wild Medusa</span>
            <span>•</span>
            <span>🚚 Direct from Producers</span>
            <span>•</span>
            <span>⭐ Artisan Quality</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
