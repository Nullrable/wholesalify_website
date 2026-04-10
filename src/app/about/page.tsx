import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About – Wholesalify',
  description: 'Learn about Wholesalify and our mission to simplify B2B wholesale operations.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            About Wholesalify
          </h1>
          <div className="prose prose-lg max-w-none text-secondary">
            <p className="mb-6">
              Wholesalify is a modern B2B wholesale ordering platform designed for wholesalers,
              distributors, and trade companies. We believe wholesale businesses deserve
              the same modern tools as e-commerce companies.
            </p>
            <p className="mb-6">
              Our mission is to simplify wholesale operations by providing an all-in-one
              platform for managing orders, inventory, and purchasing. No more spreadsheets,
              no more WhatsApp orders, no more inventory mistakes.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Our Vision</h2>
            <p>
              We envision a world where every wholesale business, regardless of size,
              can operate efficiently with modern technology. Wholesalify makes that
              possible.
            </p>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
