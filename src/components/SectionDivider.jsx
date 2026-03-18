import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative h-48 overflow-hidden flex items-center justify-center pointer-events-none group">
      {/* Background Glitch Wipe */}
      <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "-100%", opacity: [0, 0.15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-t from-transparent via-neon-cyan/20 to-transparent skew-y-12"
      />

      {/* Primary Data Surge */}
      <div className="absolute w-full flex items-center justify-center">
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="w-[95%] h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent shadow-[0_0_30px_rgba(6,182,212,1)]"
        />
        
        {/* Pulsing Core */}
        <motion.div 
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-40 h-40 bg-neon-cyan/5 blur-3xl rounded-full"
        />
      </div>
      
      {/* High Speed Data Fragments */}
      {[...Array(5)].map((_, i) => (
        <motion.div 
          key={i}
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ 
            x: "200%", 
            opacity: [0, 1, 0],
            width: [100, 300, 100]
          }}
          viewport={{ once: false }}
          transition={{ 
            duration: 0.8 + Math.random(), 
            repeat: Infinity, 
            delay: i * 0.4,
            ease: "circIn"
          }}
          className="absolute h-[2px] bg-white/50 shadow-[0_0_15px_#fff] blur-[1px]"
          style={{ top: `${20 + i * 15}%` }}
        />
      ))}

      {/* HUD Telemetry Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-4 text-[8px] font-mono text-neon-cyan tracking-[0.5em] uppercase"
      >
        Synchronizing_Section_Payload...
      </motion.div>
    </div>
  );
};

export default SectionDivider;
