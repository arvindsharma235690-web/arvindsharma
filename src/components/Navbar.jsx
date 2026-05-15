import { motion } from 'framer-motion';
import {
  Menu,
  Moon,
  Sun,
  X,
  TrendingUp,
  BarChart3
} from 'lucide-react';

import { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {

  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ];

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  }

  return (

    <div className='fixed top-0 left-0 w-full z-50 px-4 py-4'>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='max-w-7xl mx-auto relative overflow-hidden rounded-3xl backdrop-blur-xl border shadow-2xl'
        style={{
          background: darkMode
            ? 'rgba(17,24,39,0.75)'
            : 'rgba(255,255,255,0.75)',
          borderColor: darkMode
            ? '#374151'
            : '#e5e7eb'
        }}
      >

        {/* Glow Effect */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-orange-500/10 blur-[90px] rounded-full'></div>

        <div className='relative z-10 flex items-center justify-between px-5 lg:px-8 py-4'>

          {/* LOGO */}
          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            className='flex items-center gap-3 cursor-pointer'
          >

            <div className='w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400'>

              <BarChart3 className='w-6 h-6' />

            </div>

            <div>

              <h2
                className='text-xl lg:text-2xl font-bold'
                style={{
                  color: darkMode ? 'white' : '#111827'
                }}
              >

                Arvind<span className='text-orange-500'>.</span>

              </h2>

              <p
                className='text-xs'
                style={{
                  color: darkMode ? '#9ca3af' : '#6b7280'
                }}
              >
                Digital Marketer
              </p>

            </div>

          </motion.a>

          {/* DESKTOP NAV */}
          <div className='hidden lg:flex items-center gap-8'>

            {navItems.map((item) => (

              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className='relative group'
              >

                <motion.span
                  whileHover={{ y: -2 }}
                  className={`font-medium transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-orange-400'
                      : darkMode
                        ? 'text-gray-300 hover:text-orange-400'
                        : 'text-gray-700 hover:text-orange-500'
                  }`}
                >

                  {item.name}

                </motion.span>

                {/* Active Indicator */}
                {activeSection === item.name.toLowerCase() && (

                  <motion.div
                    layoutId='navbar-indicator'
                    className='absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-amber-500'
                  />

                )}

              </a>

            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className='flex items-center gap-3'>

            {/* Marketing Badge */}
            <div
              className='hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium'
            >

              <TrendingUp className='w-4 h-4' />

              Growth Expert

            </div>

            {/* Dark Mode */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? 'bg-white/5 border border-gray-700'
                  : 'bg-gray-100 border border-gray-200'
              }`}
            >

              {darkMode ? (
                <Sun className='w-5 h-5 text-yellow-300' />
              ) : (
                <Moon className='w-5 h-5 text-gray-700' />
              )}

            </motion.button>

            {/* CTA Button */}
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='hidden lg:inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-semibold transition-all duration-300 hover:shadow-[0_0_35px_rgba(249,115,22,0.45)]'
              style={{
                background:
                  'linear-gradient(to right, #f97316, #f59e0b)'
              }}
            >

              Let's Talk

            </motion.a>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden w-11 h-11 rounded-2xl flex items-center justify-center ${
                darkMode
                  ? 'bg-white/5 border border-gray-700'
                  : 'bg-gray-100 border border-gray-200'
              }`}
            >

              {isMenuOpen ? (

                <X
                  className={`w-5 h-5 ${
                    darkMode
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}
                />

              ) : (

                <Menu
                  className={`w-5 h-5 ${
                    darkMode
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}
                />

              )}

            </motion.button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden border-t px-5 py-5 space-y-3'
            style={{
              borderColor: darkMode
                ? '#374151'
                : '#e5e7eb'
            }}
          >

            {navItems.map((item) => (

              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className='block'
              >

                <motion.div
                  whileHover={{ x: 5 }}
                  className={`rounded-2xl px-4 py-3 text-center font-medium transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? darkMode
                        ? 'bg-orange-500/10 text-orange-400'
                        : 'bg-orange-50 text-orange-500'
                      : darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                  }`}
                >

                  {item.name}

                </motion.div>

              </a>

            ))}

            {/* Mobile Button */}
            <motion.a
              href='#contact'
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
              className='block text-center py-3 rounded-2xl text-white font-semibold mt-4'
              style={{
                background:
                  'linear-gradient(to right, #f97316, #f59e0b)'
              }}
            >

              Let's Talk

            </motion.a>

          </motion.div>

        )}

      </motion.nav>

    </div>

  )
}

export default Navbar;