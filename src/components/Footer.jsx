import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-aurora-primary/30 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[520px] h-[240px] bg-aurora-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-16 right-[15%] w-48 h-48 bg-aurora-accent/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-outfit relative z-10">
        <div className="glass rounded-3xl border border-white/10 px-6 md:px-10 py-8 md:py-10 mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
          <div>
            <p className="text-[10px] font-grotesk font-black tracking-[0.22em] uppercase text-gray-500 mb-3">Ready to build</p>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Let&apos;s turn your next product idea into a reliable release.
            </h3>
            <p className="mt-3 text-sm text-gray-400 max-w-xl">
              Open to software engineering roles, freelance builds, and product-focused collaboration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:vijayakashm08@gmail.com"
              className="footer-cta-primary inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-aurora-primary/90 to-aurora-accent/90 text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase border border-white/20 hover:scale-[1.03] transition-transform"
            >
              Start a Conversation
            </a>
            <a
              href="akash new.pdf"
              className="footer-cta-secondary inline-flex items-center px-6 py-3 rounded-full glass border border-white/15 text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase hover:border-aurora-primary/45 hover:text-aurora-primary transition-all"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + Copy */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="aurora-text text-xl font-black">VA</span>
              <span className="text-gray-600 text-xs font-grotesk">•</span>
              <span className="px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-[9px] font-grotesk font-black tracking-[0.2em] uppercase">Open to Work</span>
              <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-gray-400 text-[9px] font-grotesk font-black tracking-[0.2em] uppercase">Replies in 24h</span>
            </div>
            <p className="text-gray-500 text-xs font-grotesk font-medium">
              Built with <FaHeart className="inline text-aurora-royal text-[10px] mx-0.5" /> &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 text-[10px] font-grotesk font-black tracking-[0.18em] uppercase text-gray-500">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Home</Link>
            <Link to="project" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Projects</Link>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Journey</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Vijayakash-588"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-aurora-primary transition-colors duration-300 p-2.5 rounded-xl border border-white/10 hover:border-aurora-primary/35 hover:bg-white/5"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-akash-978069295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-aurora-primary transition-colors duration-300 p-2.5 rounded-xl border border-white/10 hover:border-aurora-primary/35 hover:bg-white/5"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
