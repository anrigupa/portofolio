'use client';

import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { ContactsInfo } from '@/types/portfolio';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons/BrandIcons';

interface ContactSectionProps {
  contacts: ContactsInfo;
  fullName: string;
}

export function ContactSection({ contacts, fullName }: ContactSectionProps) {
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

  const contactItems = [
    {
      key: 'Email',
      label: 'Email Resmi',
      value: contacts.email,
      Icon: Mail,
      iconColor: 'text-cyan-400',
      borderHover: 'hover:border-cyan-400/50'
    },
    {
      key: 'LinkedIn',
      label: 'LinkedIn',
      value: contacts.linkedin,
      Icon: LinkedinIcon,
      iconColor: 'text-blue-400',
      borderHover: 'hover:border-blue-400/50'
    },
    {
      key: 'GitHub',
      label: 'GitHub',
      value: contacts.github,
      Icon: GithubIcon,
      iconColor: 'text-slate-200',
      borderHover: 'hover:border-slate-300/50'
    },
    {
      key: 'Instagram',
      label: 'Instagram',
      value: contacts.instagram,
      Icon: InstagramIcon,
      iconColor: 'text-pink-400',
      borderHover: 'hover:border-pink-400/50'
    }
  ];

  return (
    <>
      {/* Toast Notification Mengambang */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-cyan-500/40 text-white shadow-2xl animate-fade-in">
          <Check className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

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
              <span className="text-white font-semibold">{fullName}</span> • Guru Koding &amp; AI | Front-End Developer | Desainer Grafis
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

