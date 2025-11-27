import { Metadata } from "next"

import Categories from "@modules/home/components/categories"
import CommunitySection from "@modules/home/components/community-section"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import ParallaxSection from "@modules/home/components/parallax-section"
import VideoSection from "@modules/home/components/video-section"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Wild & Specialty Foods Marketplace",
  description:
    "Discover rare ingredients from foragers, farmers, and artisan producers. A community marketplace for wild and specialty foods.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <Categories />
      <VideoSection />
      <ParallaxSection />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <CommunitySection />
    </>
  )
}
