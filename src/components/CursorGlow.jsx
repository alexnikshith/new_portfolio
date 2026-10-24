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
      {/* 1. Ultra-Luminous Radiant Ambient Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.38) 0%, rgba(250, 204, 21, 0.18) 35%, rgba(234, 179, 8, 0.08) 60%, transparent 75%)`,
        }}
      />

      {/* 2. Spring Follow Soft Golden Aura */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full blur-[75px] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 0.85 : 0,
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.75) 0%, rgba(234, 179, 8, 0.38) 45%, transparent 75%)',
        }}
      />

      {/* 3. Trailing Interactive Spring Ring */}
      <motion.div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-200 ${
          isHoveringClickable
            ? 'w-16 h-16 border-[2.5px] border-zinc-950 bg-yellow-400/35 shadow-[0_0_30px_rgba(250,204,21,1),inset_0_0_15px_rgba(250,204,21,0.6)] scale-110'
            : 'w-11 h-11 border-2 border-yellow-400/90 bg-yellow-400/25 shadow-[0_0_20px_rgba(250,204,21,0.85),inset_0_0_10px_rgba(250,204,21,0.4)]'
        }`}
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* 4. Sharp, Ultra-Bright Laser Tracker Core Point (Instant Tracking) */}
      <div
        className="absolute pointer-events-none transition-transform duration-75"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isHoveringClickable ? 1.35 : 1})`,
        }}
      >
        {/* Ambient Bloom Flare */}
        <div className="absolute -inset-4 rounded-full bg-yellow-300/40 blur-md pointer-events-none" />

        {/* Outer Pulsing Radar Wave */}
        <div className="absolute -inset-2.5 rounded-full border-2 border-yellow-300 animate-ping opacity-80 pointer-events-none" />

        {/* Intermediate Halo Ring */}
        <div className="absolute -inset-1 rounded-full border border-yellow-300 shadow-[0_0_12px_#facc15] pointer-events-none animate-pulse" />

        {/* High-Luminance Electric Yellow Laser Core */}
        <div className="relative w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-white border-2 border-zinc-950 shadow-[0_0_14px_#ffffff,0_0_24px_#fde047,0_0_40px_#facc15,0_0_65px_#eab308,0_0_90px_rgba(250,204,21,0.85)] flex items-center justify-center">
          {/* Intense Pure White Center Hotspot */}
          <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_14px_#ffffff]" />
        </div>
      </div>
    </div>
  );
};

export default CursorGlow;
