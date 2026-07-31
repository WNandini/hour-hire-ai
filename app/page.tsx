'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9ff] text-slate-800 font-sans">
      
      {/* ---------------- NAVBAR ---------------- */}
      

      {/* ---------------- MAIN CONTENT CONTAINER ---------------- */}
      <main className="max-w-5xl mx-auto px-4 py-12 md:py-16 space-y-24">

        {/* ---------------- HERO SECTION ---------------- */}
        <section className="flex flex-direction flex-col items-center text-center max-w-2xl mx-auto">
          
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
            ✨ AI-Powered Career Matching
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Find Your Perfect Job <span className="text-indigo-600">with AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Upload your resume and let AI analyze your skills, match you with relevant jobs, and explain why each opportunity is a great fit.
          </p>

          {/* Drag & Drop Upload Box */}
          <div className="w-full bg-white border-2 border-dashed border-slate-300 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center gap-2 shadow-sm mb-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <text x="7" y="18" className="text-[6px] font-bold fill-indigo-600">PDF</text>
              </svg>
            </div>

            <h3 className="text-slate-900 font-bold text-base">Drag & Drop your Resume</h3>
            <p className="text-slate-500 text-sm">
              or <label className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                Browse PDF
                <input type="file" accept=".pdf" className="hidden" />
              </label>
            </p>

            <span className="bg-slate-100 text-slate-500 text-xs px-2.5 py-1 rounded-md mt-2 font-medium">
              Supported format: PDF only
            </span>
          </div>

          {/* Primary Action Button */}
          <Link href="/jobs" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-150 text-center shadow-md hover:shadow-lg">
            Find AI Matched Jobs 🚀
          </Link>

          {/* Social Proof */}
          <p className="text-slate-400 text-xs mt-3">
            Joined by 10,000+ professionals this month
          </p>

        </section>

        {/* ---------------- FEATURES SECTION ---------------- */}
        <section className="space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Why choose HourHire?
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Our proprietary intelligence layer bridges the gap between talent and opportunity.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">AI Resume Analysis</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Instant breakdown of your core competencies and experience gaps. Get actionable insights to level up your profile.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Smart Job Matching</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Proprietary AI matching that finds roles you're actually qualified for, filtering out the noise of generic job boards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Personalized Recommendations</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Tailored career paths based on your unique skill set and goals. Discover opportunities you hadn't even considered.
              </p>
            </div>

          </div>
        </section>

        {/* ---------------- BANNER / CTA SECTION ---------------- */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 p-8 md:p-12">
            
            {/* Background Accent */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
              <svg className="w-64 h-64 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              </svg>
            </div>

            <div className="max-w-lg space-y-4 relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Elevate your hiring journey with precision.
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                We don't just find jobs; we find matches that last. Join the elite network of developers, designers, and managers finding their home through HourHire.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm">
                  Upload Resume
                </button>
                <Link href="/jobs" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                  Explore Jobs
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}