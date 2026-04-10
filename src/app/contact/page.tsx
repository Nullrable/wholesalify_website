import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact – Wholesalify',
  description: 'Get in touch with the Wholesalify team.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Contact Us
          </h1>
          <p className="text-secondary text-lg mb-8">
            Interested in early access or have questions? Reach out to us.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta/50"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cta text-white py-3 rounded-lg hover:bg-cta/90 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 pt-8 border-t">
            <p className="text-secondary">
              Or email us directly at{' '}
              <a href="mailto:hello@wholesalify.com" className="text-cta hover:underline cursor-pointer">
                hello@wholesalify.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
