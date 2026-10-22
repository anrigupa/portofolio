'use client';

import React from 'react';
import { Sparkles, MapPin, ChevronRight, Mail } from 'lucide-react';
import { ProfileAvatar } from './ProfileAvatar';

interface HeroSectionProps {
  fullName: string;
  headline: string;
  professions: string[];
  location: string;
  about: string;
  profileImageUrl: string;
  onNavigate: (id: string) => void;
}

export function HeroSection({
  fullName,
  headline,
  professions,
  location,
  about,
  profileImageUrl,
  onNavigate
}: HeroSectionProps) {
  return (
    <section id="hero" className="scroll-mt-24 pt-2 sm:pt-6">
      <div className="relative rounded-3xl bg-slate-950/75 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 lg:p-14 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <ProfileAvatar photoUrl={profileImageUrl} name={fullName} />

          <div className="flex-1 text-center lg:text-left space-y-5">
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                {headline}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] text-slate-300 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {location}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {fullName}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-emerald-300">
                {headline}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {professions.map((prof, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/15 text-slate-100 text-xs sm:text-sm font-semibold shadow-sm"
                >
                  {prof}
                </span>
              ))}
            </div>

            <p className="text-slate-100/95 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {about}
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => onNavigate('skills')}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition transform hover:-translate-y-0.5"
              >
                <span>Lihat Profil</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center gap-2 transition transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

