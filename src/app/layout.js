import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fuzail Mansuri",
  description: "Portfolio website of an AI/ML engineer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-black  text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

