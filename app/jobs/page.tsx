'use client';

import React from 'react';
import Link from 'next/link';

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[#faf9ff] text-slate-800 font-sans">    

      {/* ---------------- MAIN DASHBOARD LAYOUT ---------------- */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ================= LEFT SIDEBAR (USER PROFILE) ================= */}
          <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-6">
            
            {/* User Avatar & Info */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Alex Rivers"
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-100"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">Alex Rivers</h2>
              <p className="text-slate-500 text-sm font-medium">Senior Frontend Engineer</p>
            </div>

            {/* Stats (Exp / Location) */}
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-center">
              <div>
                <p className="text-xs text-slate-400 font-medium">Exp</p>
                <p className="text-base font-bold text-indigo-950">8 yrs</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Loc</p>
                <p className="text-base font-bold text-indigo-950">SF</p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2.5">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">React</span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">Next.js</span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">Tailwind</span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">TypeScript</span>
              </div>
            </div>

            {/* Resume Score */}
            <div className="text-center pt-2 pb-1 space-y-1">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Resume Score</h3>
              <div className="text-4xl font-black text-indigo-600">92%</div>
            </div>

            {/* Strengths & Missing Skills */}
            <div className="space-y-3 pt-2 text-xs">
              <div>
                <p className="flex items-center gap-1.5 text-emerald-600 font-bold mb-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Strengths
                </p>
                <p className="text-slate-600 font-medium pl-5">UI/UX Architecture &nbsp; Performance Opt</p>
              </div>

              <div>
                <p className="flex items-center gap-1.5 text-red-500 font-bold mb-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Missing Skills
                </p>
                <div className="flex gap-2 pl-5">
                  <span className="bg-red-50 text-red-600 font-semibold px-2.5 py-0.5 rounded border border-red-100">Docker</span>
                  <span className="bg-red-50 text-red-600 font-semibold px-2.5 py-0.5 rounded border border-red-100">AWS</span>
                </div>
              </div>
            </div>

            {/* Upload Button */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Upload New Resume
            </button>

          </aside>


          {/* ================= RIGHT MAIN (SEARCH & MATCHES) ================= */}
          <section className="lg:col-span-8 space-y-6">

            {/* Search & Filters Toolbar */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-sm flex flex-wrap items-center gap-3">
              
              {/* Search Box */}
              <div className="flex-1 min-w-[200px] relative">
                <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Jobs..."
                  className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Filter Dropdowns */}
              <select className="bg-slate-50 text-slate-600 text-xs font-semibold rounded-xl px-3.5 py-2.5 border-none focus:outline-none cursor-pointer">
                <option>Experience</option>
              </select>

              <select className="bg-slate-50 text-slate-600 text-xs font-semibold rounded-xl px-3.5 py-2.5 border-none focus:outline-none cursor-pointer">
                <option>Location</option>
              </select>

              <select className="bg-slate-50 text-slate-600 text-xs font-semibold rounded-xl px-3.5 py-2.5 border-none focus:outline-none cursor-pointer">
                <option>Remote</option>
              </select>

              <button className="bg-indigo-50 text-indigo-600 text-xs font-bold rounded-xl px-4 py-2.5 flex items-center gap-1.5 hover:bg-indigo-100 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                All Filters
              </button>
            </div>

            {/* Results Title Header */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-extrabold text-slate-900">AI Matched Jobs</h1>
                <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  ✦ OPTIMIZED
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">124 Results</span>
            </div>

            {/* ================= JOB LISTING CARDS ================= */}
            <div className="space-y-5">

              {/* CARD 1 */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4 hover:border-slate-300 transition-all">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-center p-2">
                      <svg className="w-7 h-7 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM0 12l5.657-5.657 1.414 1.414L2.828 12l4.243 4.243-1.414 1.414L0 12zm14.586-8l-5.172 16h-2.12l5.172-16h2.12z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Senior Frontend Engineer</h3>
                      <p className="text-xs text-slate-500 font-medium">Vercel • <span className="text-slate-600 font-semibold">Remote</span></p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-1">
                      95% Match
                    </span>
                    <p className="text-sm font-bold text-slate-900">$160k - $210k</p>
                  </div>
                </div>

                {/* AI Explanation Callout */}
                <div className="bg-indigo-50/50 border border-indigo-100/80 rounded-xl p-4 text-xs space-y-2">
                  <p className="text-slate-700 font-medium leading-relaxed flex items-start gap-1.5">
                    <span className="text-indigo-600 font-bold shrink-0">✨ Excellent match</span>
                    <span>because your React, Next.js and TypeScript experience aligns perfectly with this role's core requirements.</span>
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[11px]">
                    <span className="text-slate-400 font-medium">Missing:</span>
                    <span className="bg-slate-200/70 text-slate-700 font-semibold px-2 py-0.5 rounded">Docker</span>
                    <span className="bg-slate-200/70 text-slate-700 font-semibold px-2 py-0.5 rounded">AWS</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-end gap-3 pt-1">
                  <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl transition-colors">
                    View Details
                  </button>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors shadow-sm">
                    Apply Now
                  </button>
                </div>

              </div>


              {/* CARD 2 */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4 hover:border-slate-300 transition-all">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-center p-2">
                      <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Frontend Architect</h3>
                      <p className="text-xs text-slate-500 font-medium">Supabase • <span className="text-slate-600 font-semibold">Remote</span></p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-1">
                      91% Match
                    </span>
                    <p className="text-sm font-bold text-slate-900">$180k - $230k</p>
                  </div>
                </div>

                {/* AI Explanation Callout */}
                <div className="bg-indigo-50/50 border border-indigo-100/80 rounded-xl p-4 text-xs">
                  <p className="text-slate-700 font-medium leading-relaxed flex items-start gap-1.5">
                    <span className="text-indigo-600 font-bold shrink-0">✨ High match</span>
                    <span>in technical leadership and system design. Your architectural approach to Next.js fits their infrastructure needs.</span>
                  </p>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-end gap-3 pt-1">
                  <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl transition-colors">
                    View Details
                  </button>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors shadow-sm">
                    Apply Now
                  </button>
                </div>

              </div>


              {/* CARD 3 */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4 hover:border-slate-300 transition-all">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-lg">
                      L
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Product Engineer</h3>
                      <p className="text-xs text-slate-500 font-medium">Linear • <span className="text-slate-600 font-semibold">San Francisco</span></p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-1">
                      88% Match
                    </span>
                    <p className="text-sm font-bold text-slate-900">$150k - $190k</p>
                  </div>
                </div>

                {/* AI Explanation Callout */}
                <div className="bg-indigo-50/50 border border-indigo-100/80 rounded-xl p-4 text-xs">
                  <p className="text-slate-700 font-medium leading-relaxed flex items-start gap-1.5">
                    <span className="text-indigo-600 font-bold shrink-0">✨ Strong candidate</span>
                    <span>for their design-obsessed culture. Your UI/UX strengths match their high bar for polish.</span>
                  </p>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-end gap-3 pt-1">
                  <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl transition-colors">
                    View Details
                  </button>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors shadow-sm">
                    Apply Now
                  </button>
                </div>

              </div>

            </div>

          </section>

        </div>
      </main>

    </div>
  );
}