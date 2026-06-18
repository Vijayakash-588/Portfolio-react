import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const experiences = [
  {
    stage: "Current Role",
    role: "Fullstack AI Engineer",
    company: "Techmango",
    location: "India",
    period: "MAR 2025 - PRESENT",
    focus: ["AI Product Delivery", "Scalable Architecture", "UX Performance"],
    highlights: [
      "Leading development of high-performance full-stack applications with integrated AI agents.",
      "Optimizing database architectures and real-time data processing pipelines.",
      "Implementing sophisticated UI/UX with modern frameworks and animation libraries."
    ]
  },
  {
    stage: "Internship",
    role: "Web Development Intern",
    company: "Astroweb Solutions",
    location: "India",
    period: "JUL 2025",
    focus: ["React Frontend", "API Integration", "Performance Tuning"],
    highlights: [
      "Collaborated on frontend development projects using React and Tailwind CSS.",
      "Assisted in API integration and state management optimizations.",
      "Contributed to cross-browser compatibility testing and performance tuning."
    ]
  }
];

const Experience = () => {
  const totalRoles = experiences.length;
  const currentRoles = experiences.filter((exp) => exp.stage === "Current Role").length;

  return (
    <div id="experience" className="relative py-32 min-h-screen flex flex-col justify-center overflow-hidden bg-dark-950">
      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-aurora-primary text-[10px] font-grotesk font-black uppercase tracking-[0.4em] block mb-6">Career Path</span>
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Professional <span className="aurora-text">Journey.</span>
          </h1>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A concise timeline of hands-on engineering work across production delivery, AI integration, and frontend performance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <div className="px-5 py-2 rounded-full glass border border-white/10 text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-400">
              {totalRoles} Roles
            </div>
            <div className="px-5 py-2 rounded-full glass border border-white/10 text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-400">
              {currentRoles} Current Position
            </div>
            <div className="px-5 py-2 rounded-full glass border border-white/10 text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-400">
              Fullstack + AI
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="relative">
          {/* SVG Lightning Axis - Straight Energy Column */}
          <svg 
            viewBox="0 0 100 1000" 
            preserveAspectRatio="none" 
            className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-10 h-full pointer-events-none z-10"
          >
            {/* Soft Ambient Glow */}
            <path 
              d="M50,0 L50,1000"
              fill="none"
              stroke="var(--aurora-primary)"
              strokeWidth="10"
              opacity="0.12"
              className="blur-[8px] lightning-flicker"
            />
            <path 
              d="M50,0 L50,1000"
              fill="none"
              stroke="var(--aurora-secondary)"
              strokeWidth="5"
              opacity="0.3"
              className="blur-[3px] lightning-flicker"
            />
            {/* Core Hot White Spark Path */}
            <path 
              d="M50,0 L50,1000"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              className="lightning-path lightning-flicker"
            />
          </svg>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={`${exp.role}-${index}`} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node - Zap/Lightning Shield */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 w-10 h-10 rounded-xl glass border border-aurora-primary/50 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all duration-300 hover:scale-110 group-hover:border-aurora-accent/80">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1], 
                        rotate: [0, 6, -6, 0],
                        filter: ["drop-shadow(0 0 2px var(--aurora-primary))", "drop-shadow(0 0 6px var(--aurora-primary))", "drop-shadow(0 0 2px var(--aurora-primary))"]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-white text-lg flex items-center justify-center"
                    >
                      <FiZap className="text-aurora-primary text-xl" />
                    </motion.div>
                  </div>

                  {/* Content Card with Arrow/Chevron Shape */}
                  <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} ml-12 md:ml-0`}>
                    <div className={`relative transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] group/card
                      ${index % 2 === 0 ? "md:arrow-clip-right arrow-clip-left" : "arrow-clip-left"}
                      p-[1.5px] bg-gradient-to-r from-white/10 to-white/5 hover:from-aurora-primary hover:to-aurora-royal transition-all duration-500
                      shadow-[0_0_25px_rgba(0,0,0,0.4)]
                    `}>
                      <div className={`arrow-card-inner glass p-8 rounded-none border-0 overflow-hidden relative inner-glow text-left
                        ${index % 2 === 0 ? "md:arrow-clip-right arrow-clip-left" : "arrow-clip-left"}
                        ${index % 2 === 0 ? "md:pr-12 md:pl-8 pl-12 pr-8" : "pl-12 pr-8"}
                      `}>
                        {/* Decorative radial glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-aurora-primary/5 rounded-full blur-3xl group-hover/card:bg-aurora-primary/15 transition-colors duration-500" />
                        
                        {/* Lightning spark visual effect on top right */}
                        <div className="absolute top-4 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                          <motion.div
                            animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <FiZap className="text-aurora-accent text-base filter drop-shadow-[0_0_5px_var(--aurora-accent)]" />
                          </motion.div>
                        </div>

                        <div className="flex items-center justify-between gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full border border-aurora-primary/30 bg-aurora-primary/10 text-[9px] font-grotesk font-black uppercase tracking-[0.2em] text-aurora-primary">
                            {exp.stage}
                          </span>
                          <span className="text-[10px] text-gray-500 font-grotesk font-black uppercase tracking-[0.2em]">
                            {exp.location}
                          </span>
                        </div>
                        
                        <span className="text-[10px] font-grotesk font-black text-aurora-primary uppercase tracking-[0.3em] block mb-3">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-black text-white group-hover/card:aurora-text transition-all mb-1">
                          {exp.role}
                        </h3>
                        <div className="text-gray-400 font-medium mb-6 flex items-center gap-2">
                           <span className="w-1 h-1 bg-gray-600 rounded-full" />
                           {exp.company}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.focus.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-[9px] font-grotesk font-black uppercase tracking-[0.15em] text-gray-400 border border-white/10 bg-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <ul className="space-y-4">
                          {exp.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-sm text-gray-400 font-light leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-aurora-primary/30 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
