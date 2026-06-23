import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BackgroundHUD = () => {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const canvasRef = useRef(null);

  // Smooth mouse movement for HUD grid & other elements
  const springConfig = { damping: 45, stiffness: 90 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [mouseActive, setMouseActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMouseActive(true);
    };
    const handleMouseLeave = () => {
      setMouseActive(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Canvas Plexus Network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates tracker for canvas physics
    const canvasMouse = { x: 0, y: 0 };
    const handleCanvasMouseMove = (e) => {
      canvasMouse.x = e.clientX;
      canvasMouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleCanvasMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        // Base coordinate float velocities
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        
        this.radius = Math.random() * 1.5 + 1;
        this.color = Math.random() > 0.5 ? "primary" : "secondary";
      }

      update(isLight) {
        // Normal drift float
        this.x += this.vx;
        this.y += this.vy;

        // Bounce back from boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse physics interaction (repulsion)
        if (mouseActive) {
          const dx = this.x - canvasMouse.x;
          const dy = this.y - canvasMouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180; // interaction radius

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const dirX = dx / dist;
            const dirY = dy / dist;
            // Push away from cursor
            const pushX = dirX * force * 3.5;
            const pushY = dirY * force * 3.5;

            this.x += pushX;
            this.y += pushY;
          }
        }
      }

      draw(isLight) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Theme aware coloring
        if (isLight) {
          ctx.fillStyle = this.color === "primary" ? "rgba(13, 110, 253, 0.45)" : "rgba(111, 66, 193, 0.45)";
        } else {
          ctx.fillStyle = this.color === "primary" ? "rgba(14, 165, 233, 0.65)" : "rgba(99, 102, 241, 0.65)";
        }
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleDensity = window.innerWidth < 768 ? 40 : 90;
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update(isLight);
        p.draw(isLight);
      });

      // Draw connection lines
      const maxDistance = window.innerWidth < 768 ? 85 : 125;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Fades as distance increases
            const alpha = (1 - dist / maxDistance);
            if (isLight) {
              ctx.strokeStyle = `rgba(13, 110, 253, ${alpha * 0.08})`;
              ctx.lineWidth = 0.65;
            } else {
              // Dark mode uses cyan/indigo glow lines
              ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.16})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleCanvasMouseMove);
    };
  }, [mouseActive]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  // Dynamic tilt for the 3D grid
  const tiltX = useTransform(smoothY, [0, 1200], [5, -5]);
  const tiltY = useTransform(smoothX, [0, 1900], [-5, 5]);

  // Glow spotlight coordinates following the mouse
  const spotlightX = useTransform(smoothX, (val) => `${val}px`);
  const spotlightY = useTransform(smoothY, (val) => `${val}px`);

  return (
    <div className="background-hud fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-dark-950">
      {/* ═══════════ INTERACTIVE HTML5 CANVAS PLEXUS ═══════════ */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* ═══════════ AMBIENT MOUSE SPOTLIGHT (GLOWING AURA) ═══════════ */}
      <motion.div
        style={{
          left: spotlightX,
          top: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.06] bg-aurora-primary dark:bg-aurora-primary/15 transition-opacity pointer-events-none"
      />

      {/* ═══════════ DRIFTING COMPONENT ORBS ═══════════ */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-aurora-primary/10 rounded-full blur-[140px] opacity-35 dark:opacity-40"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] max-w-[900px] bg-aurora-secondary/5 rounded-full blur-[150px] opacity-30 dark:opacity-35"
      />

      {/* ═══════════ 3D HOLOGRAPHIC GRID ═══════════ */}
      <div className="absolute inset-0 [perspective:1200px]">
        <motion.div 
          style={{ rotateX: tiltX, rotateY: tiltY }}
          className="hud-grid absolute inset-[-10%] opacity-[0.035] dark:opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100px_100px] [transform-style:preserve-3d] transition-all" 
        />
      </div>

      {/* ═══════════ SCANNING HUD LINE ═══════════ */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="hud-scan-line absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent z-10"
      />

      {/* ═══════════ PREMIUM NOISE TEXTURE ═══════════ */}
      <div
        className="hud-noise absolute inset-0 opacity-[0.015] dark:opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default BackgroundHUD;
