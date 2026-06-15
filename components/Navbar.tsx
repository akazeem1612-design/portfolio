'use strict';

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Resume', href: '/#resume' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md bg-black/60 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Signature */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-base font-extrabold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors">
              Abdulmaleek Kazeem
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[#00F0FF] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00F0FF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link 
              href="/#contact"
              className="bg-[#00F0FF] text-black rounded-full px-5 py-2 font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:bg-[#38BDF8] hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#0A0A0C] border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded text-sm font-semibold uppercase tracking-wider text-slate-400 hover:text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 px-3">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-[#38BDF8] shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-colors py-2 rounded-full"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
