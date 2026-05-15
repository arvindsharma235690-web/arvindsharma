import {
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaUsers,
  FaGoogle,
  FaInstagram
} from "react-icons/fa";

const About = ({ darkMode }) => {

  const skills = [
    {
      icon: <FaSearch />,
      title: "SEO Optimization"
    },
    {
      icon: <FaInstagram />,
      title: "Social Media Marketing"
    },
    {
      icon: <FaGoogle />,
      title: "Google & Meta Ads"
    },
    {
      icon: <FaUsers />,
      title: "Lead Generation"
    }
  ];

  return (

    <section
      id="about"
      className="relative min-h-screen overflow-hidden flex items-center py-20 px-4 sm:px-6"
      style={{
        background: darkMode ? "#111827" : "#f9fafb"
      }}
    >

      {/* Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT IMAGE SECTION */}
        <div
          className="relative flex justify-center"
          data-aos="fade-right"
        >

          {/* Circle Glow */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-orange-500/20 blur-[120px]"></div>

          {/* Main Image */}
          <div
            className="relative rounded-[40px] overflow-hidden border p-3 backdrop-blur-xl"
            style={{
              background: darkMode
                ? "rgba(31,41,55,0.8)"
                : "rgba(255,255,255,0.8)",
              borderColor: darkMode ? "#374151" : "#e5e7eb"
            }}
          >

            <img
              src="https://res.cloudinary.com/dhovcmjae/image/upload/f_auto,q_auto/v1777022191/About_nczer6.png"
              alt="About"
              className="w-[280px] sm:w-[400px] lg:w-[450px] object-cover rounded-[30px]"
            />

            {/* Floating Card 1 */}
            <div
              className="absolute -top-5 -left-5 px-4 py-3 rounded-2xl backdrop-blur-xl"
              style={{
                background: darkMode
                  ? "rgba(17,24,39,0.9)"
                  : "rgba(255,255,255,0.9)",
                border: darkMode
                  ? "1px solid #374151"
                  : "1px solid #e5e7eb"
              }}
            >

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <FaChartLine />
                </div>

                <div>

                  <h4
                    className="font-bold text-sm"
                    style={{
                      color: darkMode ? "white" : "#111827"
                    }}
                  >
                    Marketing Growth
                  </h4>

                  <p
                    className="text-xs"
                    style={{
                      color: darkMode ? "#9ca3af" : "#6b7280"
                    }}
                  >
                    Strategy & Analytics
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Card 2 */}
            <div
              className="absolute -bottom-5 right-0 px-4 py-3 rounded-2xl backdrop-blur-xl"
              style={{
                background: darkMode
                  ? "rgba(17,24,39,0.9)"
                  : "rgba(255,255,255,0.9)",
                border: darkMode
                  ? "1px solid #374151"
                  : "1px solid #e5e7eb"
              }}
            >

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <FaBullhorn />
                </div>

                <div>

                  <h4
                    className="font-bold text-sm"
                    style={{
                      color: darkMode ? "white" : "#111827"
                    }}
                  >
                    Brand Promotion
                  </h4>

                  <p
                    className="text-xs"
                    style={{
                      color: darkMode ? "#9ca3af" : "#6b7280"
                    }}
                  >
                    Ads & Campaigns
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div
          className="text-center lg:text-left"
          data-aos="fade-left"
        >

          {/* Small Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">

            <FaBullhorn />

            Digital Marketing Expert

          </div>

          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              color: darkMode ? "white" : "#111827"
            }}
          >

            Helping Brands Grow In The{" "}

            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Digital World
            </span>

          </h2>

          {/* Description */}
          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280"
            }}
          >
            I’m an aspiring Digital Marketer passionate about helping businesses
            grow through powerful marketing strategies, social media campaigns,
            SEO optimization, and performance advertising.

            I recently completed my Digital Marketing training from Arena Trainings
            and currently work on real-world marketing projects to improve online
            visibility, engagement, and lead generation.
          </p>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">

            {skills.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl p-4 border transition-all hover:-translate-y-1"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.03)"
                    : "#ffffff",
                  borderColor: darkMode ? "#374151" : "#e5e7eb"
                }}
              >

                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-lg">
                  {item.icon}
                </div>

                <h4
                  className="font-semibold"
                  style={{
                    color: darkMode ? "white" : "#111827"
                  }}
                >
                  {item.title}
                </h4>

              </div>

            ))}

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10 justify-center lg:justify-start">

            <div>

              <h3 className="text-4xl font-bold text-orange-400">
                10+
              </h3>

              <p
                className="text-sm mt-1"
                style={{
                  color: darkMode ? "#9ca3af" : "#6b7280"
                }}
              >
                Campaigns Managed
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-orange-400">
                5+
              </h3>

              <p
                className="text-sm mt-1"
                style={{
                  color: darkMode ? "#9ca3af" : "#6b7280"
                }}
              >
                Marketing Skills
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-orange-400">
                2+
              </h3>

              <p
                className="text-sm mt-1"
                style={{
                  color: darkMode ? "#9ca3af" : "#6b7280"
                }}
              >
                Years Learning
              </p>

            </div>

          </div>

          {/* Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]"
            style={{
              background:
                "linear-gradient(to right, #f97316, #f59e0b)"
            }}
          >

            Let's Work Together

          </a>

        </div>

      </div>

    </section>

  )
}

export default About