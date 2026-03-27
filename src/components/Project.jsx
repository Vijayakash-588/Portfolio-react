import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { useEffect, useMemo, useState } from "react";

const ProjectCard = ({
  title,
  description,
  tech,
  id,
  image,
  github,
  delay = 0,
  onOpen,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.55, delay }}
    whileHover={{ y: -8, rotateX: 1.2, rotateY: -1.2 }}
    className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-aurora-primary/30 transition-all duration-700 flex flex-col w-[340px] sm:w-[380px] md:w-[500px] flex-shrink-0 inner-glow cursor-pointer"
    onClick={onOpen}
    role="button"
    tabIndex={0}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onOpen();
      }
    }}
  >
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-[16/10]">
      <img
        src={image}
        alt={title}
        className="project-card-image w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000"
      />
      {/* Sophisticated gradient overlay */}
      <div className="image-style-overlay absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
      
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
          onClick={(event) => event.stopPropagation()}
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
        <span className="inline-flex px-3 py-1 rounded-full text-[9px] font-grotesk font-black tracking-[0.16em] uppercase border border-white/10 text-gray-400 mb-6">
          View Case Study
        </span>
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
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "TALLY E-commerce website with AI",
      description: "Next-gen e-commerce architecture featuring LLM-driven query resolution and real-time report synthesis. Built for high-scale enterprise operations with full PostgreSQL integration.",
      domain: "AI",
      tech: ["React", "Node.js", "PostgreSQL", "LLM", "Hugging Face"],
      image: "/projects/tally_ecommerce.png",
      github: "https://github.com/Vijayakash-588/Tally_E_commerce-main",
      challenge: "Enterprise users needed faster support resolution and actionable reporting across large product catalogs.",
      solution: "Built an AI-assisted commerce flow with optimized APIs, LLM query handling, and data-driven report generation.",
      outcome: ["Reduced support dependency through AI answers", "Improved report turnaround for operations teams", "Designed for scale with PostgreSQL-backed architecture"]
    },
    {
      id: "02",
      title: "Health Monitoring Web Application",
      description: "Performance-optimized health suite tracking critical biomarkers and nutritional analytics. Leveraging real-time data streams and advanced filtering for medical-grade insights.",
      domain: "Fullstack",
      tech: ["Angular", "Node.js", "MongoDB", "Express"],
      image: "/projects/health_monitor.png",
      github: "https://github.com/Vijayakash-588/Health-Tracker-using-angular",
      challenge: "Needed reliable, responsive dashboarding for high-frequency health data and personalized insights.",
      solution: "Engineered real-time visualization pipelines with optimized filtering and API responses.",
      outcome: ["Faster UI data rendering", "Improved usability for repeated daily tracking", "Scalable service layout for feature growth"]
    },
    {
      id: "03",
      title: "Appointment Scheduler App",
      description: "Mission-critical scheduling infrastructure developed with a focus on seamless CI/CD delivery and cloud-native resilience. Streamlining cross-departmental operations.",
      domain: "Mobile",
      tech: ["React Native", "Node.js", "Firebase", "CI/CD"],
      image: "/projects/appointment_scheduler.png",
      github: "https://github.com/Ravinthar28/appointment-scheduler-app",
      challenge: "Manual booking workflows caused delays and missed coordination across teams.",
      solution: "Delivered a mobile-first scheduler with realtime sync, notifications, and automated deployment flow.",
      outcome: ["Reduced scheduling friction", "Improved availability visibility", "Enabled rapid iteration with CI/CD"]
    },
    {
      id: "04",
      title: "Shirt TRY-ON Presentation",
      description: "Advanced CV-driven garment simulation utilizing PyTorch and TensorFlow for high-fidelity real-time tracking. Bridging the gap between digital and physical fashion.",
      domain: "AI",
      tech: ["Python", "OpenCV", "PyTorch", "TensorFlow"],
      image: "/projects/shirt_tryon.png",
      github: "https://github.com/Vijayakash-588/Virtual_shirttracking",
      challenge: "Traditional online apparel preview lacked confidence and realism for end users.",
      solution: "Implemented computer vision based virtual try-on with model-assisted body and garment alignment.",
      outcome: ["Higher engagement during try-on interactions", "More realistic visual feedback", "Demonstrated applied AI in retail UX"]
    },
  ];

  const filters = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.domain))],
    [projects]
  );

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.domain === selectedFilter);

  const marqueeProjects = [...filteredProjects, ...filteredProjects];

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

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

          <div className="mt-7 flex flex-wrap gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-[10px] font-grotesk font-black uppercase tracking-[0.18em] border transition-all ${
                  selectedFilter === filter
                    ? "border-aurora-primary/50 text-aurora-primary bg-aurora-primary/10"
                    : "border-white/15 text-gray-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Vijayakash-588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-aurora-primary/90 to-aurora-accent/90 text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase border border-white/20 hover:scale-[1.03] transition-transform"
            >
              Explore All Projects
              <FiArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee Row */}
      <div 
        className="w-full relative mt-10 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`project-marquee-track flex gap-6 md:gap-10 px-6 md:px-8 w-max pointer-events-none ${isHovered || selectedProject ? "is-paused" : ""}`}
        >
          {/* Double projects for infinite marquee */}
          {marqueeProjects.map((proj, index) => (
            <div key={`${proj.id}-${index}`} className="flex-shrink-0 pointer-events-auto">
              <ProjectCard
                {...proj}
                delay={(index % Math.max(filteredProjects.length, 1)) * 0.06}
                onOpen={() => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>

        {/* High-end gradient masks */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-dark-950 via-dark-950/50 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-dark-950 via-dark-950/50 to-transparent z-20 pointer-events-none" />
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-5 md:p-8">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            aria-label="Close project details"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl border border-white/15 p-6 md:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-aurora-primary/40"
              aria-label="Close"
            >
              <HiX size={18} />
            </button>

            <div className="pr-8">
              <p className="text-[10px] font-grotesk font-black tracking-[0.22em] uppercase text-aurora-primary mb-3">
                Case Study {selectedProject.id}
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                {selectedProject.title}
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
                {selectedProject.description}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl border border-white/10 p-5">
                <p className="text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Challenge</p>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
              </div>
              <div className="glass rounded-2xl border border-white/10 p-5">
                <p className="text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Solution</p>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="mt-6 glass rounded-2xl border border-white/10 p-5">
              <p className="text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-500 mb-3">Outcomes</p>
              <ul className="space-y-3">
                {selectedProject.outcome.map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-aurora-primary/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {selectedProject.tech.map((stack) => (
                <span
                  key={stack}
                  className="px-3 py-1 rounded-full text-[10px] font-grotesk font-black uppercase tracking-[0.14em] text-aurora-primary bg-aurora-primary/10 border border-aurora-primary/20"
                >
                  {stack}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-aurora-primary/90 to-aurora-accent/90 text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase border border-white/20"
              >
                View Repository <FiArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Project;
