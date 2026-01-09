"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs.send(
      "service_bd211e4",        
      "template_f7j355r",   
      {
        from_name: name,
        from_email: email,
        message: message,
        date: new Date().toLocaleString(),
      },
      "TmykMe89Lk37Keumh"       
    )
    .then(() => {
      alert("Message sent successfully ✅");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch(() => {
      alert("Failed to send message ❌");
    })
    .finally(() => {
      setLoading(false);
    });
  };

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
              <p className="text-gray-300">Info@bitfixtechnolologies.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-purple-400 w-7 h-7" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-300">+91 8089071500</p>
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-bold
                         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                         hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31304.609256776424!2d75.77927679999999!3d11.255808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba645e5c6c53b93%3A0xa1b36e9978b5ee11!2sBitFix%20Technologies%20%E2%80%93%20Software%20%26%20Web%20Development%20Company!5e0!3m2!1sen!2sin!4v1767940348712!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>

    </main>
  );
}
