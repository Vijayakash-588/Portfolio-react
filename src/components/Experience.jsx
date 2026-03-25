import { motion } from "framer-motion";

const experiences = [
  {
    role: "Fullstack AI Engineer",
    company: "Techmango",
    period: "MAR 2025 - PRESENT",
    highlights: [
      "Leading development of high-performance full-stack applications with integrated AI agents.",
      "Optimizing database architectures and real-time data processing pipelines.",
      "Implementing sophisticated UI/UX with modern frameworks and animation libraries."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Astroweb Solutions",
    period: "JUL 2025",
    highlights: [
      "Collaborated on frontend development projects using React and Tailwind CSS.",
      "Assisted in API integration and state management optimizations.",
      "Contributed to cross-browser compatibility testing and performance tuning."
    ]
  }
];

const Experience = () => {
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
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-aurora-primary/50 via-aurora-royal/50 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 w-8 h-8 rounded-full glass border border-aurora-primary/50 flex items-center justify-center z-20">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-aurora-primary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" 
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} ml-12 md:ml-0`}>
                  <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-aurora-primary/30 transition-all duration-500 overflow-hidden relative group inner-glow">
                    {/* Decorative radial glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-aurora-primary/5 rounded-full blur-3xl group-hover:bg-aurora-primary/10 transition-colors" />
                    
                    <span className="text-[10px] font-grotesk font-black text-aurora-primary uppercase tracking-[0.3em] block mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:aurora-text transition-all mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-gray-400 font-medium mb-6 flex items-center gap-2">
                       <span className="w-1 h-1 bg-gray-600 rounded-full" />
                       {exp.company}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
