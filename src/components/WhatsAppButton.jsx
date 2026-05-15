import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const WhatsAppButton = ({ darkMode }) => {

  const [showText, setShowText] = useState(false);

  useEffect(() => {

    // Function to handle open & close loop
    const interval = setInterval(() => {

      // Show text
      setShowText(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setShowText(false);
      }, 4000);

    }, 8000); // Repeat every 8 seconds

    // First time instantly after load
    setTimeout(() => {
      setShowText(true);

      setTimeout(() => {
        setShowText(false);
      }, 4000);

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">

      {/* Animated Chat Text */}
      <div
        className={`
        flex
        items-center
        overflow-hidden
        transition-all duration-700 ease-in-out
        rounded-full shadow-lg backdrop-blur-xl
        ${
          showText
            ? "max-w-[180px] sm:max-w-xs opacity-100 px-4 py-2"
            : "max-w-0 opacity-0 px-0 py-0"
        }
        `}
        style={{
          background: darkMode
            ? "rgba(31,41,55,0.95)"
            : "rgba(255,255,255,0.95)",
          color: darkMode ? "white" : "#111827",
          border: darkMode
            ? "1px solid #374151"
            : "1px solid #e5e7eb"
        }}
      >

        <p className="text-xs sm:text-sm font-medium whitespace-nowrap">
          Let's Grow Your Brand 🚀
        </p>

      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917427843424?text=Hi%20Arvind,%20I%20want%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="
        w-14 h-14 sm:w-16 sm:h-16
        rounded-full
        bg-green-500
        flex items-center justify-center
        text-white text-3xl sm:text-4xl
        shadow-lg shadow-green-500/40
        hover:scale-110
        transition-all duration-300
        animate-bounce"
      >

        <FaWhatsapp />

      </a>

    </div>

  );
};

export default WhatsAppButton;