import contactImg from '../assets/contact.png'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

import {
  FaInstagram,
  FaLinkedin,
  FaBullhorn,
  FaPaperPlane
} from "react-icons/fa";

const Contact = ({ darkMode }) => {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs.sendForm(
      'service_7jtcfgb',
      'template_2x8r6tq',
      form.current,
      '74SDYwk50NHSRc7VP'
    )

    .then(() => {

      alert("Message sent successfully ✅");

      form.current.reset();

      setLoading(false);

    })

    .catch(() => {

      alert("Failed to send message ❌");

      setLoading(false);

    });

  };

  return (

    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{
        background: darkMode ? "#111827" : "#f9fafb"
      }}
    >

      {/* Blur Background */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/10 blur-[140px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >

          <div className="flex justify-center mb-5">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-2xl">
              <FaBullhorn />
            </div>

          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              color: darkMode ? "white" : "#111827"
            }}
          >

            Let's Grow Your{" "}

            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Brand
            </span>

          </h2>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280"
            }}
          >
            Looking for social media growth, lead generation,
            or performance marketing? Let's discuss how I can help
            scale your business online.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div
            className="relative"
            data-aos="fade-right"
          >

            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-lg mx-auto"
            />

            {/* Floating Card */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2
              lg:left-10 lg:translate-x-0
              rounded-2xl px-5 py-4 backdrop-blur-xl"
              style={{
                background: darkMode
                  ? "rgba(17,24,39,0.8)"
                  : "rgba(255,255,255,0.8)",
                border: darkMode
                  ? "1px solid #374151"
                  : "1px solid #e5e7eb"
              }}
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <FaPaperPlane />
                </div>

                <div>

                  <h4
                    className="font-semibold"
                    style={{
                      color: darkMode ? "white" : "#111827"
                    }}
                  >
                    Fast Response
                  </h4>

                  <p
                    className="text-sm"
                    style={{
                      color: darkMode ? "#9ca3af" : "#6b7280"
                    }}
                  >
                    Usually replies within a few hours
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-left"
            className="relative rounded-3xl p-6 sm:p-8 border backdrop-blur-xl flex flex-col gap-5 overflow-hidden"
            style={{
              background: darkMode
                ? "linear-gradient(to bottom right, rgba(31,41,55,0.95), rgba(17,24,39,0.95))"
                : "rgba(255,255,255,0.9)",
              borderColor: darkMode ? "#374151" : "#e5e7eb"
            }}
          >

            {/* Top Label */}
            <div className="flex items-center justify-between mb-2">

              <div>

                <h3
                  className="text-2xl font-bold"
                  style={{
                    color: darkMode ? "white" : "#111827"
                  }}
                >
                  Start a Project
                </h3>

                <p
                  className="text-sm mt-1"
                  style={{
                    color: darkMode ? "#9ca3af" : "#6b7280"
                  }}
                >
                  Fill out the form and let's connect.
                </p>

              </div>

              <div className="flex gap-3">

                <a
                  href="https://www.instagram.com/_arvindd33/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-500/10 text-orange-400 hover:scale-110 transition-all"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/arvind-sharma-76aa3a3a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-500/10 text-orange-400 hover:scale-110 transition-all"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

            {/* Name Inputs */}
            <div className="grid sm:grid-cols-2 gap-4">

              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#fff7ed",
                  color: darkMode ? "white" : "#111827"
                }}
                className="w-full px-4 py-3 rounded-xl border border-transparent focus:border-orange-500 outline-none transition-all"
              />

              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#fff7ed",
                  color: darkMode ? "white" : "#111827"
                }}
                className="w-full px-4 py-3 rounded-xl border border-transparent focus:border-orange-500 outline-none transition-all"
              />

            </div>

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              style={{
                backgroundColor: darkMode ? "#374151" : "#fff7ed",
                color: darkMode ? "white" : "#111827"
              }}
              className="w-full px-4 py-3 rounded-xl border border-transparent focus:border-orange-500 outline-none transition-all"
            />

            {/* Phone */}
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              style={{
                backgroundColor: darkMode ? "#374151" : "#fff7ed",
                color: darkMode ? "white" : "#111827"
              }}
              className="w-full px-4 py-3 rounded-xl border border-transparent focus:border-orange-500 outline-none transition-all"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your business or project..."
              required
              style={{
                backgroundColor: darkMode ? "#374151" : "#fff7ed",
                color: darkMode ? "white" : "#111827"
              }}
              className="w-full px-4 py-3 rounded-xl border border-transparent focus:border-orange-500 outline-none transition-all resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold text-base transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)"
              }}
            >

              {loading
                ? "Sending..."
                : "Send Message"}

            </button>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Contact