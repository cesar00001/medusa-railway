import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { listCategories } from "@lib/data/categories"
import { HttpTypes } from "@medusajs/types"

// Fallback icons and colors for categories without specific assignments
const categoryIcons: Record<string, string> = {
  mushrooms: "🍄",
  produce: "🥕",
  seafood: "🐟",
  meat: "🥩",
  pantry: "🏺",
  wellness: "🌿",
  default: "📦",
}

const categoryColors: Record<string, string> = {
  mushrooms: "from-amber-100 to-orange-100",
  produce: "from-green-100 to-emerald-100",
  seafood: "from-blue-100 to-cyan-100",
  meat: "from-red-100 to-rose-100",
  pantry: "from-purple-100 to-violet-100",
  wellness: "from-teal-100 to-green-200",
  default: "from-gray-100 to-gray-200",
}

const SkeletonCategory = () => (
  <div className="mb-8 flex w-full max-w-[150px] flex-col items-center justify-start md:w-fit">
    <div className="relative overflow-hidden rounded-[6px] md:h-[140px] md:w-[140px] bg-gray-200 animate-pulse">
      <div className="absolute bottom-2 left-2 right-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  </div>
)

const Categories = async () => {
  const productCategories = await listCategories({ limit: 6 })

  // Transform categories to include icons and colors
  const categories =
    productCategories?.map((category: HttpTypes.StoreProductCategory) => {
      const handle = category.handle?.toLowerCase() || "default"
      return {
        name: category.name,
        icon: categoryIcons[handle] || categoryIcons.default,
        color: categoryColors[handle] || categoryColors.default,
        href: `/categories/${category.handle}`,
      }
    }) || []

  return (
    <div className="content-container py-4">
      <div className="flex items-center gap-1">
        <h3
          className="m-0 text-[25px]"
          style={{ fontFamily: "var(--font-champion)" }}
        >
          TRENDING CATEGORIES
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-trending-up"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#B6C800"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="3 17 9 11 13 15 21 7"></polyline>
          <polyline points="14 7 21 7 21 14"></polyline>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-3 py-6 md:gap-4">
        {categories.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-12 w-24 bg-gray-200 rounded-full animate-pulse"
              ></div>
            ))
          : categories.map((category) => (
              <LocalizedClientLink
                key={category.name}
                href={category.href}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 font-medium text-sm whitespace-nowrap"
              >
                {category.name}
              </LocalizedClientLink>
            ))}
      </div>
    </div>
  )
}

export default Categories
