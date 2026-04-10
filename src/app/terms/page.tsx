import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service – Wholesalify',
  description: 'Wholesalify terms of service and usage conditions.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-secondary">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Wholesalify, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Use of Service</h2>
            <p>
              Wholesalify provides a B2B wholesale ordering platform. You agree to use it only
              for lawful purposes and in accordance with these Terms.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              All content and materials available on Wholesalify are the property of Wholesalify
              or its licensors.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@wholesalify.com" className="text-cta hover:underline">
                legal@wholesalify.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
