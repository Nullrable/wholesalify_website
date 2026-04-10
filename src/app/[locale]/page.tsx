import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import CTASection from '@/components/CTASection'

export default async function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <CTASection />
    </main>
  )
}
