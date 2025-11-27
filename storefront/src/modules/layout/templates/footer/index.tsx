import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-8 xsmall:flex-row items-start justify-between py-16">
          <div className="flex flex-col gap-6">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-champion)" }}
            >
              Chiltepin Sauzal
            </LocalizedClientLink>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Connecting foragers, farmers, and artisan producers with chefs and
              home cooks who value exceptional, hard-to-find ingredients.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.59.12 4.694.287 3.94.54c-.82.277-1.518.64-2.207 1.328C.64 2.556.277 3.254 0 4.074c-.253.754-.42 1.65-.473 2.85C-.04 8.13 0 8.53 0 12.15s-.014 3.996-.067 5.202c-.053 1.2-.22 2.096-.473 2.85-.277.82-.64 1.518-1.328 2.207C.556 23.36.254 24.02 0 24.074c-.754.253-1.65.42-2.85.473C3.87 24.096 4.27 24.1 7.89 24.1s3.996-.014 5.202-.067c1.2-.053 2.096-.22 2.85-.473.82-.277 1.518-.64 2.207-1.328.688-.688 1.05-1.386 1.328-2.207.253-.754.42-1.65.473-2.85.053-1.206.067-1.606.067-5.228s.014-3.996.067-5.202c.053-1.2.22-2.096.473-2.85.277-.82.64-1.518 1.328-2.207C23.36.64 24.02.277 24.074 0c.754-.253 1.65-.42 2.85-.473C20.13-.04 19.73 0 16.11 0c-3.62 0-4.02.014-5.226.067-1.2.053-2.096.22-2.85.473-.82.277-1.518.64-2.207 1.328C.64 2.556.277 3.254 0 4.074zM12.017 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-4">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-semibold">
                  Shop
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    return (
                      <li className="text-ui-fg-subtle txt-small" key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-ui-fg-base transition-colors"
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-semibold">
                  Collections
                </span>
                <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base transition-colors"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base font-semibold">
                Company
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/about"
                  >
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/contact"
                  >
                    Contact
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/careers"
                  >
                    Careers
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/blog"
                  >
                    Blog
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base font-semibold">
                Support
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/help"
                  >
                    Help Center
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/shipping"
                  >
                    Shipping Info
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/returns"
                  >
                    Returns
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base transition-colors"
                    href="/faq"
                  >
                    FAQ
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mb-8 justify-center md:justify-between items-center text-ui-fg-muted border-t border-gray-200 pt-8 gap-4 md:gap-0">
          <Text className="txt-compact-small text-center md:text-left">
            © {new Date().getFullYear()} Chiltepin Sauzal. All rights reserved.
          </Text>
          <div className="flex items-center gap-4 md:gap-6">
            <MedusaCTA style={{}} />
            <div className="flex space-x-4 md:space-x-6 text-sm">
              <LocalizedClientLink
                href="/privacy"
                className="hover:text-ui-fg-base transition-colors"
              >
                Privacy Policy
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/terms"
                className="hover:text-ui-fg-base transition-colors"
              >
                Terms of Service
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
