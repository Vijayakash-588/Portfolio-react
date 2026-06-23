import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FiGithub, FiArrowUpRight, FiLayers, FiList, FiGrid } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const PROJECTS = [
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
    github: "https://github.com/Vijayakash-588/appointment-scheduler-app",
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

// Domain-specific color palettes
const DOMAIN_COLORS = {
  AI:        { primary: "#8b5cf6", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.35)", glow: "rgba(139,92,246,0.25)", text: "text-violet-400", badge: "bg-violet-500/15 border-violet-500/30 text-violet-300" },
  Fullstack: { primary: "#0ea5e9", bg: "rgba(14,165,233,0.10)", border: "rgba(14,165,233,0.30)", glow: "rgba(14,165,233,0.20)", text: "text-sky-400",    badge: "bg-sky-500/15 border-sky-500/30 text-sky-300"       },
  Mobile:    { primary: "#10b981", bg: "rgba(16,185,129,0.10)", border: "rgba(16,185,129,0.30)", glow: "rgba(16,185,129,0.20)", text: "text-emerald-400", badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
};

const getDomainColor = (domain) => DOMAIN_COLORS[domain] || DOMAIN_COLORS.Fullstack;

const PROJECT_VIEW_MODE_KEY = "portfolio_project_view_mode";

/* ═══════════════════════════════════════
   MARQUEE CARD (domain stripe + big ID)
═══════════════════════════════════════ */
const MarqueeCard = ({ title, description, tech, id, image, github, domain, delay, onOpen }) => {
  const color = getDomainColor(domain);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 22 });
  const cardScale = useSpring(1, { stiffness: 200, damping: 22 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div style={{ perspective: "900px" }}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay }}
        style={{ rotateX, rotateY, scale: cardScale, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => cardScale.set(1.02)}
        onMouseLeave={() => { x.set(0); y.set(0); cardScale.set(1); }}
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
        className="group relative glass rounded-[2rem] overflow-hidden border cursor-pointer flex-shrink-0 w-[84vw] max-w-[340px] sm:w-[380px] md:w-[460px] flex flex-col"
        style={{ borderColor: color.border, boxShadow: `0 0 0 0 ${color.glow}`, transformStyle: "preserve-3d" }}
      >
        {/* Domain color top stripe */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30" style={{ background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)` }} />

        {/* Big ghost ID number */}
        <div className="absolute top-2 right-4 font-black text-[80px] leading-none select-none pointer-events-none z-0 opacity-[0.06]" style={{ color: color.primary, fontFamily: "'Outfit', sans-serif" }}>{id}</div>

        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]" style={{ transform: "translateZ(20px)" }}>
          <img src={image} alt={title} className="w-full h-full object-cover opacity-55 group-hover:opacity-90 group-hover:scale-[1.04] transition-all duration-700" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(3,0,20,0.95) 0%, rgba(3,0,20,0.3) 60%, transparent 100%)` }} />
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-grotesk font-black tracking-[0.2em] uppercase border ${color.badge}`}>{domain}</span>
          <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white hover:text-dark-950 transition-all duration-300">
            <FiGithub size={14} />
          </a>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col gap-3" style={{ transform: "translateZ(15px)" }}>
          <h3 className="text-xl font-black text-white leading-snug group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed flex-1">{description.slice(0, 100)}…</p>
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {tech.slice(0, 3).map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-[9px] font-grotesk font-black uppercase tracking-widest" style={{ color: color.primary, background: color.bg, border: `1px solid ${color.border}` }}>{t}</span>
            ))}
            {tech.length > 3 && <span className="px-2.5 py-1 rounded-full text-[9px] font-grotesk font-black uppercase tracking-widest text-gray-500 bg-white/5 border border-white/10">+{tech.length - 3}</span>}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

