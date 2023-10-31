import "./globals.css"
import type {Metadata} from "next"
import {Mulish} from "next/font/google"

const mulish = Mulish({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Bashorunolu Legal Services",
  description: "Your trusted legal partner",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
