import {
  FaHeart,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaBullhorn
} from "react-icons/fa";

const Footer = ({ darkMode }) => {

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #030712, #111827)"
          : "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db"
      }}
    >

      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      <div className="container mx-auto px-4 py-14 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">

              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-xl">
                <FaBullhorn />
              </div>

              <div>

                <h3 className="text-3xl font-bold text-orange-500">
                  Arvind
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: darkMode ? "#9ca3af" : "#6b7280"
                  }}
                >
                  Digital Marketing Expert & Freelancer
                </p>

              </div>

            </div>

            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280"
              }}
            >
              Helping brands grow online through performance marketing,
              lead generation, social media growth, and strategic advertising.
            </p>

          </div>

          {/* Center */}
          <div className="flex flex-col items-center">

            <h4
              className="text-lg font-semibold mb-5"
              style={{
                color: darkMode ? "white" : "#111827"
              }}
            >
              Connect With Me
            </h4>

            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_arvindd33/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "#ffffff",
                  border: darkMode
                    ? "1px solid #374151"
                    : "1px solid #d1d5db"
                }}
              >
                <FaInstagram className="text-lg text-orange-400 group-hover:text-white transition-all duration-300" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arvind-sharma-76aa3a3a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "#ffffff",
                  border: darkMode
                    ? "1px solid #374151"
                    : "1px solid #d1d5db"
                }}
              >
                <FaLinkedin className="text-lg text-orange-400 group-hover:text-white transition-all duration-300" />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "#ffffff",
                  border: darkMode
                    ? "1px solid #374151"
                    : "1px solid #d1d5db"
                }}
              >
                <FaFacebookF className="text-lg text-orange-400 group-hover:text-white transition-all duration-300" />
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="text-center lg:text-right">

            <div
              className="inline-block px-5 py-3 rounded-2xl"
              style={{
                background: darkMode
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.7)",
                border: darkMode
                  ? "1px solid #374151"
                  : "1px solid #d1d5db"
              }}
            >

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: darkMode ? "#9ca3af" : "#6b7280"
                }}
              >
                © {currentYear} All Rights Reserved
              </p>

              <p
                className="text-sm flex items-center justify-center lg:justify-end gap-1 mt-2"
                style={{
                  color: darkMode ? "#9ca3af" : "#6b7280"
                }}
              >
                Designed with
                <FaHeart className="text-red-500" />
                by
                <span className="text-orange-500 font-medium">
                  Ronak Sharma
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;