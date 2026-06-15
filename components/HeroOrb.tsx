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

  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

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
      {/* HUD Rings (Background) */}
      <motion.div
        className="absolute w-56 h-56 rounded-full border border-dashed border-[#00F0FF]/20 opacity-50 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full border border-[#B026FF]/30 opacity-40 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Central glowing orb */}
      <motion.div
        className="w-40 h-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,240,255,0.8),rgba(176,38,255,0.4)_50%,transparent_100%)] shadow-[0_0_60px_rgba(0,240,255,0.3)] backdrop-blur-md border border-[#00F0FF]/30"
        style={{ rotateX, rotateY }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orbiting data nodes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#00F0FF]/20 border border-[#00F0FF]/50 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            top: `${40 + i * 8}%`,
            left: `${40 + i * 8}%`,
            animation: `orbit ${20 + i * 5}s linear infinite`,
          }}
        />
      ))}

      {/* Floating keyword chips */}
      <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none z-10">
        {keywords.map((kw, idx) => (
          <motion.span
            key={idx}
            className="px-2.5 py-1 text-[10px] font-mono font-bold text-[#00F0FF] bg-black/60 border border-[#00F0FF]/40 rounded shadow-[0_0_10px_rgba(0,240,255,0.2)] backdrop-blur-md mb-2 mr-2 uppercase tracking-widest"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
          >
            {kw}
          </motion.span>
        ))}
      </div>

      {/* Keyframes for orbit animation */}
      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
