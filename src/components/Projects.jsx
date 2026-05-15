import { FaExternalLinkAlt, FaChartLine } from "react-icons/fa";
import { useState } from "react";

import before1 from "../assets/before.png";
import before2 from "../assets/before2.png";

import after1 from "../assets/after.png";
import after2 from "../assets/after2.png";

const Projects = ({ darkMode }) => {

  const [popup, setPopup] = useState({
    show: false,
    message: ""
  });

  const projects = [
    {
      id: 1,

      title: "Instagram Growth Campaign",

      category: "Social Media Marketing",

      desc:
        "Organic Instagram growth strategy for a business through content optimization, engagement strategy, and consistent posting.",

      beforeImages: [before1, before2],

      afterImages: [after1, after2],

      stats: [
        {
          number: "+4",
          label: "Followers Growth"
        },
        {
          number: "+12.5K",
          label: "Profile Views"
        },
        {
          number: "+850",
          label: "Engagements"
        },
        {
          number: "+65%",
          label: "Improvement"
        }
      ],

      tags: [
        "Instagram Growth",
        "Content Strategy",
        "Reels Optimization",
        "Audience Engagement",
        "Organic Reach"
      ],

      points: [
        "Content Strategy & Planning",
        "Consistent Reels Posting",
        "Caption & Hashtag Optimization",
        "Audience Engagement Strategy"
      ],

      demo: "#",
      noDemo: true
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
      style={{
        background: darkMode ? "#111827" : "#f9fafb"
      }}
    >

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">

          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              color: darkMode ? "white" : "#111827"
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-sm sm:text-base"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280"
            }}
          >
            Real campaigns, real strategies, and real growth results through
            social media marketing.
          </p>

        </div>

        {/* Projects */}
        <div className="space-y-10">

          {projects.map((project, index) => (

            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-3xl border overflow-hidden backdrop-blur-xl"
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right, rgba(31,41,55,0.95), rgba(17,24,39,0.95))"
                  : "white",
                borderColor: darkMode ? "#374151" : "#e5e7eb"
              }}
            >

              {/* Top */}
              <div className="p-6 sm:p-8 border-b border-gray-700/40">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                  {/* Left */}
                  <div>

                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-xl">
                        <FaChartLine />
                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>

                        <span className="inline-block mt-1 px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                          {project.category}
                        </span>

                      </div>

                    </div>

                    <p
                      className="max-w-3xl leading-relaxed"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6b7280"
                      }}
                    >
                      {project.desc}
                    </p>

                  </div>

                  {/* Button */}
                  <a
                    href={project.noDemo ? "#" : project.demo}
                    onClick={(e) => {

                      if (project.noDemo) {

                        e.preventDefault();

                        setPopup({
                          show: true,
                          message:
                            "Detailed live campaign preview is not available."
                        });

                      }

                    }}
                    className="px-6 py-3 rounded-xl text-white font-medium flex items-center gap-2 justify-center"
                    style={{
                      background:
                        "linear-gradient(to right, #f97316, #f59e0b)"
                    }}
                  >

                    <FaExternalLinkAlt />

                    View Details

                  </a>

                </div>

              </div>

              {/* Before After Section */}
              <div className="grid lg:grid-cols-2 gap-8 p-6 sm:p-8">

                {/* Before */}
                <div
                  className="rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: darkMode ? "#374151" : "#e5e7eb"
                  }}
                >

                  <div className="bg-red-500 text-white text-xs font-semibold px-4 py-2 w-fit rounded-br-xl">
                    BEFORE
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">

                    {project.beforeImages.map((img, idx) => (

                      <img
                        key={idx}
                        src={img}
                        alt="Before"
                        className="w-full h-[260px] object-cover rounded-xl hover:scale-[1.02] transition-all duration-300"
                      />

                    ))}

                  </div>

                  <div className="p-4 text-sm text-gray-400">
                    Low engagement and limited reach
                  </div>

                </div>

                {/* After */}
                <div
                  className="rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: darkMode ? "#374151" : "#e5e7eb"
                  }}
                >

                  <div className="bg-green-500 text-white text-xs font-semibold px-4 py-2 w-fit rounded-br-xl">
                    AFTER
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">

                    {project.afterImages.map((img, idx) => (

                      <img
                        key={idx}
                        src={img}
                        alt="After"
                        className="w-full h-[260px] object-cover rounded-xl hover:scale-[1.02] transition-all duration-300"
                      />

                    ))}

                  </div>

                  <div className="p-4 text-sm text-green-400">
                    Higher engagement and profile activity
                  </div>

                </div>

              </div>

              {/* Bottom */}
              <div className="grid lg:grid-cols-2 gap-6 p-6 sm:p-8 pt-0">

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">

                  {project.stats.map((item, idx) => (

                    <div
                      key={idx}
                      className="rounded-2xl border p-5"
                      style={{
                        background: darkMode
                          ? "rgba(255,255,255,0.03)"
                          : "#ffffff",
                        borderColor: darkMode ? "#374151" : "#e5e7eb"
                      }}
                    >

                      <h4 className="text-3xl font-bold text-orange-400 mb-2">
                        {item.number}
                      </h4>

                      <p
                        className="text-sm"
                        style={{
                          color: darkMode ? "#d1d5db" : "#6b7280"
                        }}
                      >
                        {item.label}
                      </p>

                    </div>

                  ))}

                </div>

                {/* Strategy */}
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    background: darkMode
                      ? "rgba(255,255,255,0.03)"
                      : "#ffffff",
                    borderColor: darkMode ? "#374151" : "#e5e7eb"
                  }}
                >

                  <h4 className="text-xl font-bold text-orange-400 mb-5">
                    What I Did
                  </h4>

                  <div className="space-y-3">

                    {project.points.map((point, idx) => (

                      <div
                        key={idx}
                        className="flex items-center gap-3"
                      >

                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>

                        <p
                          className="text-sm"
                          style={{
                            color: darkMode ? "#d1d5db" : "#6b7280"
                          }}
                        >
                          {point}
                        </p>

                      </div>

                    ))}

                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.tags.map((tag, idx) => (

                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          background: darkMode
                            ? "#374151"
                            : "#f3f4f6",
                          color: darkMode
                            ? "#d1d5db"
                            : "#4b5563"
                        }}
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Popup */}
      {popup.show && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

          <div
            className={`w-[90%] max-w-sm rounded-3xl p-6 text-center ${
              darkMode
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-800"
            }`}
          >

            <h3 className="text-xl font-bold mb-3">
              Notice
            </h3>

            <p className="text-sm mb-5">
              {popup.message}
            </p>

            <button
              onClick={() =>
                setPopup({
                  show: false,
                  message: ""
                })
              }
              className="px-6 py-2 rounded-full text-white"
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)"
              }}
            >
              OK
            </button>

          </div>

        </div>

      )}

    </section>
  );
};

export default Projects;