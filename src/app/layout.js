import { DM_Sans, JetBrains_Mono, Inria_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria-serif",
});

export const metadata = {
  title: "Fuzail Mansuri",
  description: "Fuzail's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preload" href="/bg.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('dark'); localStorage.removeItem('theme');`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} ${inriaSerif.variable} font-sans`}>{children}</body>
    </html>
  );
} 