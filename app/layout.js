import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import MobileNavigation from "@/components/mobile-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fuzail Mansuri | AI & ML ",
  description: "Fuzail Mansuri is an AI & ML enthusiast with a strong interest in developing intelligent, data-driven solutions. He is passionate about exploring machine learning models, experimenting with real-world applications, and staying updated with the latest advancements in artificial intelligence.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
            <Navigation />
            <main className="pb-20 md:pb-0">{children}</main>
            <MobileNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
