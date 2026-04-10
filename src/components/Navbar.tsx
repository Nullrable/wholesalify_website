'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Wholesalify
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-secondary hover:text-primary transition-colors cursor-pointer">
            Features
          </Link>
          <Link href="/about" className="text-secondary hover:text-primary transition-colors cursor-pointer">
            About
          </Link>
          <Link href="/contact" className="text-secondary hover:text-primary transition-colors cursor-pointer">
            Contact
          </Link>
        </div>
        <Link
          href="/#waitlist"
          className="bg-cta text-white px-5 py-2 rounded-lg hover:bg-cta/90 transition-colors cursor-pointer"
        >
          Get Early Access
        </Link>
      </div>
    </nav>
  )
}
