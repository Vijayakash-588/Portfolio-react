import {
  FaJsSquare, FaReact, FaNodeJs, FaGithub, FaJava, FaAws, FaGitAlt, FaAngular
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiPython, SiPostgresql, SiMysql, SiFirebase, SiDocker, SiPytorch, SiTensorflow, SiOpencv, SiOpenai, SiPostman, SiCplusplus
} from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { icon: <FaJsSquare className="text-[#f7df1e]/80" />, name: "JavaScript" },
    { icon: <SiPython className="text-[#3776ab]/80" />, name: "Python" },
    { icon: <FaJava className="text-[#5382a1]/80" />, name: "Java" },
    { icon: <SiCplusplus className="text-[#00599c]/80" />, name: "C / C++" },
    { icon: <FaReact className="text-[#61dbfb]/80" />, name: "React" },
    { icon: <FaAngular className="text-[#dd0031]/80" />, name: "Angular" },
    { icon: <FaNodeJs className="text-[#68a063]/80" />, name: "Node.js" },
    { icon: <SiMongodb className="text-[#47a248]/80" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-[#336791]/80" />, name: "PostgreSQL" },
    { icon: <SiMysql className="text-[#4479a1]/80" />, name: "MySQL" },
    { icon: <SiFirebase className="text-[#ffca28]/80" />, name: "Firebase" },
    { icon: <FaAws className="text-[#2596be]/80" />, name: "AWS" },
    { icon: <FaGithub className="text-white/80" />, name: "GitHub" },
    { icon: <FaGitAlt className="text-[#f05032]/80" />, name: "Git" },
    { icon: <SiDocker className="text-[#2496ed]/80" />, name: "Docker" },
    { icon: <SiPytorch className="text-[#ee4c2c]/80" />, name: "PyTorch" },
    { icon: <SiTensorflow className="text-[#ff6f00]/80" />, name: "TensorFlow" },
    { icon: <SiOpencv className="text-[#5c3ee8]/80" />, name: "OpenCV" },
    { icon: <SiOpenai className="text-aurora-primary" />, name: "LLM / AI" },
    { icon: <SiPostman className="text-[#ff6c37]/80" />, name: "Rest API" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div id="about" className="relative py-32 min-h-screen flex items-center overflow-hidden bg-dark-950">
      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-aurora-primary text-[10px] font-grotesk font-black uppercase tracking-[0.4em] block mb-6 px-1">Philosophy</span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none">
            Architecting <br />
            <span className="aurora-text">Intelligent Systems.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Bio & Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-10"
          >
            <div className="glass rounded-[2rem] p-10 border border-white/5 inner-glow group hover:border-aurora-primary/20 transition-all duration-700">
               <div className="text-gray-400 text-lg leading-relaxed font-light mb-8 italic">
                 "I operate at the intersection of extreme technical efficiency and cinematic user experiences."
               </div>
               <p className="text-gray-300 text-base leading-relaxed font-normal">
                 I'm <span className="text-white font-black">Vijay Akash</span>, specializing in the MERN stack with a deep obsession for micro-SaaS and AI-integrated architectures.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col gap-2 inner-glow">
                  <div className="text-2xl font-black text-white">10+</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Projects Deployed</div>
               </div>
               <div className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col gap-2 inner-glow">
                  <div className="text-2xl font-black text-white">CS</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Engineering</div>
               </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[10px] font-grotesk font-black uppercase tracking-[0.4em] text-gray-400">Core Technologies</h3>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-8 glass rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all duration-700 hover:border-aurora-primary/30 border border-white/5 inner-glow overflow-hidden"
                >
                  <div className="text-4xl group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-700 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-grotesk font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  
                  {/* Subtle sheen animation */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
