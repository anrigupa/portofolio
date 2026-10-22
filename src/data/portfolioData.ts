import { PortfolioData } from '@/types/portfolio';

export const PORTFOLIO_DATA: PortfolioData = {
  fullName: 'ANDI RIFAQ GUTTU PATALO',
  headline: 'Creative Developer & Educator',
  professions: [
    'Guru Koding & AI',
    'Front-End Developer',
    'Desainer Grafis'
  ],
  location: 'Pangkep, Sulawesi Selatan',
  profileImageUrl: '/profile.webp',
  about:
    'Saya adalah seorang pendidik dan pengembang web dengan latar belakang desain grafis. Menggabungkan kreativitas visual, logika pemrograman, dan kemampuan mengajar, saya berdedikasi untuk menciptakan solusi teknologi yang interaktif sekaligus membimbing generasi muda di bidang koding dan kecerdasan artifisial.',
  skills: [
    {
      id: 'office',
      shortName: 'Office & Produktivitas',
      percentage: 90,
      iconName: 'office',
      description:
        'Pengelolaan dokumen akademik, administrasi kurikulum, pengolahan data spreadsheet tingkat lanjut, dan presentasi interaktif.',
      tools: ['Microsoft Office', 'Libre Office'],
      color: 'from-cyan-400 to-blue-500',
      glowColor: 'rgba(34, 211, 238, 0.45)',
      badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
    },
    {
      id: 'design',
      shortName: 'Desain Grafis',
      percentage: 85,
      iconName: 'design',
      description:
        'Perancangan identitas visual, manipulasi foto digital, ilustrasi vektor, serta pembuatan materi publikasi dan media edukasi.',
      tools: ['Adobe Photoshop', 'CorelDraw', 'GIMP'],
      color: 'from-purple-400 to-indigo-500',
      glowColor: 'rgba(192, 132, 252, 0.45)',
      badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30'
    },
    {
      id: 'webdev',
      shortName: 'Web Development & AI',
      percentage: 75,
      iconName: 'webdev',
      description:
        'Pengembangan aplikasi web modern yang responsif, pengelolaan basis data relasional, serta integrasi AI Agent untuk otomasi cerdas.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'SQL', 'AI Agent'],
      color: 'from-emerald-400 to-teal-500',
      glowColor: 'rgba(52, 211, 153, 0.45)',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
    }
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Guru Koding & Kecerdasan Artifisial',
      organization: 'UPT SMAN 1 Pangkep',
      period: '2025 - Sekarang',
      current: true,
      highlight:
        'Membimbing siswa dalam pemrograman modern, logika algoritma, dan penerapan kecerdasan artifisial di lingkungan sekolah menengah atas.'
    },
    {
      id: 'exp-2',
      role: 'Front-End Web Developer',
      organization: 'WFUFU ART',
      period: '2023 - 2024',
      current: false,
      highlight:
        'Membangun antarmuka website interaktif, responsif, dan teroptimasi dengan fokus pada pengalaman pengguna modern.'
    },
    {
      id: 'exp-3',
      role: 'Tentor Matematika',
      organization: 'Lentera Ilmu Private',
      period: '2020 - 2023',
      current: false,
      highlight:
        'Mengajar konsep matematika dan pemecahan masalah analitis secara terstruktur serta mudah dipahami.'
    },
    {
      id: 'exp-4',
      role: 'Desain Grafis',
      organization: 'Windyra Buana Cipta',
      period: '2021',
      current: false,
      highlight:
        'Merancang aset komunikasi visual, tata letak cetak, dan materi branding kreatif untuk kebutuhan klien.'
    }
  ],
  educations: [
    {
      id: 'edu-1',
      degree: 'Sertifikasi Pendidik (Profesi Guru)',
      institution: 'UNIVERSITAS MUHAMMADIYAH PAREPARE',
      year: 'Lulus 2023',
      badge: 'Pendidikan Profesi'
    },
    {
      id: 'edu-2',
      degree: 'S-1 (Strata 1)',
      institution: 'UNIVERSITAS MUHAMMADIYAH MAKASSAR',
      year: 'Lulus 2021',
      badge: 'Sarjana'
    },
    {
      id: 'edu-3',
      degree: 'Sekolah Menengah Atas (SMA)',
      institution: 'SMAN 1 PANGKAJENE',
      year: 'Lulus 2016',
      badge: 'Pendidikan Menengah'
    },
    {
      id: 'edu-4',
      degree: 'Sekolah Menengah Pertama (SMP)',
      institution: 'SMPN 4 MANSOBEN',
      year: 'Lulus 2013',
      badge: 'Pendidikan Dasar'
    },
    {
      id: 'edu-5',
      degree: 'Sekolah Dasar (SD)',
      institution: 'SDN 01 BONEPUTE',
      year: 'Lulus 2010',
      badge: 'Pendidikan Dasar'
    }
  ],
  contacts: {
    email: 'andi.rifaq22@guru.sma.belajar.id',
    linkedin: 'linkedin.com/in/andi-rifaq-guttu-patalo',
    github: 'github.com/anrigupa',
    instagram: '@andi_rifaq'
  }
};

