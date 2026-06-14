import React, { useEffect, useRef } from 'react';

const HeroVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5;
      container.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
    };
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 md:h-full flex items-center justify-center perspective-1000"
    >
      {/* Abstract bust – simple circle with a subtle gradient */}
      <svg
        viewBox="0 0 200 200"
        className="w-48 h-48 animate-rotate-slow opacity-90"
      >
        <defs>
          <radialGradient id="headGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0f7fa" />
            <stop offset="100%" stopColor="#80deea" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#headGrad)" />
      </svg>

      {/* Orbiting data nodes */}
      {[...Array(6)].map((_, i) => (
        <div
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
        {['Analytics', 'Automation', 'AI Systems', 'Workflows'].map((kw, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs font-medium text-teal-800 bg-teal-100/60 rounded-full mb-2 mr-2 animate-float"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* Inline style for keyframes */}
      <style jsx>{`
        @keyframes rotate-slow {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HeroVisual;
