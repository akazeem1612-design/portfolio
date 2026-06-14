'use strict';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'prototype built':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border border-teal-200 bg-teal-50 text-teal-800">
            Prototype Built
          </span>
        );
      case 'pilot completed':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border border-teal-200 bg-teal-50 text-teal-800">
            Pilot Completed
          </span>
        );
      default:
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="project-card flex flex-col h-full bg-white border border-zinc-200/60 overflow-hidden relative group">
      {/* Project Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-w-768px) 100vw, 33vw"
          className="object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          priority={project.slug === 'creator-campaign-ops-command-center'}
        />
        {/* Status & Tags */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          {getStatusBadge(project.status)}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-base font-bold text-zinc-900 group-hover:text-teal-800 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-xs text-zinc-500 leading-relaxed mt-2 mb-4">
          {project.shortDescription}
        </p>

        {/* Clean Stat Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stats.map((stat) => (
            <span
              key={stat}
              className="text-[9px] font-mono font-medium text-zinc-500 bg-zinc-50 border border-zinc-200/60 px-2.5 py-0.5 rounded-full"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Tools Used */}
        <div className="mt-auto pt-4 border-t border-zinc-100 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1">
            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mr-1 mt-0.5">Tools:</span>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[9px] font-mono text-zinc-600 bg-zinc-50/50 px-1.5 py-0.5 rounded border border-zinc-200/30"
              >
                {tool}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-[10px] font-bold uppercase tracking-wider text-teal-800 hover:text-teal-600 transition-colors inline-flex items-center group/btn mt-1"
          >
            View Case Study
            <svg
              className="ml-1 h-3 w-3 transform group-hover/btn:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
