'use strict';

'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import HeroVisual from '@/components/HeroVisual';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Message successfully sent. I will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Specific skills from homepage_copy.md
  const skillsList = [
    'Make.com',
    'Airtable',
    'Google Sheets',
    'APIs',
    'Workflow Automation',
    'Dashboarding',
    'Business Analysis',
    'Operations Systems',
    'CRM Logic',
    'AI Automation',
    'Data Analysis',
    'SOP Documentation'
  ];

  const resumeHistory = [
    {
      type: 'Education',
      title: 'Honours Bachelor of Commerce, Business Technology Management',
      institution: 'University of Ottawa, Telfer School of Management',
      period: '2022 - 2026',
      details: [
        'Graduated Cum Laude',
        'Dean’s Honour List, Fall 2025',
        'Merit Scholarship Recipient',
        'Relevant coursework: Business Data Mining, Cybersecurity Management, Financial Management, Project Management, Systems Analysis, Statistics for Management',
        'Certification: AWS Certified Cloud Practitioner'
      ]
    },
    {
      type: 'Experience',
      title: 'Data Analytics Intern',
      institution: 'Ededge Learning (EGIEP)',
      period: 'May 2025 - Jul 2025',
      details: [
        'Built data pipelines in Python and SQL for data cleaning, exploratory analysis, regression, classification, and business dataset preparation.',
        'Designed Tableau and Power BI dashboards that consolidated KPIs from multiple data sources.',
        'Automated recurring queries and reporting workflows to improve consistency across virtual teams.'
      ]
    },
    {
      type: 'Experience',
      title: 'Strategic Planning Consultant',
      institution: 'Sportoutaouais',
      period: 'Jan 2024 - Apr 2024',
      details: [
        'Led stakeholder consultation across 15+ stakeholders.',
        'Built multi‑scenario Excel financial models covering budget forecasts, sensitivity analysis, and variance tracking.',
        'Helped translate stakeholder priorities into a strategic plan adopted by the Board of Directors.'
      ]
    },
    {
      type: 'Project Work',
      title: 'Independent Project Developer',
      institution: 'Personal Portfolio Project Series',
      period: 'Sept 2025 - Present',
      details: [
        'Designed a simulated creator campaign operations backend using Airtable and Make.com to manage brands, campaigns, creators, deliverables, and payouts.',
        'Engineered an ETL pipeline parsing Canadian labour market listings via Adzuna API, categorizing skills using spreadsheet regex formulas.',
        'Built a lead operations CRM workflow concept for home services, automating urgency classification and follow‑up templates.'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,#f0fdfa_0%,transparent_100%)]">
        {/* Left side – Text */}
        <div className="flex-1 max-w-2xl mx-auto md:mx-0 text-center md:text-left z-10 space-y-6" data-aos="fade-right" data-aos-delay="100">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-teal-200/50 bg-teal-50/50 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 shadow-sm shadow-zinc-100">
            Business Technology • Analytics • AI Automation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] animate-fade-in" data-aos="fade-up" data-aos-delay="200">
            Business Analytics,<br />
            <span className="text-teal-800">Automation &amp; AI Projects</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed animate-fade-in" data-aos="fade-up" data-aos-delay="300">
            I build practical systems that use data, automation, and AI to solve business problems, streamline operations, and improve decision-making.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start" data-aos="fade-left" data-aos-delay="400">
            <a href="#projects" className="px-6 py-3 rounded-full bg-teal-800 hover:bg-teal-700 text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-md shadow-teal-800/10 animate-fade-in" data-aos="zoom-in" data-aos-delay="500">
              View Projects
            </a>
            <a href="#resume" className="px-6 py-3 rounded-full bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 text-sm font-bold uppercase tracking-wider transition-colors shadow-sm animate-fade-in" data-aos="zoom-in" data-aos-delay="600">
              View Resume
            </a>
          </div>
        </div>
        {/* Right side – Interactive Visual */}
        <div className="flex-1 w-full max-w-md mt-10 md:mt-0" data-aos="zoom-in">
          <HeroVisual />
        </div>
        {/* AOS placeholder */}
        <style jsx>{`
          @keyframes fadeRight { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fadeLeft { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          [data-aos="fade-right"] { animation: fadeRight 0.8s ease-out forwards; }
          [data-aos="fade-left"] { animation: fadeLeft 0.8s ease-out forwards; }
          [data-aos="zoom-in"] { animation: zoomIn 0.8s ease-out forwards; }
        `}</style>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/50 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase mb-2">
              Projects
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
              Featured Case Studies
            </h3>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xl mx-auto">
              Selected project builds focused on operations systems, workflow automation, labour‑market analysis, and AI‑enabled business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/50 bg-zinc-50/20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase mb-2">
              Toolkit
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
              Skills & Tools
            </h3>
            <p className="text-zinc-500 text-xs">
              Practical tools used across automation, analytics, dashboarding, CRM logic, and operations projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {skillsList.map((skill) => (
              <span 
                key={skill}
                className="text-xs font-semibold text-zinc-700 bg-white border border-zinc-200/60 px-4 py-2 rounded-xl shadow-sm hover:border-teal-700/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/50 bg-white relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase mb-2">Background & Project Work</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
              Background & Project Work
            </h3>
            <p className="text-zinc-500 text-xs">
              Academic background and project development history.
            </p>
            <div className="mt-4 flex justify-center">
              <a href="/resume.pdf" download className="px-4 py-2 rounded-full bg-teal-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-teal-700 transition-colors shadow-md">
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative border-l border-zinc-200/80 ml-4 md:ml-6 space-y-10">
            {resumeHistory.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-teal-800 shadow-sm" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-teal-800 uppercase bg-teal-50 border border-teal-200/50 px-2 py-0.5 rounded mr-2">
                      {item.type}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 inline-block">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">
                    {item.period}
                  </span>
                </div>
                
                <p className="text-xs font-semibold text-zinc-500 mb-3">
                  {item.institution}
                </p>
                
                <ul className="space-y-1.5 list-none">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-zinc-500 leading-relaxed flex items-start space-x-2">
                      <span className="text-teal-800/85 shrink-0 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/50 bg-zinc-50/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Block Card */}
            <div className="lg:col-span-5 relative aspect-square max-w-sm mx-auto w-full rounded-2xl border border-zinc-200/60 bg-white p-6 flex flex-col justify-between shadow-sm">
              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-teal-800 uppercase">Core Philosophy</span>
                <h4 className="text-lg font-bold text-zinc-900 mt-4 mb-3">Practical Execution</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  I believe the best way to master technology is to build. By developing practical analytics scripts and API integrations, I bridge the gap between classroom theory and real-world execution.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-4 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-800 text-xs font-bold border border-teal-200/50">
                    BTM
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-zinc-900">Business Tech Student</h5>
                    <p className="text-[9px] text-zinc-500">Business System Analyst</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase">
                About
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                Hi, I'm Abdulmaleek Kazeem
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed font-medium">
                I focus on turning messy business workflows into clear systems. My projects combine analytics, automation, dashboards, APIs, CRM logic, and operations thinking.
              </p>
              <p className="text-zinc-600 text-xs leading-relaxed">
                My work is practical: I build prototypes that show how data and automation can improve campaign tracking, lead management, job‑market analysis, reporting, and decision‑making.
              </p>
              <p className="text-zinc-600 text-xs leading-relaxed">
                I am especially interested in roles where I can help teams organize operations, improve workflows, build scalable systems, and use automation to reduce manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/50 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase mb-2">
              Connect
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-zinc-500 text-xs max-w-md mx-auto">
              If you have any feedback on my project models or would like to discuss Business Technology Management projects, send a message.
            </p>
          </div>

          <div className="bg-zinc-50/50 border border-zinc-200/60 p-8 sm:p-10 rounded-2xl max-w-2xl mx-auto shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-600 mb-2">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors resize-none"
                  placeholder="Describe your inquiry..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-teal-50 border border-teal-200 text-teal-800 px-4 py-3 rounded text-[11px] leading-relaxed">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-teal-800 hover:bg-teal-700 text-white font-bold uppercase tracking-wider text-xs rounded transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
