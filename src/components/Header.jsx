import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "py-4 glass border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[90%] mx-auto flex items-center justify-between font-outfit">
        {/* Logo / Name */}
        <div className="text-2xl font-black tracking-tighter group cursor-pointer">
          <span className="text-white group-hover:text-neon-cyan transition-colors">V</span>
          <span className="text-neon-orange">A</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            {["home", "about", "project", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-white transition-all relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <a href="https://github.com/Vijayakash-588" className="hover:text-neon-cyan transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/vijay-akash-978069295/" className="hover:text-neon-cyan transition-colors">
              <FaLinkedin size={22} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-neon-cyan"
          >
            {isMenuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {["home", "about", "project", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-widest text-white hover:text-neon-cyan transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="flex gap-6 mt-4">
             <a href="https://github.com/Vijayakash-588" className="text-gray-400 hover:text-neon-cyan">
                <FaGithub size={28} />
             </a>
             <a href="https://www.linkedin.com/in/vijay-akash-978069295/" className="text-gray-400 hover:text-neon-cyan">
                <FaLinkedin size={28} />
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
