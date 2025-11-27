import { HttpTypes } from "@medusajs/types"
import { Heading } from "@medusajs/ui"
import ProductRail from "@modules/home/components/featured-products/product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  return (
    <div className="bg-ui-bg-subtle">
      <div className="content-container py-16">
        <div className="text-center mb-12">
          <Heading
            level="h2"
            className="text-3xl small:text-4xl font-light text-ui-fg-base mb-4"
          >
            Featured from Our Community
          </Heading>
          <p className="text-lg text-ui-fg-subtle max-w-2xl mx-auto">
            Discover unique ingredients from passionate foragers, farmers, and
            artisan producers who are redefining specialty foods.
          </p>
        </div>

        <ul className="flex flex-col gap-x-6">
          {collections.map((collection) => (
            <li key={collection.id}>
              <ProductRail collection={collection} region={region} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
