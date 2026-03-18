import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const [points, setPoints] = useState([]);
  const requestRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const updateTrail = () => {
      setPoints(prevPoints => {
        const newPoint = { ...mousePos.current, id: Date.now() };
        const updatedPoints = [newPoint, ...prevPoints].slice(0, 20); // Keep 20 segments
        return updatedPoints;
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };
    requestRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {points.map((point, index) => {
        const size = (1 - index / points.length) * 20;
        const opacity = (1 - index / points.length);
        const hue = (Date.now() / 10 + index * 10) % 360;
        
        return (
          <div
            key={point.id + index}
            className="absolute rounded-full transition-transform duration-75 ease-out"
            style={{
              left: point.x,
              top: point.y,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `hsla(${hue}, 80%, 60%, ${opacity})`,
              transform: 'translate(-50%, -50%)',
              filter: `blur(${index * 1.5}px)`,
              boxShadow: `0 0 ${size}px hsla(${hue}, 80%, 60%, 0.5)`,
            }}
          />
        );
      })}
      
      {/* Core Cursor */}
      <div 
        className="absolute w-4 h-4 rounded-full bg-white mix-blend-difference z-10"
        style={{
          left: mousePos.current.x,
          top: mousePos.current.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.8)'
        }}
      />
    </div>
  );
};

export default CustomCursor;
