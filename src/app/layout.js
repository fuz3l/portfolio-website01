import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fuzail Mansuri - AI/ML Enthusiast",
  description: "An AI/ML Enthusiast, showcasing projects and expertise in artificial intelligence and machine learning.",
  keywords: "AI, Machine Learning, Web Development, NLP, Portfolio, Fuzail Mansuri, Mansuri, ML, deep learning",
  authors: [{ name: "Fuzail Mansuri", url: "https://fuzailmansuri.com" }],
  icons: "/favicon.png",
  openGraph: {
    title: "Fuzail Mansuri - AI/ML Enthusiast",
    description: "AI/ML expertise, projects, and skills.",
    url: "https://fuzailmansuri.com",
    siteName: "Fuzail Mansuri Portfolio",
    images: [
      {
        url: "/og.jpg", 
        width: 1200,
        height: 630,
        alt: "Portfolio Preview - Fuzail Mansuri",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fuz3l",
    creator: "@fuz3l",
    images: ["/og.jpg"],
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fuzail Mansuri",
    "url": "https://fuzailmansuri.com.com",
    "sameAs": [
      "https://github.com/fuz3l",
      "https://linkedin.com/in/fuzailmansuri"
    ],
    "jobTitle": "AI/ML Enthusiast",
    "description": "An AI/ML Enthusiast with expertise in artificial intelligence, deep learning, and web development."
  }

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />

        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fuzail Mansuri" />
        <meta name="keywords" content="AI, Machine Learning, Web Development, NLP, Portfolio, Fuzail Mansuri, Mansuri, ML, deep learning" />

        {/* Open Graph Meta Tags (for better sharing on LinkedIn, Facebook) */}
        <meta property="og:title" content="Fuzail Mansuri - AI/ML Enthusiast" />
        <meta property="og:description" content="Portfolio website showcasing AI/ML expertise, projects, and skills." />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:url" content="https://fuzailmansuri.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fuzail Mansuri - AI/ML Enthusiast" />
        <meta name="twitter:description" content="Portfolio website showcasing AI/ML expertise, projects, and skills." />
        <meta name="twitter:image" content="/og.jpg" />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



