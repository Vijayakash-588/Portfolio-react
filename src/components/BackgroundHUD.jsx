import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundHUD = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const orbs = [
    { color: "bg-aurora-indigo/8", size: "w-[600px] h-[600px]", pos: "-top-40 -left-40", delay: "0s" },
    { color: "bg-aurora-violet/6", size: "w-[500px] h-[500px]", pos: "top-[30%] -right-20", delay: "5s" },
    { color: "bg-aurora-amber/4", size: "w-[400px] h-[400px]", pos: "top-[60%] left-[10%]", delay: "10s" },
    { color: "bg-aurora-rose/4", size: "w-[350px] h-[350px]", pos: "bottom-[10%] right-[20%]", delay: "15s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Floating Aurora Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{ animationDelay: orb.delay, y: i % 2 === 0 ? y1 : y2 }}
          className={`absolute ${orb.pos} ${orb.size} ${orb.color} rounded-full blur-[120px] animate-drift opacity-60`}
        />
      ))}

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
};

export default BackgroundHUD;
