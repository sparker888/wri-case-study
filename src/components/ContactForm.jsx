import React from 'react'
import {
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline'

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-br from-sky-900 to-amber-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-white">
            <img
              src="/images/gravital.png"
              alt="Gravital Digital"
              className="mb-6 h-32 w-32"
            />
            <h2 className="mb-4 text-3xl font-bold">
              <span className="font-logo text-sky-500">Gravital</span>
              <span className="font-logo text-amber-600">Digital</span>
            </h2>
            <h3 className="mb-4">SIGN UP FOR A FREE WEBSITE REVIEW!</h3>
            <p className="mb-8">
              Send me your website address and receive a free 30-minute
              consultation with Stephen Parker. Fill out the form or choose a
              connect option below!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="mr-2 h-6 w-6 text-sky-400" />
                <span>407-710-5497</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="mr-2 h-6 w-6 text-amber-400" />
                <span>go@gravitaldigital.com</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-6 w-6 text-amber-400" />

                <a
                  href="https://calendly.com/book-sparker888/30min"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Book a 30-min. meeting
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
