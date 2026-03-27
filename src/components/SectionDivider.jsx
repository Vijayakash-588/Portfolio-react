import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative h-36 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,213,255,0.08),transparent_55%)]" />

      {/* Main gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-[72%] h-[1px] bg-gradient-to-r from-transparent via-aurora-indigo/35 to-transparent"
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-[36%] h-[1px] bg-gradient-to-r from-transparent via-aurora-accent/35 to-transparent"
      />

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute w-2 h-2 rounded-full bg-aurora-primary/80 shadow-[0_0_18px_rgba(0,213,255,0.7)]"
      />

      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute top-1/2 -translate-y-1/2 px-4 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[9px] font-grotesk font-black tracking-[0.22em] uppercase text-white/55"
      >
        Proven impact
      </motion.span>

      {/* Soft glow behind */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-40 h-40 bg-aurora-indigo/10 rounded-full blur-[44px]"
      />
    </div>
  );
};

export default SectionDivider;
