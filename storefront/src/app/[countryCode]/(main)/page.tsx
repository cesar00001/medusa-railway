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
  title: "Chiltepin - Wild & Specialty Foods",
  description:
    "Discover rare ingredients from foragers, farmers, and artisan producers. A community marketplace for wild and specialty foods.",
  openGraph: {
    title: "Chiltepin - Wild & Specialty Foods",
    description: "Discover rare ingredients from foragers, farmers, and artisan producers. A community marketplace for wild and specialty foods.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chiltepin - Wild & Specialty Foods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiltepin - Wild & Specialty Foods",
    description: "Discover rare ingredients from foragers, farmers, and artisan producers. A community marketplace for wild and specialty foods.",
    images: ["/twitter-image.jpg"],
  }
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode).catch(() => null)
  const region = await getRegion(countryCode)

  return (
    <>
      <Hero />
      <Categories />
      <VideoSection />
      <ParallaxSection />
      {collections && region && (
        <div className="py-12">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      )}
      <CommunitySection />
    </>
  )
}