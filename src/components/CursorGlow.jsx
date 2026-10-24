import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const springX = useSpring(-1000, springConfig);
  const springY = useSpring(-1000, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 175);
      springY.set(e.clientY - 175);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [springX, springY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.05), transparent 75%)`,
        }}
      />
      <motion.div
        className="w-[350px] h-[350px] rounded-full blur-[110px] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 0.35 : 0,
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(6, 182, 212, 0.25) 50%, transparent 80%)',
        }}
      />
    </div>
  );
};

export default CursorGlow;
