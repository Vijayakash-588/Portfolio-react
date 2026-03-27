import { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const [photoBorderStyle, setPhotoBorderStyle] = useState("luxe");

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

  const featuredProjects = [
    {
      title: "Tally AI Commerce system",
      impact: "LLM assistant + scalable checkout architecture",
      href: "#project",
      accent: "from-aurora-primary/30 to-aurora-secondary/10"
    },
    {
      title: "Appointment scheduler app",
      impact: "Real-time booking scheduler app between clients and customers",
      href: "#project",
      accent: "from-aurora-accent/30 to-aurora-royal/10"
    }
  ];

  const frameVariants = {
    minimal: {
      outer: "p-[1.5px] bg-gradient-to-br from-white/35 via-white/10 to-white/30 shadow-[0_0_18px_rgba(255,255,255,0.14)]",
      sheen: "via-white/30 group-hover:via-white/45",
      glow: "from-white/10 via-transparent to-white/10 opacity-90",
      ringOne: "border-white/35",
      ringTwo: "border-white/20 border-dashed opacity-60",
      nodeClass: "bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
    },
    luxe: {
      outer: "p-[1.5px] bg-gradient-to-br from-aurora-primary/45 via-aurora-secondary/15 to-aurora-royal/45 shadow-[0_0_36px_rgba(99,102,241,0.22)]",
      sheen: "via-aurora-primary/20 group-hover:via-aurora-primary/40",
      glow: "from-aurora-primary/20 via-transparent to-aurora-accent/15 opacity-90",
      ringOne: "border-white/20",
      ringTwo: "border-aurora-primary/30 border-dashed opacity-70",
      nodeClass: "bg-aurora-primary/70 shadow-[0_0_10px_rgba(14,165,233,0.8)]"
    },
    holo: {
      outer: "p-[1.5px] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(14,165,233,0.75),rgba(139,92,246,0.72),rgba(16,185,129,0.68),rgba(14,165,233,0.75))] shadow-[0_0_38px_rgba(14,165,233,0.3)]",
      sheen: "via-aurora-accent/30 group-hover:via-aurora-royal/50",
      glow: "from-aurora-secondary/20 via-transparent to-aurora-accent/20 opacity-95",
      ringOne: "border-aurora-primary/45",
      ringTwo: "border-aurora-accent/40 border-dashed opacity-80",
      nodeClass: "bg-aurora-accent/80 shadow-[0_0_12px_rgba(16,185,129,0.85)]"
    }
  };

  const currentFrame = frameVariants[photoBorderStyle];

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden font-outfit">
      {/* ═══════════ AMBIENT BACKGROUND ═══════════ */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-aurora-primary/5 rounded-full blur-[120px] animate-drift" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-aurora-secondary/5 rounded-full blur-[100px] animate-drift" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center lg:items-start relative z-10">
        
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
                    strings: ["MERN Stack", "AI Engineer"],
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
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 w-full">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="akash new.pdf"
              className="group relative w-full sm:w-auto justify-center px-6 sm:px-10 py-4 sm:py-5 bg-aurora-primary rounded-2xl font-bold uppercase tracking-widest text-white overflow-hidden transition-all shadow-2xl shadow-aurora-primary/30 inline-flex"
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
              className="w-full sm:w-auto text-center px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold uppercase tracking-widest text-sm text-gray-300 glass border border-white/10 hover:border-aurora-primary/50 transition-all"
            >
              Let&apos;s talk
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#project"
              className="group w-full sm:w-auto justify-center px-6 sm:px-8 py-4 rounded-2xl font-black uppercase tracking-[0.18em] text-[11px] text-white bg-gradient-to-r from-aurora-secondary/90 to-aurora-accent/90 border border-white/20 inline-flex"
            >
              <span className="flex items-center gap-3">
                View Featured Work
                <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-grotesk font-black tracking-[0.28em] uppercase text-gray-500">Featured Projects</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {featuredProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.12 * index }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="group relative p-5 rounded-2xl glass border border-white/10 hover:border-aurora-primary/35 transition-all overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-sm tracking-wide">{project.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">{project.impact}</p>
                    <p className="mt-3 text-[10px] font-grotesk font-black uppercase tracking-[0.18em] text-aurora-primary">
                      Open case study
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-7 sm:gap-12 pt-8 border-t border-white/5 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className={`group ${idx === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <p className="text-4xl font-black text-white group-hover:aurora-text transition-colors duration-500">{stat.value}</p>
                <p className="text-[10px] text-gray-600 font-grotesk font-black uppercase tracking-[0.2em] mt-2 group-hover:text-gray-400 transition-colors">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ═══════════ RIGHT SIDE: PHOTO CARD ═══════════ */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative order-1 lg:order-2 flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-5 lg:pt-3"
        >
          {/* Layered Glows */}
          <div className="absolute inset-0 bg-aurora-primary/20 blur-[80px] rounded-full -z-10 animate-pulse" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-aurora-violet/20 blur-[60px] rounded-full -z-10" />

          <div className="relative flex-shrink-0">
            {/* Styled Card (Reference-like) with Color-Matched Border */}
            <div className={`relative w-[270px] sm:w-[310px] lg:w-[340px] aspect-[4/5] rounded-[4rem] group overflow-hidden -rotate-[6deg] ${currentFrame.outer}`}>
              {/* Animated Border Sheen */}
              <div className={`absolute inset-x-[-100%] inset-y-[-100%] bg-gradient-to-r from-transparent ${currentFrame.sheen} to-transparent animate-[spin_6s_linear_infinite] opacity-50`} />
              <div className={`absolute inset-0 bg-gradient-to-tr ${currentFrame.glow}`} />
              <div className={`hero-photo-fx absolute inset-[8px] rounded-[3.7rem] border ${currentFrame.ringOne} pointer-events-none`} />
              <div className={`hero-photo-fx absolute inset-[12px] rounded-[3.55rem] border ${currentFrame.ringTwo} pointer-events-none`} />
              <div className={`hero-photo-fx absolute top-8 left-8 w-2 h-2 rounded-full ${currentFrame.nodeClass}`} />
              <div className={`hero-photo-fx absolute top-8 right-8 w-2 h-2 rounded-full ${currentFrame.nodeClass}`} />
              <div className={`hero-photo-fx absolute bottom-8 left-8 w-2 h-2 rounded-full ${currentFrame.nodeClass}`} />
              <div className={`hero-photo-fx absolute bottom-8 right-8 w-2 h-2 rounded-full ${currentFrame.nodeClass}`} />
              
              <div className="relative h-full w-full glass rounded-[3.9rem] overflow-hidden border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] z-10">
                {/* Inner Content Border */}
                <div className="absolute inset-2 border border-white/5 rounded-[3.8rem] overflow-hidden">
                   {/* Lighting Bar Effects inside card */}
                  <div className="hero-photo-fx absolute top-1/4 -right-10 w-40 h-2 bg-aurora-primary/40 blur-md rotate-[30deg]" />
                  <div className="hero-photo-fx absolute bottom-1/4 -left-10 w-40 h-2 bg-aurora-royal/40 blur-md rotate-[30deg]" />
                  
                  <img
                    src="/vijay akash.png"
                    alt="Vijay Akash"
                    className="hero-photo-img w-full h-full object-cover object-[50%_22%] group-hover:scale-105 transition-transform duration-1000 ease-out saturate-[1.15] contrast-[1.08] brightness-[1.03]"
                  />

                  {/* Studio light highlights */}
                  <div className="hero-photo-glow absolute -top-20 -left-16 w-56 h-56 bg-white/20 blur-[56px] rounded-full opacity-50 mix-blend-screen" />
                  <div className="hero-photo-glow absolute -bottom-24 -right-14 w-52 h-52 bg-aurora-accent/25 blur-[50px] rounded-full opacity-60 mix-blend-screen" />
    
                  {/* Card Gradients */}
                  <div className="hero-photo-fx image-style-overlay absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                  <div className="hero-photo-glow absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_80%_82%,rgba(14,165,233,0.25),transparent_42%)] mix-blend-screen opacity-75" />
                  <div className="hero-photo-fx image-style-overlay absolute inset-0 bg-aurora-primary/5 mix-blend-overlay" />
                  <div className="hero-photo-fx absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.35)]" />

                  {/* Fine grain for premium photo texture */}
                  <div
                    className="hero-photo-fx absolute inset-0 opacity-[0.08] mix-blend-soft-light"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")"
                    }}
                  />
                </div>
    
                {/* Hover Glow Overlay */}
                <div className="hero-photo-fx image-style-overlay absolute inset-0 bg-aurora-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
          </div>

          <div className="hidden md:flex self-center z-30 order-last md:ml-1 lg:ml-2">
            <div className="glass rounded-2xl border border-white/10 px-2.5 py-3 flex flex-col gap-2.5 w-[100px]">
              <p className="text-[8px] text-center font-grotesk font-black tracking-[0.2em] uppercase text-gray-500 px-1">
                Frame Style
              </p>
              <button
                type="button"
                onClick={() => setPhotoBorderStyle("minimal")}
                className={`w-full px-2 py-2 rounded-xl text-[9px] font-grotesk font-black tracking-[0.14em] uppercase border transition-all ${
                  photoBorderStyle === "minimal"
                    ? "border-white/60 text-white bg-white/10"
                    : "border-white/20 text-gray-400 hover:text-white"
                }`}
              >
                Minimal
              </button>
              <button
                type="button"
                onClick={() => setPhotoBorderStyle("luxe")}
                className={`w-full px-2 py-2 rounded-xl text-[9px] font-grotesk font-black tracking-[0.14em] uppercase border transition-all ${
                  photoBorderStyle === "luxe"
                    ? "border-aurora-primary/60 text-white bg-aurora-primary/10"
                    : "border-white/20 text-gray-400 hover:text-white"
                }`}
              >
                Luxury
              </button>
              <button
                type="button"
                onClick={() => setPhotoBorderStyle("holo")}
                className={`w-full px-2 py-2 rounded-xl text-[9px] font-grotesk font-black tracking-[0.14em] uppercase border transition-all ${
                  photoBorderStyle === "holo"
                    ? "border-aurora-accent/60 text-white bg-aurora-accent/10"
                    : "border-white/20 text-gray-400 hover:text-white"
                }`}
              >
                Holographic
              </button>
            </div>
          </div>

          <div className="mt-5 w-full md:hidden flex flex-wrap justify-center items-center gap-2.5">
            <button
              type="button"
              onClick={() => setPhotoBorderStyle("minimal")}
              className={`px-3 py-1.5 rounded-full text-[9px] font-grotesk font-black tracking-[0.18em] uppercase border transition-all ${
                photoBorderStyle === "minimal"
                  ? "border-white/60 text-white bg-white/10"
                  : "border-white/20 text-gray-400 hover:text-white"
              }`}
            >
              Minimal
            </button>
            <button
              type="button"
              onClick={() => setPhotoBorderStyle("luxe")}
              className={`px-3 py-1.5 rounded-full text-[9px] font-grotesk font-black tracking-[0.18em] uppercase border transition-all ${
                photoBorderStyle === "luxe"
                  ? "border-aurora-primary/60 text-white bg-aurora-primary/10"
                  : "border-white/20 text-gray-400 hover:text-white"
              }`}
            >
              Luxury
            </button>
            <button
              type="button"
              onClick={() => setPhotoBorderStyle("holo")}
              className={`px-3 py-1.5 rounded-full text-[9px] font-grotesk font-black tracking-[0.18em] uppercase border transition-all ${
                photoBorderStyle === "holo"
                  ? "border-aurora-accent/60 text-white bg-aurora-accent/10"
                  : "border-white/20 text-gray-400 hover:text-white"
              }`}
            >
              Holographic
            </button>
          </div>
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
