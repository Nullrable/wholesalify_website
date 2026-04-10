import EmailForm from './EmailForm'

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-cta">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start using Wholesalify
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Join early access and transform your wholesale business.
        </p>
        <div className="flex justify-center">
          <EmailForm />
        </div>
      </div>
    </section>
  )
}
