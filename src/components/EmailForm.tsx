'use client'

import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setLoading(true)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubmitted(true)
        setEmail('')
      }
    } catch (error) {
      console.error('Failed to submit:', error)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-4 text-green-800">
        Thanks! We&apos;ll contact you soon.
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-cta/50"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-cta text-white px-6 py-3 rounded-lg hover:bg-cta/90 transition-colors cursor-pointer disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Request Access'}
      </button>
    </form>
  )
}
