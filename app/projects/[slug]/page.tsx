'use strict';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto bg-[#fcfbfa]">
      {/* Back Link */}
      <Link 
        href="/#projects" 
        className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-teal-800 transition-colors mb-10 group"
      >
        <svg 
          className="h-3 w-3 transform group-hover:-translate-x-0.5 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Projects</span>
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-zinc-400 mb-3">
          <span className="text-teal-800 border border-teal-200/50 bg-teal-50 px-2 py-0.5 rounded-full">
            {project.status}
          </span>
          <span>•</span>
          <span>{project.date}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mb-4">
          {project.title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed italic">
          {project.shortDescription}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-zinc-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-zinc-600 bg-white hover:bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>View Repository</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-700 px-4 py-2 rounded-full transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Active Workflow</span>
            </a>
          )}
        </div>
      </header>

      {/* Visual Image Banner */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-50 border border-zinc-200/50 rounded-2xl mb-12 shadow-sm shadow-zinc-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Case Study Sections */}
      <div className="space-y-10">
        {/* Stat Pills Header Info */}
        <div className="flex flex-wrap gap-2 p-4 bg-zinc-50 rounded-xl border border-zinc-200/50">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider w-full mb-1">Key Parameters:</span>
          {project.stats.map((stat) => (
            <span 
              key={stat} 
              className="text-[10px] font-mono font-medium text-zinc-700 bg-white border border-zinc-200/60 px-3 py-0.5 rounded-full shadow-sm shadow-zinc-100/40"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Section: Overview */}
        {project.overview && (
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Overview
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* Section: Problem */}
        {project.problem && (
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Problem
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {project.problem}
            </p>
          </section>
        )}

        {/* Section: Goal */}
        {project.goal && (
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Goal
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {project.goal}
            </p>
          </section>
        )}

        {/* Section: Tools Used */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
            Tools Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span 
                key={tool} 
                className="text-xs font-mono text-zinc-700 bg-zinc-50 border border-zinc-200/60 px-3 py-1 rounded"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Section: Process */}
        {project.process && (
          <section className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-1">
              {project.process.map((step, idx) => (
                <li key={idx} className="pl-1">
                  {step.includes(': ') ? (
                    <>
                      <span className="font-semibold text-zinc-800">{step.split(': ')[0]}:</span>
                      <span> {step.split(': ').slice(1).join(': ')}</span>
                    </>
                  ) : (
                    <span>{step}</span>
                  )}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Section: System Workflow & Automation */}
        {project.workflowImage && (
          <section className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              {project.workflowTitle || "System Workflow & Automation"}
            </h3>
            {project.workflowDescription && (
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed italic">
                {project.workflowDescription}
              </p>
            )}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-50 border border-zinc-200/50 rounded-2xl shadow-sm">
              <Image
                src={project.workflowImage}
                alt={project.workflowTitle || "Workflow Diagram"}
                fill
                sizes="100vw"
                className="object-contain p-4 object-center"
              />
            </div>
          </section>
        )}

        {/* Section: Standard Operating Procedure (SOP) */}
        {project.sop && (
          <section className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              {project.sop.title}
            </h3>
            <div className="bg-teal-50/20 border border-teal-200/40 p-5 rounded-xl space-y-3 shadow-sm">
              <p className="text-xs font-bold text-teal-950 uppercase tracking-wider">
                Purpose: <span className="font-medium text-zinc-600 normal-case">{project.sop.purpose}</span>
              </p>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block border-b border-zinc-100 pb-1">Daily Checklist Procedure:</span>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-1">
                  {project.sop.steps.map((step, idx) => (
                    <li key={idx} className="pl-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* Section: Key Findings */}
        {project.findings && (
          <section className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Key Findings
            </h3>
            <ul className="list-disc list-inside space-y-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-1">
              {project.findings.map((finding, idx) => (
                <li key={idx} className="pl-1">
                  {finding}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Section: Limitations */}
        {project.limitations && (
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Limitations
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {project.limitations}
            </p>
          </section>
        )}

        {/* Section: Next Improvements */}
        {project.improvements && (
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Next Improvements
            </h3>
            <ul className="list-none space-y-2 pl-1">
              {project.improvements.map((improvement, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-zinc-600 flex items-start space-x-2">
                  <span className="text-teal-800 mt-1">✓</span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Section: Resume Bullets */}
        {project.resumeBullets && (
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
              Resume Bullets
            </h3>
            <div className="bg-zinc-50 border border-zinc-200/60 p-5 rounded-xl">
              <ul className="list-disc list-inside space-y-3 text-xs text-zinc-600 leading-relaxed">
                {project.resumeBullets.map((bullet, idx) => (
                  <li key={idx} className="pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