/* ═══════════════════════════════════════
   GRID CARD (3D tilt + shine)
═══════════════════════════════════════ */
const GridCard = ({ title, description, tech, id, image, github, domain, delay, onOpen }) => {
  const color = getDomainColor(domain);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 22 });
  const cardScale = useSpring(1, { stiffness: 180, damping: 22 });
  const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full h-full">
      <motion.article
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay }}
        style={{ rotateX, rotateY, scale: cardScale, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => cardScale.set(1.015)}
        onMouseLeave={() => { x.set(0); y.set(0); cardScale.set(1); }}
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
        className="group relative glass rounded-[2.5rem] overflow-hidden cursor-pointer w-full h-full flex flex-col"
        style={{ border: `1px solid ${color.border}`, boxShadow: `0 0 40px ${color.glow}` }}
      >
        {/* Mouse shine */}
        <motion.div
          style={{ background: useTransform([shineX, shineY], ([sx, sy]) => `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.07) 0%, transparent 65%)`) }}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        />

        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9]" style={{ transform: "translateZ(25px)" }}>
          <img src={image} alt={title} className="w-full h-full object-cover opacity-55 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-800" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/30 to-transparent" />
          {/* Domain badge */}
          <span className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-[9px] font-grotesk font-black tracking-[0.22em] uppercase border ${color.badge}`}>{domain}</span>
          {/* ID */}
          <span className="absolute bottom-4 right-5 font-black text-[52px] leading-none text-white/8 select-none pointer-events-none" style={{ fontFamily: "'Outfit', sans-serif" }}>{id}</span>
          {/* GitHub link */}
          <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            className="absolute top-5 right-5 p-2.5 bg-dark-950/60 backdrop-blur-sm border border-white/15 rounded-full hover:bg-white hover:text-dark-950 transition-all duration-300">
            <FiGithub size={15} />
          </a>
        </div>

        {/* Content */}
        <div className="p-7 flex-1 flex flex-col gap-4" style={{ transform: "translateZ(18px)" }}>
          <div>
            <h3 className="text-2xl font-black text-white mb-2 leading-snug">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{description}</p>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-[9px] font-grotesk font-black uppercase tracking-widest" style={{ color: color.primary, background: color.bg, border: `1px solid ${color.border}` }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom color bar on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)` }} />
      </motion.article>
    </div>
  );
};

