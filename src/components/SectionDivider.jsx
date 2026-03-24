import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative h-32 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Main gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-[60%] h-[1px] bg-gradient-to-r from-transparent via-aurora-indigo/30 to-transparent"
      />

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute w-1.5 h-1.5 rounded-full bg-aurora-indigo/50"
      />

      {/* Soft glow behind */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-32 h-32 bg-aurora-indigo/5 rounded-full blur-[40px]"
      />
    </div>
  );
};

export default SectionDivider;
