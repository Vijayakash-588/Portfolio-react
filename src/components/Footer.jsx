import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative py-14 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-aurora-primary/30 to-transparent" />
      <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[420px] h-[220px] bg-aurora-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 font-outfit relative z-10">
        {/* Logo + Copy */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="aurora-text text-xl font-black">VA</span>
            <span className="text-gray-600 text-xs font-grotesk">•</span>
            <span className="px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-[9px] font-grotesk font-black tracking-[0.2em] uppercase">Open to Work</span>
          </div>
          <p className="text-gray-500 text-xs font-grotesk font-medium">
            Built with <FaHeart className="inline text-aurora-royal text-[10px] mx-0.5" /> &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-5 text-[10px] font-grotesk font-black tracking-[0.18em] uppercase text-gray-500">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Home</Link>
          <Link to="project" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Vijayakash-588"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-aurora-primary transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-akash-978069295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-aurora-primary transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
