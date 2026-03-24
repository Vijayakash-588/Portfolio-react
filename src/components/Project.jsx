import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, tech, id, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8 }}
    className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-aurora-indigo/30 transition-all duration-500 flex flex-col"
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
      
      {/* Project number */}
      <div className="absolute top-4 left-4 px-3 py-1 glass-strong rounded-full">
        <span className="text-[10px] font-grotesk font-bold tracking-[0.2em] aurora-text">{id}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex-1 flex flex-col">
      <h3 className="text-2xl font-black text-white mb-3 group-hover:aurora-text transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6 flex-1">{description}</p>

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

    {/* Hover glow */}
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-aurora-indigo/5 to-transparent" />
  </motion.div>
);

const Project = () => {
  const projects = [
    {
      id: "01",
      title: "Virtual Attire",
      description: "Holographic apparel presentation system using OpenCV and Python. Revolutionizing fit-tech with real-time body tracking.",
      tech: ["Python", "OpenCV", "React", "Tailwind"],
      image: "/projects/p1.png",
    },
    {
      id: "02",
      title: "Motion Capture",
      description: "AI-driven pose estimation engine that converts live camera feeds into 3D skeletal data without expensive hardware.",
      tech: ["Tensorflow", "Python", "React", "Three.js"],
      image: "/projects/p2.png",
    },
    {
      id: "03",
      title: "BioScan AI",
      description: "Agricultural diagnostic platform identifying plant pathologies via computer vision with immediate remedial suggestions.",
      tech: ["PyTorch", "FastAPI", "Next.js", "MongoDB"],
      image: "/projects/p3.png",
    },
    {
      id: "04",
      title: "SmartBin Core",
      description: "IoT ecosystem for smart urban waste management, optimizing collection routes via real-time logic and sensors.",
      tech: ["C++", "Arduino", "Express", "Node.js"],
      image: "/projects/p4.png",
    },
  ];

  return (
    <div id="project" className="relative py-28 min-h-screen">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aurora-amber/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[85%] mx-auto font-outfit relative z-10">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <ProjectCard key={proj.id} {...proj} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
