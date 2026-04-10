import Navbar from '@/components/Navbar'
import Features from '@/components/Features'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Features – Wholesalify',
  description: 'Explore all features of Wholesalify B2B wholesale ordering platform.',
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Product Features
          </h1>
          <p className="text-xl text-secondary">
            Everything you need to run your wholesale business efficiently.
          </p>
        </div>
      </div>
      <Features />
      <CTASection />
      <Footer />
    </main>
  )
}
