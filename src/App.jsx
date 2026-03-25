import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import CustomCursor from "./components/CustomCursor";
import SectionDivider from "./components/SectionDivider";
import BackgroundHUD from "./components/BackgroundHUD";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 h-80 w-[2px] bg-white/5 z-50 hidden xl:block border-x border-white/5">
      <motion.div 
        style={{ scaleY }}
        className="absolute top-0 left-0 w-full bg-neon-cyan origin-top shadow-[0_0_20px_rgba(6,182,212,1)]"
      />
      
      {/* HUD Marker with fragment effect */}
      <motion.div 
        className="absolute -left-[9px] w-5 h-5 flex items-center justify-center"
        style={{ top: `${scaleY * 100}%` }}
      >
        <div className="w-full h-full border border-neon-cyan relative">
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-1 bg-neon-cyan/40" 
          />
          <div className="absolute -top-1 -left-1 w-1 h-1 bg-white" />
          <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-white" />
        </div>
        {/* Connection Line */}
        <div className="absolute right-[-10px] w-4 h-[1px] bg-neon-cyan/30" />
      </motion.div>

      {/* Vertical Steps */}
      {[0, 25, 50, 75, 100].map((step) => (
        <div 
          key={step} 
          className="absolute -left-1 w-2 h-[1px] bg-white/20" 
          style={{ top: `${step}%` }}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <BackgroundHUD />
      <ScrollProgress />
      <Header />
      <Home />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Project />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
