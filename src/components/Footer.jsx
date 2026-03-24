import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-aurora-indigo/30 to-transparent" />

      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-outfit relative z-10">
        {/* Logo + Copy */}
        <div className="flex items-center gap-3">
          <span className="aurora-text text-xl font-black">VA</span>
          <span className="text-gray-600 text-xs font-grotesk">•</span>
          <p className="text-gray-500 text-xs font-grotesk font-medium">
            Built with <FaHeart className="inline text-aurora-rose text-[10px] mx-0.5" /> &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Vijayakash-588"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-aurora-indigo transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-akash-978069295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-aurora-indigo transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
