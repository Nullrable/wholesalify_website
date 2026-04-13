'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { locales, localeNames } from '@/lib/i18n'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const browserLang = navigator.language || 'en'
    const preferredLocale = locales.find(
      (loc) => loc === browserLang || loc.startsWith(browserLang.split('-')[0])
    ) || 'en'

    // Redirect after render to avoid Googlebot redirect issue
    router.replace(`/${preferredLocale}`)
  }, [router])

  // Show language selector while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Wholesalify</h1>
        <p className="text-gray-600 mb-4">Select your language:</p>
        <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => router.push(`/${loc}`)}
              className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
