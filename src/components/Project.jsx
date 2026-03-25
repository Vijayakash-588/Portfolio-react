import { motion, useAnimationControls } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { useEffect, useState } from "react";

const ProjectCard = ({ title, description, tech, id, image, github }) => (
  <div className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-aurora-indigo/20 transition-all duration-500 flex flex-col w-[350px] md:w-[450px] flex-shrink-0">
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
      
      {/* Project number */}
      <div className="absolute top-4 left-4 px-3 py-1 glass-strong rounded-full">
        <span className="text-[10px] font-grotesk font-bold tracking-[0.2em] aurora-text">{id}</span>
      </div>

      {/* GitHub Link overlay */}
      <div className="absolute top-4 right-4 flex gap-2">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-dark-950/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-aurora-indigo hover:border-aurora-indigo transition-all duration-300 pointer-events-auto shadow-lg"
        >
          <FiGithub size={18} />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl md:text-2xl font-black text-white group-hover:aurora-text transition-all duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 leading-relaxed mb-6 flex-1 text-xs md:text-sm">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1.5 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider text-aurora-indigo bg-aurora-indigo/10 border border-aurora-indigo/20"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Project = () => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      id: "01",
      title: "TALLY E-commerce website with AI",
      description: "End-to-end e-commerce platform with AI integration using LLM models for interactive queries and report generation. Features include MCP server/client integration and PostgreSQL database.",
      tech: ["React", "Node.js", "PostgreSQL", "LLM", "Hugging Face"],
      image: "/projects/tally_ecommerce.png",
      github: "https://github.com/Vijayakash-588/Tally_E_commerce-main",
    },
    {
      id: "02",
      title: "Health Monitoring Web Application",
      description: "A comprehensive health tracking application for monitoring vital signs, daily steps, and nutritional habits with real-time data visualization.",
      tech: ["Angular", "Node.js", "MongoDB", "Express"],
      image: "/projects/health_monitor.png",
      github: "https://github.com/Vijayakash-588/Health-Tracker-using-angular",
    },
    {
      id: "03",
      title: "Appointment Scheduler App",
      description: "Production-ready scheduling system streamlining communication between staff and principals with cloud database integration and CI/CD pipelines.",
      tech: ["React Native", "Node.js", "Firebase", "CI/CD"],
      image: "/projects/appointment_scheduler.png",
      github: "https://github.com/Ravinthar28/appointment-scheduler-app",
    },
    {
      id: "04",
      title: "Shirt TRY-ON Presentation",
      description: "Innovative AI virtual garment visualization system using computer vision techniques for real-time shirt tracking and try-on simulation.",
      tech: ["Python", "OpenCV", "PyTorch", "TensorFlow"],
      image: "/projects/shirt_tryon.png",
      github: "https://github.com/Vijayakash-588/Virtual_shirttracking",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div id="project" className="relative py-28 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aurora-amber/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-aurora-amber text-xs font-grotesk font-bold uppercase tracking-[0.3em] block mb-4">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Featured{" "}
            <span className="aurora-text">Projects</span>
          </h1>
        </motion.div>
      </div>

      {/* Marquee Row */}
      <div 
        className="w-full relative mt-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="flex gap-8 px-4 w-max pointer-events-none"
        >
          {/* Double projects for infinite marquee */}
          {[...projects, ...projects].map((proj, index) => (
            <div key={`${proj.id}-${index}`} className="flex-shrink-0 pointer-events-auto">
              <ProjectCard {...proj} />
            </div>
          ))}
        </motion.div>

        {/* Gradient masks for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-20 pointer-events-none" />
      </div>
    </div>
  );
};

export default Project;
