import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundHUD = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax offsets for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20">
      {/* Large Rotating Grid Circle */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] border border-neon-cyan/10 rounded-full flex items-center justify-center"
      >
        <div className="w-[80%] h-[80%] border border-neon-cyan/5 rounded-full" />
        <div className="absolute w-full h-[1px] bg-neon-cyan/20" />
        <div className="absolute w-[1px] h-full bg-neon-cyan/20" />
      </motion.div>

      {/* Floating HUD Squares */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[20%] right-[10%] w-40 h-40 border border-neon-orange/20 rotate-45"
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-neon-orange/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-orange/40" />
      </motion.div>

      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[30%] left-[15%] w-60 h-60 border border-neon-cyan/10 rounded-xl"
      >
        <div className="absolute top-2 left-2 w-1 h-1 bg-neon-cyan animate-pulse" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-neon-cyan animate-pulse" />
      </motion.div>

      {/* Floating System Codes */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -800]) }}
        className="absolute top-[40%] left-[5%] text-[10px] font-mono text-neon-cyan/30 flex flex-col gap-2"
      >
        {["0x7F_INIT", "CORE_SYNC_88", "BUFF_OVFL_PROTECT", "X86_64_ARCH"].map((code, i) => (
          <span key={i}>{code}</span>
        ))}
      </motion.div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [800, -200]) }}
        className="absolute bottom-[10%] right-[5%] text-[10px] font-mono text-neon-orange/30 flex flex-col gap-2 text-right"
      >
        {["RECV_PKT_99", "PORT_FWD_OPEN", "DNS_RES_SECURE", "MAC_ADDR_MASK"].map((code, i) => (
          <span key={i}>{code}</span>
        ))}
      </motion.div>

      {/* Background Static Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
};

export default BackgroundHUD;
