import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const BackgroundHUD = () => {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for high-end feel
  const springConfig = { damping: 30, stiffness: 200 };
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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  
  // Dynamic tilt for the 3D grid
  const tiltX = useTransform(smoothY, [0, 1000], [5, -5]);
  const tiltY = useTransform(smoothX, [0, 1000], [-5, 5]);

  const orbs = [
    { color: "bg-aurora-indigo/15", size: "w-[60vw] h-[60vw]", pos: "-top-[20%] -left-[10%]", speed: 0.05 },
    { color: "bg-aurora-violet/10", size: "w-[50vw] h-[50vw]", pos: "top-[20%] -right-[5%]", speed: -0.08 },
    { color: "bg-aurora-amber/8", size: "w-[40vw] h-[40vw]", pos: "top-[50%] left-[5%]", speed: 0.04 },
    { color: "bg-aurora-rose/6", size: "w-[30vw] h-[30vw]", pos: "bottom-[5%] right-[10%]", speed: -0.06 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-dark-950">
      {/* ═══════════ INTERACTIVE ORBS ═══════════ */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{ 
            y: i % 2 === 0 ? y1 : y2,
            x: useTransform(smoothX, [0, 2000], [0, (i + 1) * 30 * orb.speed]),
            translateY: useTransform(smoothY, [0, 2000], [0, (i + 1) * 30 * orb.speed]),
          }}
          className={`absolute ${orb.pos} ${orb.size} ${orb.color} rounded-full blur-[140px] animate-drift opacity-60`}
        />
      ))}

      {/* ═══════════ 3D HOLOGRAPHIC GRID ═══════════ */}
      <div className="absolute inset-0 [perspective:1000px]">
        <motion.div 
          style={{ rotateX: tiltX, rotateY: tiltY }}
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [transform-style:preserve-3d]" 
        />
      </div>

      {/* ═══════════ SCANNING HUD LINE ═══════════ */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aurora-indigo/20 to-transparent blur-[2px] z-10"
      />

      {/* ═══════════ DYNAMIC STARFIELD/PARTICLES ═══════════ */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 2000, 
              y: Math.random() * 1000, 
              opacity: Math.random() * 0.3,
              scale: Math.random() * 2
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* ═══════════ PREMIUM NOISE TEXTURE ═══════════ */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default BackgroundHUD;
