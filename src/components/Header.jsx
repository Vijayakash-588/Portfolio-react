import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "project", "contact"];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div className={`max-w-5xl mx-auto px-6 flex items-center justify-between font-outfit transition-all duration-500 ${
        scrolled
          ? "glass-strong rounded-2xl py-3 px-6 mx-6 lg:mx-auto shadow-aurora"
          : ""
      }`}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-black tracking-tighter cursor-pointer"
        >
          <span className="aurora-text">VA</span>
          <span className="text-gray-600 text-sm font-grotesk ml-1">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-gray-400 bg-white/[0.03] rounded-full px-2 py-1.5 border border-white/5">
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer px-4 py-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-300 capitalize block"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Socials + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 text-gray-500">
            <motion.a
              href="https://github.com/Vijayakash-588"
              className="hover:text-aurora-indigo transition-colors p-2 rounded-lg hover:bg-white/5"
              whileHover={{ y: -2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vijay-akash-978069295/"
              className="hover:text-aurora-indigo transition-colors p-2 rounded-lg hover:bg-white/5"
              whileHover={{ y: -2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </motion.a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 bg-dark-950/98 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-white p-2"
              >
                <HiX size={28} />
              </button>

              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black capitalize text-white hover:aurora-text transition-all cursor-pointer"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-6 mt-6">
                <a href="https://github.com/Vijayakash-588" className="text-gray-400 hover:text-aurora-indigo transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vijay-akash-978069295/" className="text-gray-400 hover:text-aurora-indigo transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
