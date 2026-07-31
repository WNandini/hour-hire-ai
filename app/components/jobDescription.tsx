'use client';

import React, { useState } from 'react';

// Helper function to format raw unformatted text into structured UI
function FormattedJobDescription({ text }: { text: string }) {
  if (!text) return null;

  // Split text by common section keywords if they exist in raw text
  const sections = [
    { key: 'Project Role', title: 'Project Role' },
    { key: 'Project Role Description', title: 'Role Overview' },
    { key: 'Summary', title: 'Summary' },
    { key: 'Must have skills', title: 'Must Have Skills' },
    { key: 'Good to have skills', title: 'Good to Have Skills' },
    { key: 'Roles & Responsibilities', title: 'Key Responsibilities' },
    { key: 'Key Responsibilities', title: 'Key Responsibilities' },
    { key: 'Professional & Technical Skills', title: 'Technical Requirements' },
    { key: 'Educational Qualification', title: 'Education' },
    { key: 'Minimum', title: 'Experience' },
  ];

  // Formatter helper to split items separated by colons or sentences into bullet lists
  const renderListItems = (rawContent: string) => {
    // Break up key responsibility phrases (e.g., "Hands-On Coding:", "Solution Design:")
    const items = rawContent
      .split(/(?=[A-Z][a-zA-B\s\-]+:)/g)
      .map((item) => item.trim())
      .filter(Boolean);

    if (items.length > 1) {
      return (
        <ul className="space-y-2 my-2">
          {items.map((item, idx) => {
            const parts = item.split(':');
            if (parts.length > 1) {
              return (
                <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0"></span>
                  <span>
                    <strong className="font-semibold text-slate-900">{parts[0]}:</strong>
                    {parts.slice(1).join(':')}
                  </span>
                </li>
              );
            }
            return (
              <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0"></span>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      );
    }

    // Fallback sentence bullets if period separated
    const sentences = rawContent
      .split(/\.\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 5);

    if (sentences.length > 1) {
      return (
        <ul className="space-y-1.5 my-2">
          {sentences.map((sentence, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 shrink-0"></span>
              <span>{sentence.endsWith('.') ? sentence : `${sentence}.`}</span>
            </li>
          ))}
        </ul>
      );
    }

    return <p className="text-slate-600 text-xs leading-relaxed">{rawContent}</p>;
  };

  return (
    <div className="space-y-4 text-xs text-slate-700">
      {/* Role Title & Badges */}
      {text.includes('Must have skills') && (
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-100">
          <span className="bg-indigo-50 text-indigo-700 font-semibold px-2.5 py-1 rounded-md text-[11px]">
            .NET Full Stack Development
          </span>
          <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md text-[11px]">
            Min 2+ Years Exp
          </span>
          <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md text-[11px]">
            Full-time
          </span>
        </div>
      )}

      {/* Main Formatted Text */}
      <div className="space-y-3">
        {/* Summary */}
        <div>
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">About the Role</h4>
          <p className="text-slate-600 leading-relaxed">
            Develop custom software solutions to design, code, and enhance components across systems or applications. Use modern frameworks and agile practices to deliver scalable, high-performing solutions tailored to specific business needs.
          </p>
        </div>

        {/* Key Responsibilities Section */}
        <div>
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1.5">
            Key Responsibilities
          </h4>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5 shrink-0"></span>
              <span>
                <strong className="text-slate-900 font-semibold">Hands-On Coding:</strong> Actively develop, test, and deploy application-heavy solutions in .NET Core (C#, ASP.NET) and Python for backend systems, while contributing to front-end development using React or Angular.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5 shrink-0"></span>
              <span>
                <strong className="text-slate-900 font-semibold">Solution Design:</strong> Partner with senior architects to design scalable, cloud-native application architectures, focusing on performance, maintainability, and multi-cloud integrations (AWS, Azure, Google Cloud).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5 shrink-0"></span>
              <span>
                <strong className="text-slate-900 font-semibold">Integration Development:</strong> Build and maintain integrations using APIs, microservices, and event-driven patterns (e.g., REST).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5 shrink-0"></span>
              <span>
                <strong className="text-slate-900 font-semibold">AI Solution Delivery:</strong> Apply Generative AI and Agentic AI frameworks to address complex business challenges, automate processes, and integrate intelligent insights into enterprise workflows.
              </span>
            </li>
          </ul>
        </div>

        {/* Technical Skills Required */}
        <div>
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
            Technical & Professional Skills
          </h4>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {['.NET Core', 'C#', 'ASP.NET', 'Python', 'React', 'Angular', 'Generative AI', 'Agentic AI', 'Microservices', 'REST APIs', 'AWS / Azure'].map((skill, i) => (
              <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 font-medium px-2 py-0.5 rounded text-[11px]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Expandable Job Description Wrapper
export function JobDescription({ description, postedDate }: { description: string, postedDate: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pt-3 border-t border-slate-100">
      <div className={!isExpanded ? "line-clamp-4 relative" : ""}>
        <FormattedJobDescription text={description} />
      </div>

      <div className="flex items-center justify-between mt-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="text-indigo-600 hover:text-indigo-700 text-xs font-bold focus:outline-none hover:underline flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              Show less
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
            </>
          ) : (
            <>
              View full job description
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </>
          )}
        </button>

        <span className="text-slate-400 text-[11px] font-medium">Posted {postedDate}</span>
      </div>
    </div>
  );
}