'use strict';

'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// HeroOrb component renders a central glowing orb with orbiting data nodes and floating keyword chips.
// It uses mouse movement to create a subtle parallax effect.

const keywords = ['Analytics', 'Automation', 'AI Systems', 'Workflows'];

export default function HeroOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-80 md:h-full flex items-center justify-center perspective-1000"
    >
      {/* Central glowing orb */}
      <motion.div
        className="w-48 h-48 rounded-full bg-gradient-to-br from-[#005F56] to-[#047857] shadow-xl"
        style={{ rotateX, rotateY }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orbiting data nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-teal-200/30 border border-teal-400/40"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            top: `${30 + i * 20}%`,
            left: `${30 + i * 15}%`,
            animation: `orbit ${12 + i * 2}s linear infinite`,
          }}
        />
      ))}

      {/* Floating keyword chips */}
      <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
        {keywords.map((kw, idx) => (
          <motion.span
            key={idx}
            className="px-2 py-1 text-xs font-medium text-teal-800 bg-teal-100/60 rounded-full mb-2 mr-2"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2 }}
          >
            {kw}
          </motion.span>
        ))}
      </div>

      {/* Keyframes for orbit animation */}
      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
