import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const ExperienceCard = ({ role, company, period, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="relative pl-8 pb-12 last:pb-0 group"
  >
    {/* Timeline Line */}
    <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/5 group-last:bg-transparent" />
    
    {/* Timeline Dot */}
    <div className="absolute left-0 top-0 w-6 h-6 rounded-full glass border border-white/10 flex items-center justify-center z-10 group-hover:border-aurora-indigo/50 transition-colors duration-500">
      <div className="w-2 h-2 rounded-full bg-aurora-indigo animate-pulse" />
    </div>

    {/* Content Card */}
    <div className="glass rounded-3xl p-8 border border-white/5 hover:border-aurora-indigo/20 transition-all duration-500 group-hover:translate-x-2">
      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-black text-white group-hover:aurora-text transition-all duration-300">
            {role}
          </h3>
          <div className="flex items-center gap-2 text-aurora-indigo font-bold text-sm mt-1 uppercase tracking-wider">
            <FaBriefcase className="text-xs" />
            {company}
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-grotesk font-bold">
          <FaCalendarAlt className="text-aurora-indigo" />
          {period}
        </div>
      </div>
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Fullstack AI Engineer",
      company: "Techmango",
      period: "MAR 2025 - PRESENT",
      description: "As a Fullstack developer at Techmango, I develop websites and apps using the MERN stack, integrating AI with real-time database solutions and MCP protocol to enhance performance and usability within a Microservice architecture.",
    },
    {
      role: "Web Development Intern",
      company: "Astroweb Solutions",
      period: "JUL 2025",
      description: "Completed a comprehensive Web Development Internship focused on creating highly responsive and SEO-friendly websites using modern web technologies including HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <div id="experience" className="relative py-28 min-h-screen flex items-center">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aurora-indigo/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-aurora-indigo text-xs font-grotesk font-bold uppercase tracking-[0.3em] block mb-4">Career</span>
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Professional{" "}
            <span className="aurora-text">Journey</span>
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
