import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 font-outfit relative z-10">
        
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 glass rounded-lg flex items-center justify-center font-black text-neon-cyan">VJ</div>
           <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              Built with <span className="text-white">Neon Intensity</span> &copy; {new Date().getFullYear()}
           </p>
        </div>

        <div className="flex gap-6">
           <a href="https://github.com/Vijayakash-588" className="text-gray-500 hover:text-white transition-colors duration-300">
              <FaGithub size={20}/>
           </a>
           <a href="https://www.linkedin.com/in/vijay-akash-978069295/" className="text-gray-500 hover:text-white transition-colors duration-300">
              <FaLinkedin size={20}/>
           </a>
        </div>

        {/* Global HUD elements for footer */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-neon-cyan/10 blur-[60px] rounded-full pointer-events-none"></div>
      </div>
    </footer>
  );
};

export default Footer;
