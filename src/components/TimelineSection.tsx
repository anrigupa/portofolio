'use client';

import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { ExperienceItem, EducationItem } from '@/types/portfolio';

interface TimelineSectionProps {
  experiences: ExperienceItem[];
  educations: EducationItem[];
}

export function TimelineSection({ experiences, educations }: TimelineSectionProps) {
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section id="timeline" className="scroll-mt-24 space-y-8">
      {/* Filter Header */}
      <div className="bg-slate-950/75 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
            <Award className="w-4 h-4" />
            <span>02 • Rekam Jejak Karir &amp; Akademik</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman Kerja &amp; Riwayat Pendidikan
          </h2>
        </div>

        <div className="inline-flex bg-slate-900/90 border border-white/15 rounded-2xl p-1.5 self-start sm:self-auto">
          {[
            { key: 'all' as const, label: 'Semua' },
            { key: 'experience' as const, label: 'Pengalaman' },
            { key: 'education' as const, label: 'Pendidikan' }
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setTimelineFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                timelineFilter === tab.key
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`grid grid-cols-1 ${
          timelineFilter === 'all' ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'
        } gap-8`}
      >
        {/* Kolom Pengalaman Kerja */}
        {(timelineFilter === 'all' || timelineFilter === 'experience') && (
          <div className="rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Pengalaman Kerja</h3>
                <p className="text-xs text-slate-300">
                  Dedikasi profesional di bidang edukasi, web, dan desain
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/35 space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? 'bg-cyan-400 border-white shadow-[0_0_14px_rgba(34,211,238,0.9)]'
                        : 'bg-slate-900 border-cyan-400 group-hover:bg-cyan-400'
                    } transition`}
                  />

                  <div className="rounded-2xl bg-slate-900/90 border border-white/10 group-hover:border-cyan-500/40 p-5 transition shadow-md space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          exp.current
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-white/10 text-cyan-300 border border-white/10'
                        }`}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold text-slate-300">
                        {exp.organization}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white">{exp.role}</h4>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {exp.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Kolom Riwayat Pendidikan */}
        {(timelineFilter === 'all' || timelineFilter === 'education') && (
          <div className="rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Riwayat Pendidikan</h3>
                <p className="text-xs text-slate-300">
                  Kualifikasi akademik &amp; sertifikasi pendidik profesional
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/35 space-y-6">
              {educations.map((edu, index) => (
                <div key={edu.id} className="relative group">
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      index === 0
                        ? 'bg-indigo-400 border-white shadow-[0_0_14px_rgba(129,140,248,0.9)]'
                        : 'bg-slate-900 border-indigo-400 group-hover:bg-indigo-400'
                    } transition`}
                  />

                  <div className="rounded-2xl bg-slate-900/90 border border-white/10 group-hover:border-indigo-500/40 p-4 sm:p-5 transition shadow-md space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {edu.year}
                      </span>
                      <span className="text-[11px] font-medium text-slate-300">
                        {edu.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h4>

                    <p className="text-xs sm:text-sm text-cyan-300/90 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

