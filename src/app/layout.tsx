import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ANDI RIFAQ GUTTU PATALO | Portfolio & CV',
  description:
    'Portofolio profesional ANDI RIFAQ GUTTU PATALO - Guru Koding & AI, Front-End Developer, dan Desainer Grafis.',
  keywords: [
    'ANDI RIFAQ GUTTU PATALO',
    'Andi Rifaq Guttu Patalo',
    'Guru Koding',
    'AI Educator',
    'Front-End Developer',
    'Desainer Grafis',
    'Portofolio',
    'Next.js',
    'Three.js'
  ],
  authors: [{ name: 'ANDI RIFAQ GUTTU PATALO' }],
  icons: {
    icon: '/logo.webp'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#050811] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
