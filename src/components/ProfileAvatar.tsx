'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProfileAvatarProps {
  photoUrl?: string;
  name?: string;
}

export function ProfileAvatar({
  photoUrl = '/profile.webp',
  name = 'Foto Profil'
}: ProfileAvatarProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative group shrink-0">
      {/* Efek Halo Neon Berlapis di Belakang Foto */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-500/40 via-indigo-500/35 to-emerald-400/40 blur-2xl opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse" />

      {/* Cincin Orbit Dekoratif Berputar di Sekeliling Bingkai Foto */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 shadow-[0_0_45px_rgba(6,182,212,0.35)]">
        {/* Border Glassmorphism Dalam */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-950/90 flex items-center justify-center">
          {!imgError ? (
            <Image
              src={photoUrl}
              alt={name}
              fill
              priority
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
              className="object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback SVG */
            <svg
              viewBox="0 0 240 240"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              role="img"
              aria-label={name}
            >
              <defs>
                <linearGradient id="studioBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="50%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#091020" />
                </linearGradient>
                <linearGradient id="suitNavy" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#17253b" />
                  <stop offset="100%" stopColor="#0c1524" />
                </linearGradient>
                <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f1c29b" />
                  <stop offset="100%" stopColor="#d9a176" />
                </linearGradient>
              </defs>
              <rect width="240" height="240" fill="url(#studioBg)" />
              <circle cx="120" cy="105" r="58" fill="#06b6d4" opacity="0.12" />
              <path d="M103 130 L137 130 L142 168 L98 168 Z" fill="#c98e63" />
              <path d="M88 156 Q120 172 152 156 L165 240 L75 240 Z" fill="#27272a" />
              <path
                d="M52 174 C56 154 82 148 98 146 L112 205 L128 205 L142 146 C158 148 184 154 188 174 L200 240 L40 240 Z"
                fill="url(#suitNavy)"
              />
              <path d="M98 146 L114 196 L86 178 Z" fill="#1e2f4d" />
              <path d="M142 146 L126 196 L154 178 Z" fill="#1e2f4d" />
              <ellipse cx="83" cy="96" rx="7" ry="12" fill="#d9a176" />
              <ellipse cx="157" cy="96" rx="7" ry="12" fill="#d9a176" />
              <path
                d="M86 78 C86 52 154 52 154 78 C154 114 142 138 120 138 C98 138 86 114 86 78 Z"
                fill="url(#skinTone)"
              />
              <path d="M97 84 Q106 80 113 84" stroke="#1e293b" strokeWidth="2.8" fill="none" strokeLinecap="round" />
              <path d="M127 84 Q134 80 143 84" stroke="#1e293b" strokeWidth="2.8" fill="none" strokeLinecap="round" />
              <circle cx="105" cy="92" r="3.6" fill="#0f172a" />
              <circle cx="135" cy="92" r="3.6" fill="#0f172a" />
              <path d="M120 92 L118 106 L123 107" stroke="#b97d54" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M107 115 Q120 124 133 115" stroke="#8c5230" strokeWidth="2.6" fill="none" strokeLinecap="round" />
              <path
                d="M82 86 C78 58 96 42 120 42 C144 42 162 58 158 86 C154 68 140 60 122 66 C118 56 94 64 82 86 Z"
                fill="#111827"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Badge Status Aktif Profesional */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-xl border border-emerald-500/40 shadow-lg flex items-center gap-2 whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
        <span className="text-[11px] font-semibold tracking-wide text-slate-100">
          Open to Opportunities
        </span>
      </div>
    </div>
  );
}

