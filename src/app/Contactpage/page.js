"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white pt-28 px-6">

      {/* Heading */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Have a project in mind? Let’s talk and build something amazing together.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

        {/* Left Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail className="text-blue-400 w-7 h-7" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-300">contact@bitfix.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-purple-400 w-7 h-7" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-pink-400 w-7 h-7" />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-300">
                Kozhikode, Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold
                         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                         hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.027674483739!2d75.77876887523396!3d11.258753992048779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65e6a6c67b1a7%3A0xc5b8c1db1b77a2de!2sKozhikode%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </section>

    </main>
  );
}
