import EmailForm from './EmailForm'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          Wholesalify
          <br />
          <span className="text-cta">Modern B2B Wholesale Ordering Platform</span>
        </h1>
        <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
          Manage wholesale orders, inventory, and purchasing in one simple system.
        </p>
        <div id="waitlist" className="flex justify-center mb-6">
          <EmailForm />
        </div>
        <p className="text-sm text-gray-500">
          Join the early access list.
        </p>
      </div>
    </section>
  )
}
