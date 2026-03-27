import React, { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, label, [role='button'], .cursor-hover";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const coreRef = useRef(null);
  const ringRef = useRef(null);
  const haloRef = useRef(null);
  const trailRef = useRef(null);
  const requestRef = useRef(0);

  const targetPos = useRef({ x: 0, y: 0 });
  const corePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const haloPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAvailability = () => {
      setEnabled(!coarsePointer.matches && !reducedMotion.matches && window.innerWidth >= 1024);
    };

    updateAvailability();
    window.addEventListener("resize", updateAvailability);
    coarsePointer.addEventListener("change", updateAvailability);
    reducedMotion.addEventListener("change", updateAvailability);

    return () => {
      window.removeEventListener("resize", updateAvailability);
      coarsePointer.removeEventListener("change", updateAvailability);
      reducedMotion.removeEventListener("change", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = "";
      return undefined;
    }

    document.body.style.cursor = "none";

    const handleMouseMove = (event) => {
      targetPos.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleOver = (event) => {
      setIsInteractive(Boolean(event.target.closest(INTERACTIVE_SELECTOR)));
    };

    const animate = () => {
      corePos.current.x += (targetPos.current.x - corePos.current.x) * 0.32;
      corePos.current.y += (targetPos.current.y - corePos.current.y) * 0.32;
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.18;
      haloPos.current.x += (targetPos.current.x - haloPos.current.x) * 0.1;
      haloPos.current.y += (targetPos.current.y - haloPos.current.y) * 0.1;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate(${corePos.current.x - 6}px, ${corePos.current.y - 6}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 22}px, ${ringPos.current.y - 22}px)`;
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${haloPos.current.x - 44}px, ${haloPos.current.y - 44}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${ringPos.current.x - 30}px, ${ringPos.current.y - 30}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleOver);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = "";
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div
        ref={haloRef}
        className={`absolute w-[88px] h-[88px] rounded-full transition-all duration-200 ${
          isInteractive ? "scale-125 opacity-90" : "scale-100 opacity-70"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(0,213,255,0.24) 0%, rgba(138,107,255,0.18) 42%, rgba(255,94,168,0.02) 72%)",
          filter: "blur(10px)",
          mixBlendMode: "screen"
        }}
      />

      <div
        ref={trailRef}
        className={`absolute w-[60px] h-[60px] rounded-full border border-aurora-primary/25 transition-all duration-300 ${
          isClicking ? "scale-75 opacity-80" : "scale-100 opacity-55"
        } animate-[spin_8s_linear_infinite]`}
      >
        <span className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-aurora-accent" />
        <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-aurora-primary" />
      </div>

      <div
        ref={ringRef}
        className={`absolute w-11 h-11 rounded-full border transition-all duration-200 ${
          isInteractive
            ? "border-aurora-accent/70 scale-125"
            : "border-aurora-secondary/60 scale-100"
        } ${isClicking ? "scale-90" : ""} animate-[spin_4s_linear_infinite]`}
        style={{ boxShadow: "0 0 26px rgba(91,124,255,0.25)" }}
      >
        <span className="absolute top-1/2 left-[-2px] -translate-y-1/2 w-1 h-1 rounded-full bg-aurora-accent" />
        <span className="absolute top-1/2 right-[-2px] -translate-y-1/2 w-1 h-1 rounded-full bg-aurora-primary" />
      </div>

      <div
        ref={coreRef}
        className={`absolute w-3 h-3 rounded-full transition-all duration-150 ${
          isClicking ? "scale-150" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(0,213,255,1) 0%, rgba(255,94,168,1) 100%)",
          boxShadow:
            "0 0 16px rgba(0,213,255,0.75), 0 0 26px rgba(255,94,168,0.45), 0 0 36px rgba(138,107,255,0.35)"
        }}
      />
    </div>
  );
};

export default CustomCursor;
