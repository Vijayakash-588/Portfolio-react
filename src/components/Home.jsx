import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { FaEnvelope, FaArrowDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Years Exp" },
    { value: "5+", label: "Technologies" },
  ];

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden font-outfit">
      {/* ═══════════ AMBIENT BACKGROUND ═══════════ */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-aurora-primary/5 rounded-full blur-[120px] animate-drift" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-aurora-secondary/5 rounded-full blur-[100px] animate-drift" style={{ animationDelay: '-2s' }} />
      </div>

      <div ref={heroRef} className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* ═══════════ LEFT SIDE: CONTENT ═══════════ */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="flex flex-col items-start text-left space-y-10 order-2 lg:order-1"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/5 transition-colors">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-gray-400 text-xs font-grotesk font-bold tracking-[0.2em] uppercase">Ready for hire</span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <span className="block text-white mb-2">software</span>
              <span className="block aurora-text">developer</span>
            </h1>
          </motion.div>

          {/* Subtext info */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="text-2xl md:text-4xl font-bold flex flex-wrap gap-x-4 text-gray-400">
              <span className="text-white">Vijay Akash</span>
              <span className="text-gray-600">/</span>
              <span className="text-aurora-indigo">
                <Typewriter
                  options={{
                    strings: [, "MERN Stack", "AI Engineer "],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
              Building the next generation of digital products with a focus on <span className="text-white">clean code</span>, <span className="text-white">scalability</span>, and <span className="text-white">user-centric design</span>.
            </motion.p>
          </div>

          {/* Buttons & Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="akash new.pdf"
              className="group relative px-10 py-5 bg-aurora-primary rounded-2xl font-bold uppercase tracking-widest text-white overflow-hidden transition-all shadow-2xl shadow-aurora-primary/30"
            >
              <span className="relative z-10 flex items-center gap-3 text-sm">
                Resume <FaArrowDown className="text-xs group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-primary to-aurora-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm text-gray-300 glass border border-white/10 hover:border-aurora-primary/50 transition-all"
            >
              Let's talk
            </motion.a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-12 pt-8 border-t border-white/5 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <p className="text-4xl font-black text-white group-hover:aurora-text transition-colors duration-500">{stat.value}</p>
                <p className="text-[10px] text-gray-600 font-grotesk font-black uppercase tracking-[0.2em] mt-2 group-hover:text-gray-400 transition-colors">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ═══════════ RIGHT SIDE: PHOTO CARD ═══════════ */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 10, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, rotate: -6, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-center"
        >
          {/* Layered Glows */}
          <div className="absolute inset-0 bg-aurora-primary/20 blur-[80px] rounded-full -z-10 animate-pulse" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-aurora-violet/20 blur-[60px] rounded-full -z-10" />

          {/* Styled Card (Reference-like) with Color-Matched Border */}
          <div className="relative w-full max-w-[360px] aspect-[4/5] p-[1px] bg-gradient-to-br from-aurora-primary/20 via-transparent to-aurora-royal/20 rounded-[4rem] group overflow-hidden">
            {/* Animated Border Sheen */}
            <div className="absolute inset-x-[-100%] inset-y-[-100%] bg-gradient-to-r from-transparent via-aurora-primary/20 to-transparent group-hover:via-aurora-primary/40 animate-[spin_6s_linear_infinite] opacity-50" />
            
            <div className="relative h-full w-full glass rounded-[3.9rem] overflow-hidden border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] z-10">
              {/* Inner Content Border */}
              <div className="absolute inset-2 border border-white/5 rounded-[3.8rem] overflow-hidden">
                 {/* Lighting Bar Effects inside card */}
                <div className="absolute top-1/4 -right-10 w-40 h-2 bg-aurora-primary/40 blur-md rotate-[30deg]" />
                <div className="absolute bottom-1/4 -left-10 w-40 h-2 bg-aurora-royal/40 blur-md rotate-[30deg]" />
                
                <img
                  src="/vijay akash.png"
                  alt="Vijay Akash"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
  
                {/* Card Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-aurora-primary/5 mix-blend-overlay" />
              </div>
  
              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 bg-aurora-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Floating Element 1 - Icon/Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [-6, -2, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-20 h-20 glass rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl z-20"
          >
            <div className="flex flex-col items-center">
              <span className="text-xl font-black aurora-text leading-none">10+</span>
              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-1">Wins</span>
            </div>
          </motion.div>

          {/* Floating Element 2 - Glass Circle */}
          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 w-16 h-16 glass rounded-full border border-white/10 flex items-center justify-center shadow-2xl z-20"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-aurora-primary to-aurora-violet blur-[2px]" />
          </motion.div>
        </motion.div>

      </div>

      {/* ═══════════ SCROLL INDICATOR ═══════════ */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-opacity"
      >
        <span className="text-[8px] font-grotesk font-black text-white uppercase tracking-[0.4em]">Scroll Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};

export default Home;
