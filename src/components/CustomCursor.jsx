import React, { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, label, [role='button'], .cursor-hover";
const THEMES = ["orbital", "crosshair", "comet"];
const TRAIL_COUNT = 6;

const nextTheme = (currentTheme) => {
  const currentIndex = THEMES.indexOf(currentTheme);
  return THEMES[(currentIndex + 1) % THEMES.length];
};

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [theme, setTheme] = useState("orbital");
  const [isIdle, setIsIdle] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const coreRef = useRef(null);
  const ringRef = useRef(null);
  const haloRef = useRef(null);
  const trailRef = useRef(null);
  const cometRefs = useRef([]);
  const requestRef = useRef(0);

  const targetPos = useRef({ x: 0, y: 0 });
  const corePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const haloPos = useRef({ x: 0, y: 0 });
  const isIdleRef = useRef(false);
  const lastMoveAt = useRef(Date.now());
  const cometTrail = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio_cursor_theme");
    if (savedTheme && THEMES.includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key.toLowerCase() === "c") {
        const updatedTheme = nextTheme(theme);
        setTheme(updatedTheme);
        window.localStorage.setItem("portfolio_cursor_theme", updatedTheme);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, theme]);

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
      lastMoveAt.current = Date.now();
      if (isIdleRef.current) {
        isIdleRef.current = false;
        setIsIdle(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleOver = (event) => {
      setIsInteractive(Boolean(event.target.closest(INTERACTIVE_SELECTOR)));
    };

    const animate = () => {
      const idleNow = Date.now() - lastMoveAt.current > 1200;
      if (idleNow !== isIdleRef.current) {
        isIdleRef.current = idleNow;
        setIsIdle(idleNow);
      }

      corePos.current.x += (targetPos.current.x - corePos.current.x) * 0.32;
      corePos.current.y += (targetPos.current.y - corePos.current.y) * 0.32;
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.18;
      haloPos.current.x += (targetPos.current.x - haloPos.current.x) * 0.1;
      haloPos.current.y += (targetPos.current.y - haloPos.current.y) * 0.1;

      for (let i = 0; i < TRAIL_COUNT; i += 1) {
        const lead = i === 0 ? ringPos.current : cometTrail.current[i - 1];
        cometTrail.current[i].x += (lead.x - cometTrail.current[i].x) * (0.35 - i * 0.04);
        cometTrail.current[i].y += (lead.y - cometTrail.current[i].y) * (0.35 - i * 0.04);

        if (cometRefs.current[i]) {
          const size = 7 - i;
          cometRefs.current[i].style.transform = `translate(${cometTrail.current[i].x - size / 2}px, ${cometTrail.current[i].y - size / 2}px)`;
        }
      }

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

  const handleThemeCycle = () => {
    const updatedTheme = nextTheme(theme);
    setTheme(updatedTheme);
    window.localStorage.setItem("portfolio_cursor_theme", updatedTheme);
  };

  const setThemeDirect = (next) => {
    setTheme(next);
    window.localStorage.setItem("portfolio_cursor_theme", next);
  };

  if (!enabled) {
    return null;
  }

  const isOrbital = theme === "orbital";
  const isCrosshair = theme === "crosshair";
  const isComet = theme === "comet";

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div
        ref={haloRef}
        className={`absolute w-[88px] h-[88px] rounded-full transition-all duration-200 ${
          isInteractive ? "scale-125 opacity-90" : "scale-100 opacity-70"
        }`}
        style={{
          background: isComet
            ? "radial-gradient(circle, rgba(255,94,168,0.3) 0%, rgba(0,213,255,0.18) 44%, rgba(255,94,168,0.02) 75%)"
            : "radial-gradient(circle, rgba(0,213,255,0.24) 0%, rgba(138,107,255,0.18) 42%, rgba(255,94,168,0.02) 72%)",
          filter: isCrosshair ? "blur(4px)" : "blur(10px)",
          mixBlendMode: "screen",
          opacity: isIdle ? 0.3 : 1
        }}
      />

      <div
        ref={trailRef}
        className={`absolute ${isCrosshair ? "w-[74px] h-[74px]" : "w-[60px] h-[60px]"} rounded-full border border-aurora-primary/25 transition-all duration-300 ${
          isClicking ? "scale-75 opacity-80" : "scale-100 opacity-55"
        } ${isComet ? "animate-[spin_12s_linear_infinite]" : "animate-[spin_8s_linear_infinite]"}`}
        style={{ borderStyle: isCrosshair ? "dashed" : "solid", opacity: isIdle ? 0.2 : 1 }}
      >
        <span className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-aurora-accent" />
        <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-aurora-primary" />
      </div>

      <div
        ref={ringRef}
        className={`absolute ${isCrosshair ? "w-12 h-12" : "w-11 h-11"} rounded-full border transition-all duration-200 ${
          isInteractive
            ? "border-aurora-accent/70 scale-125"
            : "border-aurora-secondary/60 scale-100"
        } ${isClicking ? "scale-90" : ""} ${isComet ? "animate-[spin_2.8s_linear_infinite]" : "animate-[spin_4s_linear_infinite]"}`}
        style={{
          boxShadow: isComet
            ? "0 0 30px rgba(255,94,168,0.28)"
            : "0 0 26px rgba(91,124,255,0.25)",
          opacity: isIdle ? 0.35 : 1
        }}
      >
        <span className="absolute top-1/2 left-[-2px] -translate-y-1/2 w-1 h-1 rounded-full bg-aurora-accent" />
        <span className="absolute top-1/2 right-[-2px] -translate-y-1/2 w-1 h-1 rounded-full bg-aurora-primary" />
        {isCrosshair && (
          <>
            <span className="absolute left-1/2 top-[-8px] -translate-x-1/2 w-[1px] h-2 bg-aurora-primary/70" />
            <span className="absolute left-1/2 bottom-[-8px] -translate-x-1/2 w-[1px] h-2 bg-aurora-primary/70" />
            <span className="absolute top-1/2 left-[-8px] -translate-y-1/2 w-2 h-[1px] bg-aurora-primary/70" />
            <span className="absolute top-1/2 right-[-8px] -translate-y-1/2 w-2 h-[1px] bg-aurora-primary/70" />
          </>
        )}
      </div>

      <div
        ref={coreRef}
        className={`absolute w-3 h-3 rounded-full transition-all duration-150 ${
          isClicking ? "scale-150" : "scale-100"
        }`}
        style={{
          background: isComet
            ? "linear-gradient(135deg, rgba(255,94,168,1) 0%, rgba(0,213,255,1) 100%)"
            : "linear-gradient(135deg, rgba(0,213,255,1) 0%, rgba(255,94,168,1) 100%)",
          boxShadow:
            "0 0 16px rgba(0,213,255,0.75), 0 0 26px rgba(255,94,168,0.45), 0 0 36px rgba(138,107,255,0.35)",
          opacity: isIdle ? 0.4 : 1
        }}
      />

      {isComet &&
        Array.from({ length: TRAIL_COUNT }).map((_, i) => (
          <div
            key={`comet-${i}`}
            ref={(el) => {
              cometRefs.current[i] = el;
            }}
            className="absolute rounded-full"
            style={{
              width: `${7 - i}px`,
              height: `${7 - i}px`,
              background:
                i % 2 === 0
                  ? "rgba(255,94,168,0.75)"
                  : "rgba(0,213,255,0.72)",
              filter: "blur(0.3px)",
              opacity: isIdle ? 0.2 : 0.7 - i * 0.08,
              boxShadow:
                i < 2
                  ? "0 0 14px rgba(255,94,168,0.42), 0 0 10px rgba(0,213,255,0.32)"
                  : "none"
            }}
          />
        ))}
      </div>

      <div
        className="fixed bottom-6 right-6 z-[10000] pointer-events-auto"
        onMouseEnter={() => setIsPickerOpen(true)}
        onMouseLeave={() => setIsPickerOpen(false)}
      >
        <div className="glass-strong rounded-2xl border border-white/15 px-3 py-2 shadow-aurora">
          <div className="flex items-center gap-2">
            {THEMES.map((item) => {
              const active = item === theme;
              const colorClass =
                item === "orbital"
                  ? "from-aurora-primary to-aurora-royal"
                  : item === "crosshair"
                    ? "from-aurora-secondary to-white"
                    : "from-aurora-accent to-aurora-primary";

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setThemeDirect(item)}
                  className={`h-6 w-6 rounded-full border transition-all duration-200 ${
                    active
                      ? "border-white/70 scale-110"
                      : "border-white/20 hover:border-white/40"
                  } bg-gradient-to-br ${colorClass}`}
                  aria-label={`Set cursor style ${item}`}
                  title={item}
                />
              );
            })}

            <button
              type="button"
              onClick={handleThemeCycle}
              className="ml-1 px-2 py-1 rounded-lg border border-white/20 text-[9px] font-grotesk font-black tracking-[0.18em] uppercase text-white/80 hover:text-white hover:border-aurora-primary/50 transition-all"
              aria-label="Cycle cursor style"
              title="Shift + C"
            >
              Cycle
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-250 ${
              isPickerOpen ? "max-h-16 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[9px] font-grotesk font-black tracking-[0.2em] uppercase text-white/65">
              Cursor {isOrbital ? "Orbital" : isCrosshair ? "Crosshair" : "Comet"} | Shift + C
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
