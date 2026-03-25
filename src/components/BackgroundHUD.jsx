import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const BackgroundHUD = () => {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for high-end feel
  const springConfig = { damping: 40, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  
  // Dynamic tilt for the 3D grid
  const tiltX = useTransform(smoothY, [0, 1000], [3, -3]);
  const tiltY = useTransform(smoothX, [0, 1000], [-3, 3]);

  const orbs = [
    { color: "bg-aurora-indigo/5", size: "w-[60vw] h-[60vw]", pos: "-top-[20%] -left-[10%]", speed: 0.03 },
    { color: "bg-aurora-violet/5", size: "w-[50vw] h-[50vw]", pos: "top-[20%] -right-[5%]", speed: -0.05 },
    { color: "bg-aurora-amber/3", size: "w-[40vw] h-[40vw]", pos: "top-[50%] left-[5%]", speed: 0.02 },
    { color: "bg-aurora-rose/3", size: "w-[30vw] h-[30vw]", pos: "bottom-[5%] right-[10%]", speed: -0.04 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-dark-950">
      {/* ═══════════ INTERACTIVE ORBS ═══════════ */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{ 
            y: i % 2 === 0 ? y1 : y2,
            x: useTransform(smoothX, [0, 2000], [0, (i + 1) * 20 * orb.speed]),
            translateY: useTransform(smoothY, [0, 2000], [0, (i + 1) * 20 * orb.speed]),
          }}
          className={`absolute ${orb.pos} ${orb.size} ${orb.color} rounded-full blur-[140px] animate-drift opacity-40`}
        />
      ))}

      {/* ═══════════ 3D HOLOGRAPHIC GRID ═══════════ */}
      <div className="absolute inset-0 [perspective:1200px]">
        <motion.div 
          style={{ rotateX: tiltX, rotateY: tiltY }}
          className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px] [transform-style:preserve-3d]" 
        />
      </div>

      {/* ═══════════ SCANNING HUD LINE ═══════════ */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-10"
      />

      {/* ═══════════ DYNAMIC STARFIELD/PARTICLES ═══════════ */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 2000, 
              y: Math.random() * 1000, 
              opacity: Math.random() * 0.2,
            }}
            animate={{ 
              y: [null, -50],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{ 
              duration: 15 + Math.random() * 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-20"
          />
        ))}
      </div>

      {/* ═══════════ PREMIUM NOISE TEXTURE ═══════════ */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default BackgroundHUD;
