import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Wholesalify</h3>
            <p className="text-gray-400 text-sm">
              Modern B2B Wholesale Ordering Platform for wholesalers and distributors.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-white transition-colors cursor-pointer">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Wholesalify. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
