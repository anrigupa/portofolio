'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import {
  Code2,
  Sparkles,
  Palette,
  FileSpreadsheet,
  Briefcase,
  GraduationCap,
  Mail,
  ChevronRight,
  Copy,
  Check,
  BookOpen,
  Award,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

// Brand icons (sebagai pengganti ikon brand yang tidak ada di lucide-react versi terbaru)
function Github({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Komponen BrandLogo:
 * Membaca langsung `/logo.webp` dari folder public/.
 * Jika file belum ada atau gagal dimuat, otomatis menampilkan monogram futuristik </>.
 */
function BrandLogo() {
  const [logoError, setLogoError] = useState(false);

  return (
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
  );
}

function ThreeBackgroundCanvas({ speedMultiplier = 1, wireframeOpacity = 0.34 }: { speedMultiplier?: number; wireframeOpacity?: number }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(speedMultiplier);

  useEffect(() => {
    speedRef.current = speedMultiplier;
  }, [speedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container || typeof window === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Icosahedron Wireframe Utama
    const icoGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: wireframeOpacity
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    mainGroup.add(icosahedron);

    // 2. Inner Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(1.15, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(innerCore);

    // 3. Cincin Orbital Torus
    const ringGeo = new THREE.TorusGeometry(3.6, 0.018, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.3
    });
    const torusRing = new THREE.Mesh(ringGeo, ringMat);
    torusRing.rotation.x = Math.PI / 2.6;
    torusRing.rotation.y = Math.PI / 6;
    mainGroup.add(torusRing);

    // 4. Partikel Bintang
    const particleCount = 240;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 22;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.045,
      transparent: true,
      opacity: 0.55
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interaksi Mouse Paralaks Halus
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Responsivitas Canvas
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Loop Animasi
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const spd = 0.0025 * speedRef.current;

      icosahedron.rotation.x += spd;
      icosahedron.rotation.y += spd * 1.3;

      innerCore.rotation.x -= spd * 1.5;
      innerCore.rotation.y -= spd * 1.1;

      torusRing.rotation.z += spd * 0.9;
      particles.rotation.y += spd * 0.25;

      mainGroup.rotation.y += (mouseX - mainGroup.rotation.y) * 0.04;
      mainGroup.rotation.x += (mouseY - mainGroup.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      icoGeo.dispose();
      icoMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [wireframeOpacity]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/**
 * Komponen ProfilePhotoAvatar:
 * Membaca langsung `/profile.webp` dari folder public dengan rasio 1:1 (rounded-full)
 * dan bingkai glowing futuristik tanpa tombol upload pengujian.
 */
function ProfilePhotoAvatar({ photoUrl = '/profile.webp' }: { photoUrl?: string }) {
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
            <img
              src={photoUrl}
              alt="Foto Profil"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Fallback ilustrasi jika /profile.webp belum terdeteksi di preview */
            <svg
              viewBox="0 0 240 240"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              role="img"
              aria-label="Foto Profil"
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

export default function App() {
  const portfolio = PORTFOLIO_DATA;
  const [timelineFilter, setTimelineFilter] = useState('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const copyToClipboard = (text: string, keyLabel: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedKey(keyLabel);
      showToast(`${keyLabel} berhasil disalin!`);
      setTimeout(() => setCopiedKey(null), 2200);
    } catch {
      showToast('Gagal menyalin teks.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  const contactItems = [
    {
      key: 'Email',
      label: 'Email Resmi',
      value: portfolio.contacts.email,
      Icon: Mail,
      iconColor: 'text-cyan-400',
      borderHover: 'hover:border-cyan-400/50'
    },
    {
      key: 'LinkedIn',
      label: 'LinkedIn',
      value: portfolio.contacts.linkedin,
      Icon: Linkedin,
      iconColor: 'text-blue-400',
      borderHover: 'hover:border-blue-400/50'
    },
    {
      key: 'GitHub',
      label: 'GitHub',
      value: portfolio.contacts.github,
      Icon: Github,
      iconColor: 'text-slate-200',
      borderHover: 'hover:border-slate-300/50'
    },
    {
      key: 'Instagram',
      label: 'Instagram',
      value: portfolio.contacts.instagram,
      Icon: Instagram,
      iconColor: 'text-pink-400',
      borderHover: 'hover:border-pink-400/50'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-clip">
      {/* LAYER 0: ELEMEN 3D BACKGROUND CANVAS */}
      <ThreeBackgroundCanvas speedMultiplier={1} wireframeOpacity={0.34} />

      {/* Ambient Radial Glow di Latar Belakang */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 18% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 45%), radial-gradient(circle at 82% 75%, rgba(99, 102, 241, 0.12) 0%, transparent 45%)'
        }}
      />

      {/* Toast Notification Mengambang */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-cyan-500/40 text-white shadow-2xl">
          <Check className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* NAVBAR GLASSMORPHISM FIXED / SELALU MUNCUL SAAT DI-SCROLL */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-black/40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Brand / Logo Personal */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            {/* Logo kecil dari /public/logo.webp dengan fallback </> */}
            <BrandLogo />

            <div>
              <span className="block text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition">
                {portfolio.fullName}
              </span>
              <span className="block text-[11px] text-cyan-400/90 font-medium tracking-wide">
                PORTOFOLIO
              </span>
            </div>
          </button>

          {/* Menu Navigasi Single Page Application */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-xl p-1">
            {[
              { id: 'hero', label: 'Beranda' },
              { id: 'skills', label: 'Tentang & Keahlian' },
              { id: 'timeline', label: 'Pengalaman & Pendidikan' },
              { id: 'contact', label: 'Kontak' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
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
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-bold text-white shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </button>
          </div>
        </div>
      </header>

      {/* LAYER 10: KONTEN UTAMA HTML DENGAN PADDING ATAS AGAR TIDAK TERTUTUP NAVBAR FIXED */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10 sm:pb-16 space-y-24">
        {/* 1. HERO SECTION (BERANDA) */}
        <section id="hero" className="scroll-mt-24 pt-2 sm:pt-6">
          <div className="relative rounded-3xl bg-slate-950/75 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 lg:p-14 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              <ProfilePhotoAvatar photoUrl={portfolio.profileImageUrl} />

              <div className="flex-1 text-center lg:text-left space-y-5">
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    {portfolio.headline}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] text-slate-300 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {portfolio.location}
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    {portfolio.fullName}
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-emerald-300">
                    {portfolio.headline}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                  {portfolio.professions.map((prof, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/15 text-slate-100 text-xs sm:text-sm font-semibold shadow-sm"
                    >
                      {prof}
                    </span>
                  ))}
                </div>

                <p className="text-slate-100/95 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                  {portfolio.about}
                </p>

                <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('skills')}
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition transform hover:-translate-y-0.5"
                  >
                    <span>Lihat Profil</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
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

        {/* 2. ABOUT & SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24 space-y-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {portfolio.skills.map((skill) => (
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

        {/* 3. EXPERIENCE & EDUCATION TIMELINE */}
        <section id="timeline" className="scroll-mt-24 space-y-8">
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
                { key: 'all', label: 'Semua' },
                { key: 'experience', label: 'Pengalaman' },
                { key: 'education', label: 'Pendidikan' }
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
                  {portfolio.experiences.map((exp) => (
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
                  {portfolio.educations.map((edu, index) => (
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

        {/* 4. CONTACT SECTION */}
        <footer id="contact" className="scroll-mt-24 pt-4 pb-12">
          <div className="relative rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500" />

            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                03 • Mari Berkolaborasi
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hubungi Saya &amp; Jejaring Sosial
              </h2>
              <p className="text-slate-200 text-sm sm:text-base">
                Terbuka untuk kolaborasi pengembangan web, pelatihan koding &amp; kecerdasan artifisial,
                maupun proyek desain kreatif. Klik kartu di bawah untuk menyalin kontak.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactItems.map((item) => {
                const IconComponent = item.Icon;
                return (
                  <div
                    key={item.key}
                    className={`group rounded-2xl bg-slate-900/90 border border-white/10 ${item.borderHover} p-5 transition flex flex-col justify-between gap-4 shadow-lg`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center">
                        <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.value, item.key)}
                        className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white transition"
                        title={`Salin ${item.key}`}
                      >
                        {copiedKey === item.key ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      <p className="text-sm font-bold text-white truncate mt-0.5" title={item.value}>
                        {item.value}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.value, item.key)}
                        className="text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-1"
                      >
                        <span>Salin Kontak</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-center text-center text-xs text-slate-400">
              <p>
                © {new Date().getFullYear()}{' '}
                <span className="text-white font-semibold">{portfolio.fullName}</span> • Guru Koding
                &amp; AI | Front-End Developer | Desainer Grafis
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
