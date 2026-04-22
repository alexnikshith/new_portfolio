import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Smooth movement springs
  const springX = useSpring(0, { damping: 50, stiffness: 400 });
  const springY = useSpring(0, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 150); // Offset to center the 300px halo
      springY.set(e.clientY - 150);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY, isVisible]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30"
      style={{
        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.02), transparent 70%)`,
      }}
    >
      <motion.div
        className="w-[300px] h-[300px] bg-primary-500/10 blur-[100px] rounded-full"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
