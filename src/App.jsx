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
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

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
        className="absolute top-0 left-0 w-full bg-aurora-indigo origin-top shadow-lg"
      />
      
      {/* HUD Marker with fragment effect */}
      <motion.div 
        className="absolute -left-[9px] w-5 h-5 flex items-center justify-center"
        style={{ top: `${scaleY * 100}%` }}
      >
        <div className="w-full h-full border border-white/20 relative">
          <motion.div 
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-1 bg-white/10" 
          />
          <div className="absolute -top-1 -left-1 w-1 h-1 bg-gray-500" />
          <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-gray-500" />
        </div>
        {/* Connection Line */}
        <div className="absolute right-[-10px] w-4 h-[1px] bg-white/10" />
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

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 560);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.22 }}
          className="floating-top-btn fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[120] w-12 h-12 rounded-2xl glass-strong border border-white/15 text-white hover:border-aurora-primary/50 hover:text-aurora-primary transition-colors flex items-center justify-center shadow-aurora"
          aria-label="Back to top"
          title="Back to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const SectionReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const SectionRail = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Journey" },
    { id: "project", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-[95] hidden 2xl:flex flex-col items-start gap-2.5">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          smooth={true}
          duration={500}
          spy={true}
          offset={-90}
          activeClass="section-rail-active"
          className="section-rail-link cursor-pointer"
        >
          <span className="text-[10px] font-grotesk font-black uppercase tracking-[0.22em]">
            {section.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio_theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative">
      <CustomCursor />
      <BackgroundHUD />
      <ScrollProgress />
      <SectionRail />
      <BackToTop />
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <Home />
      <SectionDivider />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionDivider />
      <SectionReveal delay={0.04}>
        <Experience />
      </SectionReveal>
      <SectionDivider />
      <SectionReveal delay={0.06}>
        <Project />
      </SectionReveal>
      <SectionDivider />
      <SectionReveal delay={0.08}>
        <Contact />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <Footer />
      </SectionReveal>
    </div>
  );
};
export default App;
