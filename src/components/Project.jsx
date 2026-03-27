import { motion, useAnimationControls } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";

const ProjectCard = ({ title, description, tech, id, image, github, delay = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.55, delay }}
    whileHover={{ y: -8, rotateX: 1.2, rotateY: -1.2 }}
    className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-aurora-primary/30 transition-all duration-700 flex flex-col w-[340px] sm:w-[380px] md:w-[500px] flex-shrink-0 inner-glow"
  >
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-[16/10]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000"
      />
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
      
      {/* Premium Badge */}
      <div className="absolute top-6 left-6 px-4 py-1.5 glass-strong rounded-full border border-white/10">
        <span className="text-[10px] font-grotesk font-black tracking-[0.3em] aurora-text uppercase">{id}</span>
      </div>

      {/* GitHub/Link Reveal */}
      <div className="absolute top-6 right-6 opacity-85 group-hover:opacity-100 transition-all duration-500 translate-y-0 group-hover:translate-y-0">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 bg-white text-dark-950 rounded-full hover:bg-aurora-primary hover:text-white transition-all duration-300 shadow-xl flex items-center gap-2"
        >
          <FiGithub size={20} />
          <FiArrowUpRight size={16} />
        </a>
      </div>
    </div>

    {/* Content Area */}
    <div className="p-10 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:tracking-tight transition-all duration-500">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-8 flex-1 text-sm md:text-base font-light">
          {description}
        </p>
      </div>

      {/* Tech tags with modern styling */}
      <div className="flex flex-wrap gap-2.5">
        {tech.map((t) => (
          <span
            key={t}
            className="px-4 py-1.5 rounded-full text-[10px] font-grotesk font-black uppercase tracking-widest text-aurora-primary bg-aurora-primary/5 border border-aurora-primary/10 group-hover:border-aurora-primary/20 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const Project = () => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      id: "01",
      title: "TALLY E-commerce website with AI",
      description: "Next-gen e-commerce architecture featuring LLM-driven query resolution and real-time report synthesis. Built for high-scale enterprise operations with full PostgreSQL integration.",
      tech: ["React", "Node.js", "PostgreSQL", "LLM", "Hugging Face"],
      image: "/projects/tally_ecommerce.png",
      github: "https://github.com/Vijayakash-588/Tally_E_commerce-main",
    },
    {
      id: "02",
      title: "Health Monitoring Web Application",
      description: "Performance-optimized health suite tracking critical biomarkers and nutritional analytics. Leveraging real-time data streams and advanced filtering for medical-grade insights.",
      tech: ["Angular", "Node.js", "MongoDB", "Express"],
      image: "/projects/health_monitor.png",
      github: "https://github.com/Vijayakash-588/Health-Tracker-using-angular",
    },
    {
      id: "03",
      title: "Appointment Scheduler App",
      description: "Mission-critical scheduling infrastructure developed with a focus on seamless CI/CD delivery and cloud-native resilience. Streamlining cross-departmental operations.",
      tech: ["React Native", "Node.js", "Firebase", "CI/CD"],
      image: "/projects/appointment_scheduler.png",
      github: "https://github.com/Ravinthar28/appointment-scheduler-app",
    },
    {
      id: "04",
      title: "Shirt TRY-ON Presentation",
      description: "Advanced CV-driven garment simulation utilizing PyTorch and TensorFlow for high-fidelity real-time tracking. Bridging the gap between digital and physical fashion.",
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
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div id="project" className="relative py-32 min-h-screen flex flex-col justify-center overflow-hidden bg-dark-950">
      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-24"
        >
          <span className="text-aurora-primary text-[10px] font-grotesk font-black uppercase tracking-[0.4em] block mb-6">Selected Work</span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none">
            Digital <br />
            <span className="aurora-text">Milestones.</span>
          </h1>
        </motion.div>
      </div>

      {/* Marquee Row */}
      <div 
        className="w-full relative mt-10 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="flex gap-6 md:gap-10 px-6 md:px-8 w-max pointer-events-none"
        >
          {/* Double projects for infinite marquee */}
          {[...projects, ...projects].map((proj, index) => (
            <div key={`${proj.id}-${index}`} className="flex-shrink-0 pointer-events-auto">
              <ProjectCard {...proj} delay={(index % projects.length) * 0.06} />
            </div>
          ))}
        </motion.div>

        {/* High-end gradient masks */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-dark-950 via-dark-950/50 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-dark-950 via-dark-950/50 to-transparent z-20 pointer-events-none" />
      </div>
    </div>
  );
};

export default Project;
