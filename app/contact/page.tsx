"use client";

import { useState } from "react";

const countries = [
  "India", "United States", "United Kingdom", "Australia", "Canada",
  "Germany", "France", "Singapore", "UAE", "Other",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate submit; replace with your API/endpoint
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  }

  return (
    <div className="pt-32 section-padding">
      <div className="container-wide max-w-2xl">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-black/60">
          Get in Touch
        </span>
        <h1 className="font-display text-display-lg font-semibold text-black mt-4">
          Contact Us
        </h1>
        <p className="font-body text-black/60 mt-3">
          Send a message and we&apos;ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first" className="block font-accent text-xs uppercase tracking-wider text-black mb-2">
                First Name *
              </label>
              <input
                id="first"
                name="first"
                type="text"
                required
                className="w-full border border-white/20 bg-white px-4 py-3 font-body text-black placeholder:text-black/60/60 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="last" className="block font-accent text-xs uppercase tracking-wider text-black mb-2">
                Last Name
              </label>
              <input
                id="last"
                name="last"
                type="text"
                className="w-full border border-white/20 bg-white px-4 py-3 font-body text-black placeholder:text-black/60/60 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block font-accent text-xs uppercase tracking-wider text-black mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-white/20 bg-white px-4 py-3 font-body text-black placeholder:text-black/60/60 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-accent text-xs uppercase tracking-wider text-black mb-2">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full border border-white/20 bg-white px-4 py-3 font-body text-black placeholder:text-black/60/60 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="block font-accent text-xs uppercase tracking-wider text-black mb-2">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="w-full border border-white/20 bg-white px-4 py-3 font-body text-black placeholder:text-black/60/60 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                placeholder="City"
              />
            </div>
            <div>
              <label htmlFor="country" className="block font-accent text-xs uppercase tracking-wider text-black mb-2">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full border border-white/20 bg-white px-4 py-3 font-body text-black focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
              >
                <option value="">Select</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-accent text-xs uppercase tracking-wider text-black mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-white/20 bg-white px-4 py-3 font-body text-black placeholder:text-black/60/60 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent resize-y"
              placeholder="Your message..."
            />
          </div>
          {status === "done" && (
            <p className="font-body text-sm text-black">
              Thank you. We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-body text-sm text-golden">
              Something went wrong. Please try again.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </form>

        <p className="mt-12 font-body text-sm text-black/60">
          Or email directly:{" "}
          <a
            href="mailto:contactus@bethechangebyaradhana.com"
            className="text-black underline hover:no-underline"
          >
            contactus@bethechangebyaradhana.com
          </a>
        </p>
      </div>
    </div>
  );
}
