'use client';

import React from 'react';
import { BookOpen, FileSpreadsheet, Palette, Code2 } from 'lucide-react';
import { SkillItem } from '@/types/portfolio';

interface AboutSkillsSectionProps {
  skills: SkillItem[];
}

export function AboutSkillsSection({ skills }: AboutSkillsSectionProps) {
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'office':
        return <FileSpreadsheet className="w-6 h-6 text-cyan-400" />;
      case 'design':
        return <Palette className="w-6 h-6 text-purple-400" />;
      case 'webdev':
      default:
        return <Code2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      {/* Header Card */}
      <div className="bg-slate-950/75 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
            <BookOpen className="w-4 h-4" />
            <span>01 • Tentang Saya &amp; Kompetensi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keahlian Utama &amp; Penguasaan Teknologi
          </h2>
          <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
            Kombinasi sinergis antara keahlian produktivitas perkantoran, kreativitas desain visual,
            dan rekayasa perangkat lunak modern berbasis kecerdasan artifisial.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 shrink-0">
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl px-4 py-3 text-center">
            <span className="block text-xl sm:text-2xl font-extrabold text-cyan-400">90%</span>
            <span className="text-[11px] text-slate-300 font-medium">Office</span>
          </div>
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl px-4 py-3 text-center">
            <span className="block text-xl sm:text-2xl font-extrabold text-purple-400">85%</span>
            <span className="text-[11px] text-slate-300 font-medium">Desain</span>
          </div>
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl px-4 py-3 text-center">
            <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400">75%</span>
            <span className="text-[11px] text-slate-300 font-medium">Web &amp; AI</span>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group relative rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/40 p-6 sm:p-8 shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/15 flex items-center justify-center shadow-inner">
                  {renderSkillIcon(skill.iconName)}
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {skill.percentage}%
                  </span>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold">
                    Tingkat Kemahiran
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{skill.shortName}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">{skill.description}</p>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-semibold text-slate-200">
                  <span>Penguasaan Materi &amp; Praktik</span>
                  <span className="text-white">{skill.percentage}%</span>
                </div>
                <div className="w-full h-3.5 rounded-full bg-slate-900 border border-white/10 overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{
                      width: `${skill.percentage}%`,
                      boxShadow: `0 0 16px ${skill.glowColor}`
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                Keahlian &amp; Teknologi:
              </span>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold border ${skill.badgeBg}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

