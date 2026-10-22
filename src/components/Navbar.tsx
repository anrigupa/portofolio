'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface NavbarProps {
  fullName: string;
  onNavigate: (id: string) => void;
}

export function Navbar({ fullName, onNavigate }: NavbarProps) {
  const [logoError, setLogoError] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'skills', label: 'Tentang & Keahlian' },
    { id: 'timeline', label: 'Pengalaman & Pendidikan' },
    { id: 'contact', label: 'Kontak' }
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-black/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand / Logo Personal */}
        <button
          type="button"
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all duration-300 shrink-0">
            <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center overflow-hidden">
              {!logoError ? (
                <img
                  src="/logo.webp"
                  alt="Logo"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain p-0.5 rounded-[10px]"
                />
              ) : (
                <span className="font-mono font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tracking-tighter">
                  &lt;/&gt;
                </span>
              )}
            </div>
          </div>

          <div>
            <span className="block text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition">
              {fullName}
            </span>
            <span className="block text-[11px] text-cyan-400/90 font-medium tracking-wide">
              Portfolio &amp; Curriculum Vitae
            </span>
          </div>
        </button>

        {/* Menu Navigasi Single Page */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-xl p-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Tombol CTA Cepat ke Kontak */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-bold text-white shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </button>
        </div>
      </div>
    </header>
  );
}
