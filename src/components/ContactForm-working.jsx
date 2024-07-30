'use client'
import React, { useState } from 'react'
import {
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="py-16 bg-gradient-to-br from-sky-900 to-amber-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left column content remains the same */}
          <div className="text-white">
            {/* ... (keep the existing content for the left column) ... */}
          </div>

          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-md">
                <p className="font-medium">Thank you for your submission!</p>
                <p>We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                {/* Form fields remain the same */}
                {/* ... (keep all the existing form fields) ... */}
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="inline-block px-4 py-2 font-sans text-base font-medium transition duration-500 border border-transparent rounded-full bg-sky-600 text-amber-50 hover:bg-sky-900 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}