import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy – Wholesalify',
  description: 'Wholesalify privacy policy and data protection practices.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-secondary">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, including name, email, and business
              information when you sign up for early access or contact us.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Information</h2>
            <p>
              We use the information to provide and improve our services, communicate with you,
              and send you updates about Wholesalify.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@wholesalify.com" className="text-cta hover:underline">
                privacy@wholesalify.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
