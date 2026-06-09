import { useEffect, useRef } from "react";

// Tracks the loading progress and calls the callback when done
export const setProgress = (onProgress) => {
  let loadedValue = 0;

  const updateProgress = (value) => {
    loadedValue = value;
    if (onProgress) onProgress(value);
  };

  const loaded = () => {
    return new Promise((resolve) => {
      updateProgress(100);
      setTimeout(resolve, 300);
    });
  };

  return { updateProgress, loaded };
};

// Simple loading overlay component
const Loading = ({ progress = 0 }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  if (progress >= 100) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 900,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        Loading Scene
      </div>
      <div
        style={{
          width: "200px",
          height: "2px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #6366f1, #0ea5e9)",
            borderRadius: "4px",
            transition: "width 0.4s ease",
            width: "0%",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.2em",
        }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default Loading;
