'use strict';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'prototype built':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] shadow-[0_0_5px_rgba(0,240,255,0.1)]">
            Prototype Built
          </span>
        );
      case 'pilot completed':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] shadow-[0_0_5px_rgba(0,240,255,0.1)]">
            Pilot Completed
          </span>
        );
      default:
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border border-white/10 bg-black/40 text-slate-400">
            {status}
          </span>
        );
    }
  };

  return (
    <motion.article className={`project-card flex flex-col h-full overflow-hidden relative group transition-shadow duration-500 ease-out ${featured ? 'border-[#00F0FF] ring-1 ring-[#00F0FF]/20 shadow-[0_4px_30px_rgba(0,240,255,0.15)]' : ''}`} whileHover={{ y: -6 }}>
      {/* Project Image Container */}
      <div className="relative pt-10 px-8 sm:px-12 bg-black/20 border-b border-white/10 overflow-hidden">
        {/* Status & Tags */}
        <div className="absolute top-4 left-4 z-20">
          {getStatusBadge(project.status)}
        </div>
        
        {/* Mock Browser Frame */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-t-xl bg-[#0A0A0C] border border-b-0 border-white/20 shadow-[0_-8px_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transform origin-bottom transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:border-[#00F0FF]/30">
          {/* Browser Top Bar */}
          <div className="h-4 sm:h-5 w-full bg-black/60 border-b border-white/10 flex items-center px-2.5 space-x-1 shrink-0 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#00F0FF] transition-colors duration-300 group-hover:shadow-[0_0_5px_rgba(0,240,255,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#38BDF8] transition-colors duration-300 delay-75 group-hover:shadow-[0_0_5px_rgba(56,189,248,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#B026FF] transition-colors duration-300 delay-150 group-hover:shadow-[0_0_5px_rgba(176,38,255,0.8)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>
          
          {/* Image Content */}
          <div className="relative flex-grow w-full bg-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-700 ease-out mix-blend-screen"
              priority={project.slug === 'creator-campaign-ops-command-center'}
            />
            {/* Inner shadow to sink the image slightly into the frame */}
            <div className="absolute inset-0 shadow-[inset_0_2px_15px_rgba(0,240,255,0.05)] pointer-events-none" />
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-5">
        {featured && (
          <div className="mb-3">
            <span className="inline-block bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.1)]">
              Featured Project
            </span>
          </div>
        )}
        <h3 className="text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors">
          {project.title}
        </h3>
        {featured && (
          <p className="text-[10px] text-[#00F0FF]/80 font-medium mt-1 tracking-wide">Best fit for operations + automation roles</p>
        )}
        
        <p className="text-sm text-slate-400 leading-relaxed mt-2 mb-3">
          {project.shortDescription}
        </p>

        {/* Clean Stat Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stats.map((stat) => (
            <span
              key={stat}
              className="text-[9px] font-mono font-medium text-slate-300 bg-black/40 border border-white/10 px-2.5 py-0.5 rounded-full"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Tools Used */}
        <div className="mt-auto pt-3 border-t border-white/10 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mr-1">Tools:</span>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-mono font-medium text-[#00F0FF] bg-[#00F0FF]/5 px-2 py-0.5 rounded-md border border-[#00F0FF]/20 hover:border-[#00F0FF]/80 hover:bg-[#00F0FF]/10 hover:shadow-[0_0_8px_rgba(0,240,255,0.2)] transition-all"
              >
                {tool}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="group/cta inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-[#00F0FF] hover:text-[#38BDF8] transition-colors mt-1 w-max"
          >
            <span className="border-b border-transparent group-hover/cta:border-[#00F0FF]/50 transition-colors pb-0.5">View Data</span>
            <svg
              className="ml-1 h-3 w-3 transform group-hover/cta:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
