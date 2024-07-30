"use client";

import React, { useState } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

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
            {submitted && (
              <p className="mt-4 text-green-500">Thank you! Your message has been sent.</p>
            )}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label
                  htmlFor="first-name"
                  className="block pl-2 font-medium text-medium text-sky-300"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full px-4 py-3 bg-white rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block pl-2 font-medium text-medium text-sky-300"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full px-4 py-3 bg-white rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block pl-2 font-medium text-medium text-sky-300"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full px-4 py-3 bg-white rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block pl-2 font-medium text-medium text-sky-300"
                  >
                    Phone
                  </label>
                  <span
                    id="phone-optional"
                    className="pl-2 text-medium text-amber-200"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full px-4 py-3 bg-white rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="website"
                  className="block pl-2 font-medium text-medium text-sky-300"
                >
                  Website address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="block w-full px-4 py-3 bg-white rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="block pl-2 font-medium text-medium text-sky-300"
                  >
                    Message
                  </label>
                  <span
                    id="message-max"
                    className="pl-2 text-medium text-amber-200"
                  >
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full px-4 py-3 bg-white border rounded-md shadow-sm border-slate-400 text-slate-900 focus:border-amber-400 focus:ring-amber-400"
                    aria-describedby="message-max"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  className="inline-block px-4 py-2 font-sans text-base font-medium transition duration-500 border border-transparent rounded-full bg-sky-600 text-amber-50 hover:bg-sky-900 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}