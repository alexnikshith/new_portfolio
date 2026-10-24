import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.4 };
  const springX = useSpring(-1000, springConfig);
  const springY = useSpring(-1000, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    springX.set(e.clientX);
    springY.set(e.clientY);
    if (!isVisible) setIsVisible(true);

    // Check if hovering clickable elements
    const target = e.target;
    const isInteractive = target && (
      target.closest('a') ||
      target.closest('button') ||
      target.closest('input') ||
      target.closest('.cursor-pointer') ||
      target.getAttribute('role') === 'button'
    );
    setIsHoveringClickable(Boolean(isInteractive));
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  document.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseleave', handleMouseLeave);
  };
}, [springX, springY, isVisible]);

return (
  <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
    {/* 1. Ultra-Luminous Radiant Ambient Spotlight (Instant response) */}
    <div
      className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.38) 0%, rgba(250, 204, 21, 0.18) 35%, rgba(234, 179, 8, 0.06) 60%, transparent 75%)`,
      }}
    />

    {/* 2. Soft Spring Follow Golden Aura (Smooth trailing shade) */}
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full blur-[85px] pointer-events-none"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? (isHoveringClickable ? 0.95 : 0.8) : 0,
        background: 'radial-gradient(circle, rgba(250, 204, 21, 0.72) 0%, rgba(234, 179, 8, 0.35) 45%, transparent 75%)',
        scale: isHoveringClickable ? 1.15 : 1,
        transition: 'scale 0.25s ease-out, opacity 0.25s ease-out',
      }}
    />
  </div>
);
};

export default CursorGlow;
