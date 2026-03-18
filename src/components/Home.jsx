import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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

  return (
    <div id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background HUD Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 border-t border-r border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border-b border-l border-white/10 pointer-events-none"></div>

      <div className="max-w-[85%] mx-auto font-outfit grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-8 animate-reveal">
          <div className="flex items-center gap-3 bg-neon-cyan/10 border border-neon-cyan/20 px-4 py-1 rounded-full">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-ping"></div>
            <span className="text-neon-cyan text-xs font-bold tracking-widest uppercase">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-center lg:text-left leading-tight">
            I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-orange-400">Vijay Akash</span>
          </h1>

          <div className="text-2xl md:text-4xl font-bold flex gap-3 text-gray-300">
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
          </div>

          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl text-center lg:text-left">
            A <span className="text-white">Fullstack Developer</span> specializing in premium digital craft. I blend technical precision with artistic design to build memorable web experiences.
          </p>

          {/* Quick Contact HUD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
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
                <p className="text-sm font-bold">vijayakah0508@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Styled Button */}
          <a 
            href="akash new.pdf" 
            className="group relative px-8 py-4 bg-neon-orange rounded-xl font-black uppercase tracking-widest text-white overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
               Download Dossier
               <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Right Section - Hexagonal HUD Profile */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center perspective-[2000px]">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group w-80 h-[400px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            {/* Hexagon Back Plate */}
            <div 
              className="absolute inset-0 bg-dark-800 shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/10"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                transform: "translateZ(-30px)",
              }}
            >
               <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent"></div>
               <div 
                className="absolute inset-0 opacity-40"
                style={{
                    background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(6, 182, 212, 0.4), transparent 70%)`
                }}
              ></div>
            </div>

            {/* Profile Image Layer */}
            <div 
              className="absolute inset-3 overflow-hidden bg-dark-900 border border-white/5"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                transform: "translateZ(20px)",
              }}
            >
              <img
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 desaturate-[0.5] group-hover:desaturate-0"
                src="/passport photo.jpg"
                alt="Profile"
                style={{
                    transform: `translateX(${rotation.y * -0.8}px) translateY(${rotation.x * 0.8}px) scale(1.3)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Scanner HUD */}
              <div className="absolute w-full h-[1px] bg-neon-cyan shadow-[0_0_15px_rgba(6,182,212,1)] top-0 animate-scan pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity"></div>
            </div>

            {/* Glass Overlay with Frame Details */}
            <div 
              className="absolute inset-0 pointer-events-none glass [transform:translateZ(60px)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                 clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
                {/* HUD Corners */}
                <div className="absolute top-1/2 left-4 w-1 h-8 bg-neon-cyan -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-4 w-1 h-8 bg-neon-orange -translate-y-1/2"></div>
            </div>

            {/* Floating Tags */}
            <div className="absolute -left-10 top-1/4 [transform:translateZ(100px)] opacity-0 group-hover:opacity-100 transition-all duration-700">
               <div className="bg-dark-800/80 backdrop-blur-md border-l-4 border-neon-cyan px-4 py-2 shadow-2xl skew-x-[-15deg]">
                  <p className="text-neon-cyan font-mono text-[9px] font-black uppercase tracking-widest">Protocol.Alpha</p>
                  <p className="text-white text-xs font-bold">VJ_SYSTEM_LOADED</p>
               </div>
            </div>

            <div className="absolute -right-12 bottom-1/4 [transform:translateZ(120px)] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
               <div className="bg-dark-800/80 backdrop-blur-md border-r-4 border-neon-orange px-4 py-2 shadow-2xl skew-x-[15deg]">
                  <p className="text-neon-orange font-mono text-[9px] font-black uppercase tracking-widest">Auth_Token</p>
                  <p className="text-white text-xs font-bold">VERIFIED_HMN</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