/* ═══════════════════════════════════════
   BENTO CARD (magazine/editorial layout)
═══════════════════════════════════════ */
const BentoCard = ({ title, description, tech, id, image, github, domain, delay, onOpen, size = "normal" }) => {
  const color = getDomainColor(domain);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
      className={`group relative rounded-[2rem] overflow-hidden cursor-pointer border ${size === "hero" ? "row-span-2" : ""}`}
      style={{ borderColor: color.border, background: "rgba(10,10,26,0.8)" }}
    >
      {/* Full-bleed image background */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.08]"
          style={{ opacity: hovered ? 0.45 : 0.25 }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(3,0,20,0.92) 0%, rgba(3,0,20,0.6) 60%, rgba(3,0,20,0.4) 100%)` }} />
        {/* Domain color gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `radial-gradient(circle at bottom left, ${color.bg} 0%, transparent 60%)` }} />
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-between h-full p-7 ${size === "hero" ? "min-h-[480px]" : "min-h-[220px]"}`}>
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className={`px-3 py-1 rounded-full text-[9px] font-grotesk font-black tracking-[0.22em] uppercase border ${color.badge}`}>{domain}</span>
          <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full hover:bg-white hover:text-dark-950 text-white transition-all duration-300">
            <FiGithub size={13} />
          </a>
        </div>

        {/* Bottom content */}
        <div>
          {/* Ghost ID */}
          <div className="font-black text-[60px] leading-none mb-2 select-none" style={{ color: color.primary, opacity: 0.12, fontFamily: "'Outfit', sans-serif" }}>{id}</div>
          <h3 className={`font-black text-white leading-tight mb-2 ${size === "hero" ? "text-3xl md:text-4xl" : "text-xl"}`}>{title}</h3>
          {size === "hero" && (
            <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">{description}</p>
          )}
          <div className="flex flex-wrap gap-1.5">
            {(size === "hero" ? tech : tech.slice(0, 2)).map((t) => (
              <span key={t} className="px-2.5 py-0.5 rounded-full text-[8px] font-grotesk font-black uppercase tracking-widest" style={{ color: color.primary, background: color.bg, border: `1px solid ${color.border}` }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover: "View" overlay */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <div className="px-6 py-3 rounded-full backdrop-blur-md border text-[10px] font-grotesk font-black uppercase tracking-[0.22em] text-white"
          style={{ background: `${color.bg}`, borderColor: color.border }}>
          Open Case Study →
        </div>
      </motion.div>

      {/* Bottom color bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)` }} />
    </motion.article>
  );
};

/* ═══════════════════════════════════════
   LIST CARD (horizontal cinematic)
═══════════════════════════════════════ */
const ListCard = ({ title, description, tech, id, image, github, domain, delay, onOpen }) => {
  const color = getDomainColor(domain);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
      className="group relative flex flex-col md:flex-row rounded-[1.8rem] overflow-hidden cursor-pointer border transition-all duration-500"
      style={{
        borderColor: hovered ? color.border : "rgba(255,255,255,0.06)",
        background: "rgba(10,10,26,0.7)",
        boxShadow: hovered ? `0 20px 60px ${color.glow}` : "none",
      }}
    >
      {/* Left: image panel */}
      <div className="relative w-full md:w-[280px] md:flex-shrink-0 aspect-[16/9] md:aspect-auto">
        <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
          style={{ opacity: hovered ? 0.8 : 0.4 }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, transparent 60%, rgba(10,10,26,0.95) 100%)` }} />
        {/* Domain color bar */}
        <div className="absolute inset-y-0 left-0 w-1" style={{ background: color.primary }} />
      </div>

      {/* Right: content */}
      <div className="flex-1 p-7 flex flex-col justify-between gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-black text-[11px] font-grotesk tracking-[0.3em] uppercase" style={{ color: color.primary }}>Project {id}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-[8px] font-grotesk font-black tracking-[0.18em] uppercase border ${color.badge}`}>{domain}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{description}</p>
          </div>

          {/* Right actions */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white hover:text-dark-950 text-white transition-all duration-300">
              <FiGithub size={15} />
            </a>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="p-2.5 border rounded-xl text-white transition-colors"
              style={{ background: hovered ? color.bg : "transparent", borderColor: hovered ? color.border : "rgba(255,255,255,0.1)" }}
            >
              <FiArrowUpRight size={15} />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-[9px] font-grotesk font-black uppercase tracking-widest" style={{ color: color.primary, background: color.bg, border: `1px solid ${color.border}` }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const VIEW_MODES = [
  { id: "Marquee", icon: <FiLayers size={13} />, label: "Marquee" },
  { id: "Grid",    icon: <FiGrid size={13} />,   label: "Grid"    },
  { id: "Bento",   icon: <TbLayoutBoardSplit size={14} />, label: "Bento" },
  { id: "List",    icon: <FiList size={13} />,   label: "List"    },
];

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [viewMode, setViewMode] = useState(() => {
    const saved = window.localStorage.getItem(PROJECT_VIEW_MODE_KEY);
    return ["Marquee","Grid","Bento","List"].includes(saved) ? saved : "Marquee";
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const touchStartXRef = useRef(0);

  const filters = ["All", ...new Set(PROJECTS.map((p) => p.domain))];
  const filteredProjects = selectedFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.domain === selectedFilter);
  const marqueeProjects = [...filteredProjects, ...filteredProjects];

  const navigateProject = (direction) => {
    if (!selectedProject || filteredProjects.length < 2) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  useEffect(() => {
    window.localStorage.setItem(PROJECT_VIEW_MODE_KEY, viewMode);
  }, [viewMode]);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const prev = document.body.style.overflow;
    const prevFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const handleKeys = (e) => {
      if (e.key === "Escape") { setSelectedProject(null); return; }
      if (e.key === "ArrowLeft") { e.preventDefault(); navigateProject(-1); return; }
      if (e.key === "ArrowRight") { e.preventDefault(); navigateProject(1); return; }
    };
    document.addEventListener("keydown", handleKeys);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", handleKeys);
      document.body.style.overflow = prev;
      if (prevFocus && "focus" in prevFocus) prevFocus.focus();
    };
  }, [selectedProject]);

  const handleModalTouchStart = (e) => { touchStartXRef.current = e.touches[0]?.clientX || 0; };
  const handleModalTouchEnd = (e) => {
    const dx = (e.changedTouches[0]?.clientX || 0) - touchStartXRef.current;
    if (Math.abs(dx) < 60 || filteredProjects.length < 2) return;
    navigateProject(dx > 0 ? -1 : 1);
  };

  const selectedColor = selectedProject ? getDomainColor(selectedProject.domain) : null;

  return (
    <div id="project" className="relative py-24 md:py-32 min-h-screen flex flex-col justify-center overflow-hidden bg-dark-950">
      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <span className="text-aurora-primary text-[10px] font-grotesk font-black uppercase tracking-[0.4em] block mb-6">Selected Work</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white leading-none">
            Digital <br />
            <span className="aurora-text">Milestones.</span>
          </h1>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-full text-[10px] font-grotesk font-black uppercase tracking-[0.18em] border transition-all ${
                  selectedFilter === filter
                    ? "border-aurora-primary/50 text-aurora-primary bg-aurora-primary/10"
                    : "border-white/15 text-gray-400 hover:text-white hover:border-white/30"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="project-view-toggle mt-5 inline-flex items-center gap-1 rounded-2xl border border-white/10 p-1.5 glass">
            {VIEW_MODES.map(({ id, icon, label }) => (
              <motion.button
                key={id}
                type="button"
                onClick={() => setViewMode(id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`project-view-toggle-btn interactive-press inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[9px] font-grotesk font-black uppercase tracking-[0.18em] border transition-all ${
                  viewMode === id
                    ? "border-aurora-primary/50 text-aurora-primary bg-aurora-primary/10"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {icon} {label}
              </motion.button>
            ))}
          </div>

          <div className="mt-8">
            <motion.a
              href="https://github.com/Vijayakash-588"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-aurora-primary/90 to-aurora-accent/90 text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase border border-white/20 shadow-lg shadow-aurora-primary/15"
            >
              Explore All Projects <FiArrowUpRight size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ═══ MARQUEE VIEW ═══ */}
      <AnimatePresence mode="wait">
        {viewMode === "Marquee" && (
          <motion.div key="marquee" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="w-full relative mt-4 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`project-marquee-track flex gap-6 md:gap-10 px-6 md:px-8 w-max pointer-events-none ${isHovered || selectedProject ? "is-paused" : ""}`}>
              {marqueeProjects.map((proj, index) => (
                <div key={`${proj.id}-${index}`} className="flex-shrink-0 pointer-events-auto">
                  <MarqueeCard {...proj} delay={(index % Math.max(filteredProjects.length, 1)) * 0.06} onOpen={() => setSelectedProject(proj)} />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-dark-950 via-dark-950/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-dark-950 via-dark-950/60 to-transparent z-20 pointer-events-none" />
          </motion.div>
        )}

        {/* ═══ GRID VIEW ═══ */}
        {viewMode === "Grid" && (
          <motion.div key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
            className="w-full mt-4">
            <div className="max-w-[90%] md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredProjects.map((proj, index) => (
                <GridCard key={`${proj.id}-grid`} {...proj} delay={index * 0.1} onOpen={() => setSelectedProject(proj)} />
              ))}
            </div>
          </motion.div>
        )}

        {/* ═══ BENTO VIEW ═══ */}
        {viewMode === "Bento" && (
          <motion.div key="bento" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
            className="w-full mt-4">
            <div className="max-w-[90%] md:max-w-[85%] mx-auto">
              {filteredProjects.length === 0 ? (
                <p className="text-gray-500 text-center py-20">No projects match this filter.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4">
                  {filteredProjects.map((proj, index) => (
                    <div key={`${proj.id}-bento`} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
                      <div className="h-full">
                        <BentoCard {...proj} delay={index * 0.1} onOpen={() => setSelectedProject(proj)} size={index === 0 ? "hero" : "normal"} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ═══ LIST VIEW ═══ */}
        {viewMode === "List" && (
          <motion.div key="list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
            className="w-full mt-4">
            <div className="max-w-[90%] md:max-w-[85%] mx-auto flex flex-col gap-4">
              {filteredProjects.map((proj, index) => (
                <ListCard key={`${proj.id}-list`} {...proj} delay={index * 0.1} onOpen={() => setSelectedProject(proj)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ MODAL ═══ */}
      {selectedProject && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-5 md:p-8">
          <button type="button" className="project-modal-backdrop absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedProject(null)} aria-label="Close project details" />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-case-study-title"
            ref={modalRef}
            onTouchStart={handleModalTouchStart}
            onTouchEnd={handleModalTouchEnd}
            className="project-modal-panel relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl border p-4 sm:p-6 md:p-8"
            style={{ borderColor: selectedColor?.border || "rgba(255,255,255,0.15)" }}
          >
            {/* Domain color top bar in modal */}
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
              style={{ background: `linear-gradient(90deg, transparent, ${selectedColor?.primary || "#0ea5e9"}, transparent)` }} />

            <button type="button" ref={closeButtonRef} onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl border border-white/15 text-gray-300 hover:text-white transition-all"
              style={{ ":hover": { borderColor: selectedColor?.primary } }}
              aria-label="Close">
              <HiX size={18} />
            </button>

            <div className="pr-12 sm:pr-8">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-[10px] font-grotesk font-black tracking-[0.22em] uppercase" style={{ color: selectedColor?.primary }}>
                  Case Study {selectedProject.id}
                </p>
                <span className={`px-2.5 py-0.5 rounded-full text-[8px] font-grotesk font-black tracking-[0.18em] uppercase border ${selectedColor?.badge || ""}`}>
                  {selectedProject.domain}
                </span>
              </div>
              <h3 id="project-case-study-title" className="text-3xl md:text-4xl font-black text-white leading-tight">{selectedProject.title}</h3>
              <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">{selectedProject.description}</p>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="glass rounded-2xl border border-white/8 p-5" style={{ borderColor: `${selectedColor?.border}50` }}>
                <p className="text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Challenge</p>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
              </div>
              <div className="glass rounded-2xl border border-white/8 p-5" style={{ borderColor: `${selectedColor?.border}50` }}>
                <p className="text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Solution</p>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="mt-5 glass rounded-2xl border border-white/8 p-5" style={{ borderColor: `${selectedColor?.border}50` }}>
              <p className="text-[10px] font-grotesk font-black tracking-[0.2em] uppercase text-gray-500 mb-3">Outcomes</p>
              <ul className="space-y-2.5">
                {selectedProject.outcome.map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: selectedColor?.primary }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.tech.map((stack) => (
                <span key={stack} className="px-3 py-1 rounded-full text-[10px] font-grotesk font-black uppercase tracking-[0.14em]"
                  style={{ color: selectedColor?.primary, background: selectedColor?.bg, border: `1px solid ${selectedColor?.border}` }}>
                  {stack}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {filteredProjects.length > 1 && (
                <>
                  <button type="button" onClick={() => navigateProject(-1)}
                    className="interactive-press inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-3 rounded-full glass border border-white/15 text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase hover:border-aurora-primary/45">
                    <HiChevronLeft size={14} /> Prev
                  </button>
                  <button type="button" onClick={() => navigateProject(1)}
                    className="interactive-press inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-3 rounded-full glass border border-white/15 text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase hover:border-aurora-primary/45">
                    Next <HiChevronRight size={14} />
                  </button>
                </>
              )}
              <motion.a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="interactive-press inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-3 rounded-full text-white text-[10px] font-grotesk font-black tracking-[0.2em] uppercase border border-white/20"
                style={{ background: `linear-gradient(135deg, ${selectedColor?.primary}90, ${selectedColor?.primary}60)` }}
              >
                View Repository <FiArrowUpRight size={13} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Project;
