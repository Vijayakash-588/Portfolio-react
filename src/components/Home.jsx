import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 20;

    setRotation({ x: rotateX, y: rotateY });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background HUD Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>
      <div className="absolute top-20 right-20 w-32 h-32 border-t border-r border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border-b border-l border-white/10 pointer-events-none"></div>

      <div className="max-w-[85%] mx-auto font-outfit grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-8"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 bg-neon-cyan/10 border border-neon-cyan/20 px-4 py-1 rounded-full">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-ping"></div>
            <span className="text-neon-cyan text-xs font-bold tracking-widest uppercase">Available for work</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-center lg:text-left leading-tight">
            I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-orange-400">Vijay Akash</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-2xl md:text-4xl font-bold flex gap-3 text-gray-300">
            <span>I build</span>
            <span className="text-neon-cyan">
              <Typewriter
                options={{
                  strings: ["Experiences.", "Interfaces.", "Solutions."],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl text-center lg:text-left">
            A <span className="text-white">Fullstack Developer</span> specializing in premium digital craft. I blend technical precision with artistic design to build memorable web experiences.
          </motion.p>

          {/* Quick Contact HUD */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-colors group">
              <FaLocationDot className="text-neon-cyan group-hover:scale-120 transition-transform" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold">Location</p>
                <p className="text-sm font-bold">Theni, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-colors group">
              <FaEnvelope className="text-neon-cyan group-hover:scale-120 transition-transform" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold">Email</p>
                <p className="text-sm font-bold">vijayakashm08@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Styled Button */}
          <motion.a 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="akash new.pdf" 
            className="group relative px-8 py-4 bg-neon-orange rounded-xl font-black uppercase tracking-widest text-white overflow-hidden transition-all shadow-lg shadow-neon-orange/20"
          >
            <span className="relative z-10 flex items-center gap-3">
               Download Resume.
               <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.a>
        </motion.div>

        {/* Right Section - Cybernetic Square Monolith */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end items-center perspective-[2000px]"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group w-80 h-80 transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            {/* Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-neon-cyan opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-neon-orange opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-neon-orange opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-neon-cyan opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Nested Square Glow Frames */}
            <div className="absolute inset-[-10px] border border-neon-cyan/10 group-hover:border-neon-cyan/20 transition-colors duration-500"></div>
            <div className="absolute inset-[-20px] border border-neon-orange/5 group-hover:border-neon-orange/10 transition-colors duration-500"></div>

            {/* Monolith Background */}
            <div 
              className="absolute inset-0 bg-dark-800 shadow-[0_0_60px_rgba(6,182,212,0.1)] border border-white/10"
              style={{
                transform: "translateZ(-30px)",
              }}
            >
               <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent"></div>
               <div 
                className="absolute inset-0 opacity-40"
                style={{
                    background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(6, 182, 212, 0.4), transparent 70%)`
                }}
              ></div>
              {/* Internal Grid */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            </div>

            {/* Profile Image - Square Layer */}
            <div 
              className="absolute inset-2 overflow-hidden bg-dark-900 border border-white/5 shadow-2xl"
              style={{
                transform: "translateZ(30px)",
              }}
            >
              <img
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 contrast-[1.1] brightness-[0.9] group-hover:brightness-100 group-hover:scale-110"
                src="/passport photo.jpg"
                alt="Profile"
                style={{
                    transform: `translateX(${rotation.y * -0.6}px) translateY(${rotation.x * 0.6}px)`
                }}
              />
              
              {/* Glass Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-white/5"></div>
              
              {/* Vertical Scan HUD */}
              <div className="absolute w-[2px] h-full bg-neon-cyan/40 shadow-[0_0_15px_rgba(6,182,212,0.8)] left-0 animate-[shimmer_3s_infinite] pointer-events-none"></div>
              
              {/* Digital Noise / Glitch Overlay (Simulated with Gradient) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_3px,transparent_3px)]"></div>
            </div>

            {/* Floating Square Tags */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 [transform:translateZ(80px)] opacity-0 group-hover:opacity-100 transition-all duration-700">
               <div className="bg-dark-800/90 border border-neon-cyan px-3 py-1.5 shadow-2xl">
                  <p className="text-neon-cyan font-mono text-[8px] font-black uppercase tracking-tighter">ID_ENCRYPT</p>
                  <p className="text-white text-[10px] font-bold">VJ_SQR_05</p>
               </div>
            </div>

            <div className="absolute -right-12 bottom-0 [transform:translateZ(100px)] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
               <div className="bg-dark-800/90 border border-neon-orange px-3 py-1.5 shadow-2xl">
                  <p className="text-neon-orange font-mono text-[8px] font-black uppercase tracking-tighter">DATA_PORT</p>
                  <p className="text-white text-[10px] font-bold">LINK_READY</p>
               </div>
            </div>

            {/* Micro Decorations */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-neon-cyan animate-pulse"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-neon-orange animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
