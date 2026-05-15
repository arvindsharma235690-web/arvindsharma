import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import CV from '../assets/CV.pdf'

import {
  DownloadIcon,
  Mail,
  TrendingUp,
  BarChart3,
  Target
} from 'lucide-react'

const Hero = ({ darkMode }) => {

  const socialIcons = [
    {
      icon: instagram,
      alt: 'Instagram',
      link: 'https://www.instagram.com/_arvindd33/'
    },
    {
      icon: linkedin,
      alt: 'LinkedIn',
      link: 'https://www.linkedin.com/in/arvind-sharma-76aa3a3a1/'
    }
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary:
      'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500 opacity-10',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary:
      'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (

    <div
      className='relative overflow-hidden min-h-screen flex flex-col'
      style={{
        background: darkMode ? '#111827' : '#f9fafb'
      }}
    >

      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-[140px] rounded-full'></div>

      <div className='absolute bottom-0 right-0 w-72 h-72 bg-amber-500/10 blur-[140px] rounded-full'></div>

      <section
        id='home'
        className='body-font z-10 relative'
      >

        <div
          className='container mx-auto flex px-4 sm:px-8 lg:px-14
          py-12 lg:py-24 flex-col lg:flex-row items-center justify-between
          lg:mt-0 mt-14 gap-14'
        >

          {/* LEFT SIDE */}
          <div
            className='lg:w-1/2 w-full flex flex-col items-center
            lg:items-start text-center lg:text-left'
            data-aos='fade-right'
          >

            {/* Tag */}
            <div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-orange-500/10 text-orange-400 text-sm font-medium mb-6'
            >

              <TrendingUp className='w-4 h-4' />

              Digital Marketing Expert

            </div>

            {/* Social Icons */}
            <div
              className='flex justify-center lg:justify-start
              gap-4 mb-8'
            >

              {socialIcons.map((social, index) => (

                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group w-12 h-12 rounded-2xl flex items-center justify-center
                  transition-all duration-300 hover:-translate-y-1'
                  style={{
                    background: darkMode
                      ? 'rgba(255,255,255,0.05)'
                      : '#ffffff',
                    border: darkMode
                      ? '1px solid #374151'
                      : '1px solid #e5e7eb'
                  }}
                >

                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-6 h-6 object-contain transition-all duration-300 ${
                      darkMode
                        ? 'group-hover:brightness-125'
                        : 'group-hover:brightness-50'
                    }`}
                  />

                </a>

              ))}

            </div>

            {/* Heading */}
            <h1
              className={`title-font text-4xl sm:text-5xl
              lg:text-6xl xl:text-7xl mb-6 font-bold leading-tight ${theme.textPrimary}`}
            >

              Grow Your Brand With{" "}

              <span
                className='text-transparent bg-clip-text'
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #f97316, #f59e0b)'
                }}
              >
                Smart Marketing
              </span>

            </h1>

            {/* Description */}
            <p
              className={`mb-8 leading-relaxed max-w-xl text-base sm:text-lg ${theme.textSecondary}`}
            >

              Hi, I'm Arvind Sharma — a passionate Digital Marketing Expert helping businesses scale through Google Ads, Meta Ads, SEO, lead generation, and high-performing social media strategies.

            </p>

            {/* Stats */}
            <div
              className='flex flex-wrap gap-6 mb-10 justify-center lg:justify-start'
            >

              <div
                className='rounded-2xl px-5 py-4'
                style={{
                  background: darkMode
                    ? 'rgba(255,255,255,0.04)'
                    : '#ffffff',
                  border: darkMode
                    ? '1px solid #374151'
                    : '1px solid #e5e7eb'
                }}
              >

                <h3 className='text-3xl font-bold text-orange-400'>
                  10+
                </h3>

                <p
                  className={`text-sm mt-1 ${theme.textSecondary}`}
                >
                  Projects
                </p>

              </div>

              <div
                className='rounded-2xl px-5 py-4'
                style={{
                  background: darkMode
                    ? 'rgba(255,255,255,0.04)'
                    : '#ffffff',
                  border: darkMode
                    ? '1px solid #374151'
                    : '1px solid #e5e7eb'
                }}
              >

                <h3 className='text-3xl font-bold text-orange-400'>
                  5+
                </h3>

                <p
                  className={`text-sm mt-1 ${theme.textSecondary}`}
                >
                  Marketing Skills
                </p>

              </div>

              <div
                className='rounded-2xl px-5 py-4'
                style={{
                  background: darkMode
                    ? 'rgba(255,255,255,0.04)'
                    : '#ffffff',
                  border: darkMode
                    ? '1px solid #374151'
                    : '1px solid #e5e7eb'
                }}
              >

                <h3 className='text-3xl font-bold text-orange-400'>
                  2+
                </h3>

                <p
                  className={`text-sm mt-1 ${theme.textSecondary}`}
                >
                  Experience
                </p>

              </div>

            </div>

            {/* Buttons */}
            <div className='w-full'>

              <div
                className='flex flex-col sm:flex-row justify-center
                lg:justify-start gap-4'
              >

                {/* Download CV */}
                <a href={CV} download className='w-full sm:w-auto'>

                  <button
                    className='w-full sm:w-auto
                    inline-flex items-center justify-center text-white
                    py-3 px-8 rounded-full text-base font-semibold
                    transition-all duration-300 hover:scale-105
                    hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]'
                    style={{
                      background:
                        'linear-gradient(to right, #f97316, #f59e0b)'
                    }}
                  >

                    <DownloadIcon className='w-5 h-5 mr-2' />

                    Download CV

                  </button>

                </a>

                {/* Contact */}
                <a href='#contact' className='w-full sm:w-auto'>

                  <button
                    className={`w-full sm:w-auto
                    inline-flex items-center justify-center
                    py-3 px-8 rounded-full text-base font-semibold
                    transition-all duration-300 hover:scale-105
                    ${theme.buttonSecondary}`}
                  >

                    <Mail className='w-5 h-5 mr-2' />

                    Contact Me

                  </button>

                </a>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div
            className='lg:w-1/2 w-full flex justify-center relative'
            data-aos='fade-left'
          >

            {/* Glow */}
            <div className='absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-orange-500/20 blur-[120px] rounded-full'></div>

            <div
              className='relative rounded-[40px] p-4 backdrop-blur-xl border'
              style={{
                background: darkMode
                  ? 'rgba(31,41,55,0.7)'
                  : 'rgba(255,255,255,0.8)',
                borderColor: darkMode
                  ? '#374151'
                  : '#e5e7eb'
              }}
            >

              <img
                src='https://res.cloudinary.com/dhovcmjae/image/upload/f_auto,q_auto/v1777022215/hero_ey4bcz.png'
                alt='Hero'
                className='w-[280px] sm:w-[420px] lg:w-[480px]
                object-cover rounded-[30px]
                hover:scale-105 transition-all duration-500'
              />

              {/* Floating Card 1 */}
              <div
                className='absolute -top-5 -left-5 rounded-2xl px-4 py-3 backdrop-blur-xl'
                style={{
                  background: darkMode
                    ? 'rgba(17,24,39,0.9)'
                    : 'rgba(255,255,255,0.9)',
                  border: darkMode
                    ? '1px solid #374151'
                    : '1px solid #e5e7eb'
                }}
              >

                <div className='flex items-center gap-3'>

                  <div className='w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400'>
                    <BarChart3 />
                  </div>

                  <div>

                    <h4
                      className='font-bold text-sm'
                      style={{
                        color: darkMode ? 'white' : '#111827'
                      }}
                    >
                      Ads Strategy
                    </h4>

                    <p
                      className='text-xs'
                      style={{
                        color: darkMode ? '#9ca3af' : '#6b7280'
                      }}
                    >
                      Google & Meta Ads
                    </p>

                  </div>

                </div>

              </div>

              {/* Floating Card 2 */}
              <div
                className='absolute -bottom-5 right-0 rounded-2xl px-4 py-3 backdrop-blur-xl'
                style={{
                  background: darkMode
                    ? 'rgba(17,24,39,0.9)'
                    : 'rgba(255,255,255,0.9)',
                  border: darkMode
                    ? '1px solid #374151'
                    : '1px solid #e5e7eb'
                }}
              >

                <div className='flex items-center gap-3'>

                  <div className='w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400'>
                    <Target />
                  </div>

                  <div>

                    <h4
                      className='font-bold text-sm'
                      style={{
                        color: darkMode ? 'white' : '#111827'
                      }}
                    >
                      Lead Generation
                    </h4>

                    <p
                      className='text-xs'
                      style={{
                        color: darkMode ? '#9ca3af' : '#6b7280'
                      }}
                    >
                      High Conversion Focus
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
};

export default Hero;