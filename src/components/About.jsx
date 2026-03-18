import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma, FaNode, FaJava
} from "react-icons/fa";
import {
  SiTailwindcss, SiBootstrap, SiExpress, SiNextdotjs, SiMongodb, SiPostman, SiPython
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm } from "react-icons/io5";

const About = () => {
  const skills = [
    { icon: <FaHtml5 className="text-[#e34c26]" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-[#264de4]" />, name: "CSS3" },
    { icon: <FaJsSquare className="text-[#f7df1e]" />, name: "JS" },
    { icon: <SiTailwindcss className="text-[#38bdf8]" />, name: "Tailwind" },
    { icon: <FaReact className="text-[#61dbfb]" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-[#68a063]" />, name: "Node.js" },
    { icon: <SiMongodb className="text-[#47a248]" />, name: "MongoDB" },
    { icon: <FaJava className="text-[#5382a1]" />, name: "Java" },
    { icon: <SiPython className="text-[#3776ab]" />, name: "Python" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <FaFigma className="text-[#F24E1E]" />, name: "Figma" },
  ];

  return (
    <div id="about" className="relative py-24 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[85%] mx-auto font-outfit relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Bento Left: Info */}
          <div className="lg:col-span-5 space-y-12 animate-reveal">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-neon-cyan mb-4">Identity_Protocol</h2>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Architecting <br/> <span className="text-neon-orange">Digital Future</span>
              </h1>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m <span className="text-white font-bold">Vijay Akash</span>, a MERN stack specialist deeply invested in building micro-SaaS and high-performance client applications. 
              </p>
              <div className="p-6 glass border-l-4 border-neon-cyan rounded-r-2xl bg-white/5">
                 <p className="italic text-gray-300">
                    "I believe in the intersection of efficiency and aesthetics. Every line of code should contribute to a seamless user story."
                 </p>
              </div>
              <p>Currently finishing my B.E in CS Engineering, having already deployed 10+ professional projects.</p>
            </div>
          </div>

          {/* Bento Right: Skills Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 animate-reveal" style={{ animationDelay: '200ms' }}>
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className="group relative p-8 glass rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-neon-cyan/20 border border-white/5"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform duration-500">
                  {skill.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                
                {/* HUD Decoration */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-4 h-[1px] bg-white/10"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
