"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for the trailing ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(0, springConfig);
  const cursorYSpring = useSpring(0, springConfig);

  useEffect(() => {
    // Only show custom cursor on devices with a mouse (pointer: fine)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorXSpring.set(e.clientX);
      cursorYSpring.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorXSpring, cursorYSpring]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing ring (Gradient) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div 
          className="w-full h-full rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#FF7A00]" 
          style={{ 
            padding: '2px', // Border width
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }} 
        />
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 0 : 1, // Shrink dot on hover to focus on the expanded ring
        }}
        transition={{
          x: { type: "tween", ease: "linear", duration: 0 },
          y: { type: "tween", ease: "linear", duration: 0 },
          scale: { type: 'spring', stiffness: 300, damping: 20 }
        }}
      />
    </>
  );
}
