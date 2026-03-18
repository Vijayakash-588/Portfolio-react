const ProjectCard = ({ title, description, tech, id }) => (
  <div className="group relative glass rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] border border-white/10 hover:border-neon-cyan shadow-xl hover:shadow-neon-cyan/20 animate-reveal">
    <div className="flex justify-between items-start mb-6">
      <div className="bg-neon-cyan/10 px-3 py-1 rounded text-[10px] font-black tracking-widest text-neon-cyan text-glow-cyan">PRJ_{id}</div>
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/20"></div>
        <div className="w-2 h-2 rounded-full bg-neon-orange animate-pulse"></div>
      </div>
    </div>
    
    <h3 className="text-3xl font-black text-white mb-4 group-hover:text-neon-cyan transition-colors">{title}</h3>
    <p className="text-gray-400 text-lg leading-relaxed mb-8">{description}</p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {tech.map((t) => (
        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold text-gray-400">
          {t}
        </span>
      ))}
    </div>

    {/* HUD Line Decorations */}
    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
  </div>
);

const Project = () => {
  const projects = [
    {
      id: "01",
      title: "Virtual Attire",
      description: "Holographic apparel presentation system using OpenCV and Python. Revolutionizing fit-tech with real-time body tracking.",
      tech: ["Python", "OpenCV", "React", "Tailwind"]
    },
    {
      id: "02",
      title: "Motion Capture",
      description: "AI-driven pose estimation engine that converts live camera feeds into 3D skeletal data without expensive hardware.",
      tech: ["Tensorflow", "Python", "React", "Three.js"]
    },
    {
      id: "03",
      title: "BioScan AI",
      description: "Agricultural diagnostic platform identifying plant pathologies via computer vision with immediate remedial suggestions.",
      tech: ["PyTorch", "FastAPI", "Next.js", "MongoDB"]
    },
    {
      id: "04",
      title: "SmartBin Core",
      description: "IoT ecosystem for smart urban waste management, optimizing collection routes via real-time logic and sensors.",
      tech: ["C++", "Arduino", "Express", "Node.js"]
    }
  ];

  return (
    <div id="project" className="relative py-24 min-h-screen">
      <div className="max-w-[85%] mx-auto font-outfit relative z-10">
        
        <div className="mb-16 animate-reveal">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-neon-orange mb-4">Registry_Vault</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white">Featured <span className="text-neon-cyan">Architecture</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
