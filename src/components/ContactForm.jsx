
import React from 'react'
import {
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline'

export default function ContactForm() {

  return (
    <div className="py-16 bg-gradient-to-br from-sky-900 to-amber-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-white">
            <img
              src="/images/gravital.png"
              alt="Gravital Digital"
              className="w-32 h-32 mb-6"
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
                <PhoneIcon className="w-6 h-6 mr-2 text-sky-400" />
                <span>407-710-5497</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-6 h-6 mr-2 text-amber-400" />
                <span>go@gravitaldigital.com</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-6 h-6 mr-2 text-amber-400" />

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
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p hidden>
    <label>Don't fill this out: <input name="bot-field" /></label>
  </p>
  <input type="text" name="name" />
  <button type="submit">Send</button>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}
