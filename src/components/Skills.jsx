import GoogleAds from '../assets/GoogleAds.png'
import MetaAds from '../assets/MetaAds.png'
import LeadGeneration from '../assets/LeadGeneration.png'
import SocialMedia from '../assets/SocialMedia.png'
import LocalSeo from '../assets/LocalSeo.png'
import Analytics from '../assets/Analytics.png'
import Automation from '../assets/Automation.png'

import Chatgpt from '../assets/Chatgpt.png'
import Claudeai from '../assets/Claudeai.png'

const Skills = ({ darkMode }) => {

  const skills = [
    {
      name: 'Google Ads',
      icon: GoogleAds,
      level: 95,
      color: 'from-blue-500 to-green-500'
    },

    {
      name: 'Meta Ads',
      icon: MetaAds,
      level: 93,
      color: 'from-blue-500 to-purple-500'
    },

    {
      name: 'Lead Generation',
      icon: LeadGeneration,
      level: 96,
      color: 'from-orange-500 to-yellow-500'
    },

    {
      name: 'Social Media Marketing',
      icon: SocialMedia,
      level: 92,
      color: 'from-pink-500 to-purple-500'
    },

    {
      name: 'Local SEO',
      icon: LocalSeo,
      level: 88,
      color: 'from-green-500 to-emerald-500'
    },

    {
      name: 'Google Analytics',
      icon: Analytics,
      level: 86,
      color: 'from-orange-500 to-amber-500'
    },

    {
      name: 'Marketing Automation',
      icon: Automation,
      level: 80,
      color: 'from-yellow-500 to-orange-500'
    },

    {
      name: 'ChatGPT',
      icon: Chatgpt,
      level: 92,
      color: 'from-green-500 to-emerald-500'
    },

    {
      name: 'Claude AI',
      icon: Claudeai,
      level: 88,
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: darkMode ? "#050816" : "#f9fafb"
      }}
      className="py-16 relative overflow-hidden"
    >

      <div className="container px-5 mx-auto">

        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">

          <h1
            className="sm:text-5xl text-4xl font-bold title-font mb-5"
            style={{
              color: darkMode ? "white" : "#1f2937"
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #FFD700, #F59E0B)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              }}
            >
              Expertise
            </span>
          </h1>

          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{
              color: darkMode ? "#d1d5db" : "#4b5563"
            }}
          >
            I help businesses grow through performance marketing,
            lead generation, paid advertising, and powerful digital strategies.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="flex flex-wrap -m-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          {skills.map((skill, index) => (

            <div
              key={index}
              className="p-4 lg:w-1/3 md:w-1/2 w-full"
              data-aos="zoom-in"
              data-aos-delay={`${200 + index * 100}`}
            >

              <div
                style={{
                  background: darkMode
                    ? 'linear-gradient(to bottom right, #111827, #0f172a)'
                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                  borderColor: darkMode ? '#374151' : '#e5e7eb'
                }}

                className="h-full p-6 rounded-2xl border
                hover:border-yellow-500/50 transition-all
                duration-500 hover:-translate-y-2 group
                hover:shadow-[0_0_35px_rgba(255,215,0,0.20)]"
              >

                {/* Icon + Name */}
                <div className="flex items-center mb-6">

                  <div
                    style={{
                      background: darkMode
                        ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                        : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                    }}

                    className="w-16 h-16 rounded-xl p-3 flex
                    items-center justify-center
                    group-hover:scale-110
                    transition-transform duration-300"
                  >

                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold ml-4"
                    style={{
                      color: darkMode ? 'white' : '#1f2937'
                    }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Proficiency */}
                <div className="mb-2 flex justify-between items-center">

                  <span
                    className="font-medium"
                    style={{
                      color: darkMode ? '#d1d5db' : '#6b7280'
                    }}
                  >
                    Proficiency
                  </span>

                  <span
                    style={{
                      background: 'linear-gradient(to right, #FFD700, #F59E0B)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                    className="font-bold"
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full rounded-full h-3 overflow-hidden"
                  style={{
                    backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                  }}
                >

                  <div
                    className={`h-full rounded-full bg-gradient-to-r
                    ${skill.color} transition-all
                    duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  >
                  </div>
                </div>

                {/* Bottom Line */}
                <div
                  className={`mt-6 pt-4 border-t ${darkMode
                    ? 'border-gray-700'
                    : 'border-gray-300'
                    }`}
                >

                  <div
                    className="h-1 rounded-full opacity-70
                    group-hover:w-full transition-all
                    duration-500 w-1/3"
                    style={{
                      background: 'linear-gradient(to right, #FFD700, #F59E0B)'
                    }}
                  >
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;