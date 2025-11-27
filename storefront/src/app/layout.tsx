import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Crimson_Text, Playfair_Display } from "next/font/google"
import "styles/globals.css"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-caslon-ionic",
  display: "swap",
  weight: ["400", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-champion",
  display: "swap",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${crimsonText.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
