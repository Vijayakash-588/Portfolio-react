import Typewriter from "typewriter-effect";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import CharacterModel from "./Character";

const Home = () => {
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
      accent: "from-aurora-primary/30 to-aurora-secondary/10",
    },
    {
      title: "Appointment scheduler app",
      impact: "Real-time booking scheduler app between clients and customers",
      href: "#project",
      accent: "from-aurora-accent/30 to-aurora-royal/10",
    },
  ];

  return (
    <div id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden font-outfit">
      {/* ═══════════ AMBIENT BACKGROUND ═══════════ */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-aurora-primary/5 rounded-full blur-[120px] animate-drift" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-aurora-secondary/5 rounded-full blur-[100px] animate-drift" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 hero-grid gap-x-4 gap-y-8 lg:gap-8 items-start relative z-10">

        {/* ═══════════ LEFT: TEXT CONTENT ═══════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="contents lg:flex lg:flex-col lg:items-start lg:text-left lg:space-y-10 lg:order-1"
        >
          {/* PART 1: Top section (Badge, Title, Name) */}
          <div className="hero-area-title flex flex-col items-start text-left space-y-4 lg:space-y-6">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/5 w-fit max-w-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-400 text-[10px] sm:text-xs font-grotesk font-bold tracking-[0.2em] uppercase">Ready for hire</span>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-2 lg:space-y-4">
              <h1
                className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="block text-white mb-1 lg:mb-2">software</span>
                <span className="block aurora-text">developer</span>
              </h1>
            </motion.div>

            {/* Name & Typewriter */}
            <div className="space-y-4">
              <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold flex flex-wrap gap-x-2 md:gap-x-4 text-gray-400">
                <span className="text-white">Vijay Akash</span>
                <span className="text-gray-600">/</span>
                <span className="text-aurora-indigo">
                  <Typewriter
                    options={{
                      strings: ["Full Stack Developer", "AI Engineer"],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                    }}
                  />
                </span>
              </motion.div>
            </div>
          </div>

          {/* PART 2: Bottom section (Intro, CTA, Projects, Stats) */}
          <div className="hero-area-details flex flex-col items-start text-left space-y-8 lg:space-y-10 w-full mt-4 lg:mt-0">
            {/* Intro paragraph */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
              Building the next generation of digital products with a focus on{" "}
              <span className="text-white">clean code</span>,{" "}
              <span className="text-white">scalability</span>, and{" "}
              <span className="text-white">user-centric design</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 w-full">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="akash new.pdf"
                className="group relative px-6 py-3.5 lg:px-8 lg:py-4 bg-aurora-primary rounded-2xl font-bold uppercase tracking-widest text-white overflow-hidden transition-all shadow-2xl shadow-aurora-primary/30 inline-flex items-center gap-3 text-xs lg:text-sm"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Resume <FaArrowDown className="text-xs group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-primary to-aurora-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3.5 lg:px-8 lg:py-4 rounded-2xl font-bold uppercase tracking-widest text-xs lg:text-sm text-gray-300 glass border border-white/10 hover:border-aurora-primary/50 transition-all"
              >
                Let&apos;s talk
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#project"
                className="group px-5 py-3.5 lg:px-7 lg:py-4 rounded-2xl font-black uppercase tracking-[0.18em] text-[10px] lg:text-[11px] text-white bg-gradient-to-r from-aurora-secondary/90 to-aurora-accent/90 border border-white/20 inline-flex items-center gap-3"
              >
                View Featured Work
                <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Featured Projects */}
            <motion.div variants={itemVariants} className="w-full">
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
                      <p className="mt-3 text-[10px] font-grotesk font-black uppercase tracking-[0.18em] text-aurora-primary">Open case study</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-10 pt-8 border-t border-white/5 w-full max-w-lg">
              {stats.map((stat, idx) => (
                <div key={idx} className="group">
                  <p className="text-3xl lg:text-4xl font-black text-white group-hover:aurora-text transition-colors duration-500">{stat.value}</p>
                  <p className="text-[10px] text-gray-600 font-grotesk font-black uppercase tracking-[0.2em] mt-2 group-hover:text-gray-400 transition-colors">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ═══════════ RIGHT: 3D CHARACTER MODEL ═══════════ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="hero-area-model relative lg:order-2 flex items-start justify-center w-full"
        >
          {/* Glow ring beneath the character */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full"
            style={{ background: "radial-gradient(ellipse at center, rgba(14,165,233,0.45) 0%, transparent 70%)", filter: "blur(8px)" }}
          />
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[420px] lg:h-[700px]">
            <CharacterModel variant="portrait" />
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
