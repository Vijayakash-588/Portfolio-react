import {
  FaJsSquare, FaReact, FaNodeJs, FaGithub, FaJava, FaAws, FaGitAlt, FaAngular
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiPython, SiPostgresql, SiMysql, SiFirebase, SiDocker, SiPytorch, SiTensorflow, SiOpencv, SiOpenai, SiPostman, SiCplusplus
} from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { icon: <FaJsSquare className="text-[#f7df1e]" />, name: "JavaScript" },
    { icon: <SiPython className="text-[#3776ab]" />, name: "Python" },
    { icon: <FaJava className="text-[#5382a1]" />, name: "Java" },
    { icon: <SiCplusplus className="text-[#00599c]" />, name: "C / C++" },
    { icon: <FaReact className="text-[#61dbfb]" />, name: "React" },
    { icon: <FaAngular className="text-[#dd0031]" />, name: "Angular" },
    { icon: <FaNodeJs className="text-[#68a063]" />, name: "Node.js" },
    { icon: <SiMongodb className="text-[#47a248]" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
    { icon: <SiMysql className="text-[#4479a1]" />, name: "MySQL" },
    { icon: <SiFirebase className="text-[#ffca28]" />, name: "Firebase" },
    { icon: <FaAws className="text-[#2596be]" />, name: "AWS" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <FaGitAlt className="text-[#f05032]" />, name: "Git" },
    { icon: <SiDocker className="text-[#2496ed]" />, name: "Docker" },
    { icon: <SiPytorch className="text-[#ee4c2c]" />, name: "PyTorch" },
    { icon: <SiTensorflow className="text-[#ff6f00]" />, name: "TensorFlow" },
    { icon: <SiOpencv className="text-[#5c3ee8]" />, name: "OpenCV" },
    { icon: <SiOpenai className="text-[#412991]" />, name: "LLM / AI" },
    { icon: <SiPostman className="text-[#ff6c37]" />, name: "Rest API" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div id="about" className="relative py-28 min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aurora-violet/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-aurora-indigo text-xs font-grotesk font-bold uppercase tracking-[0.3em] block mb-4">About Me</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Architecting the{" "}
            <span className="aurora-text">Digital Future</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Bio Card */}
            <div className="glass rounded-3xl p-8 border border-white/5 hover:border-aurora-indigo/20 transition-colors duration-500">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm <span className="text-white font-bold">Vijay Akash</span>, a MERN stack specialist deeply invested in building micro-SaaS and high-performance client applications.
              </p>
            </div>

            {/* Quote Card */}
            <div className="relative glass rounded-3xl p-8 border border-white/5 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-aurora-indigo to-aurora-violet rounded-full" />
              <p className="italic text-gray-400 leading-relaxed pl-4">
                "I believe in the intersection of efficiency and aesthetics. Every line of code should contribute to a seamless user story."
              </p>
            </div>

            {/* Status Card */}
            <div className="glass rounded-3xl p-8 border border-white/5 hover:border-aurora-amber/20 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-aurora-amber rounded-full animate-pulse" />
                <span className="text-aurora-amber text-xs font-grotesk font-bold uppercase tracking-widest">Current Status</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Finishing B.E in CS Engineering, having already deployed <span className="text-white font-bold">10+ professional projects</span>.
              </p>
            </div>
          </motion.div>

          {/* Right: Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-xs font-grotesk font-bold uppercase tracking-[0.3em] text-gray-500 mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group relative p-6 glass rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:border-aurora-indigo/30 border border-white/5 cursor-default"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-grotesk font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-aurora-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
