import { Terminal, Code2, Cpu, Globe, Database, Smartphone, Layers, Server, Shield } from 'lucide-react';

export const PORTFOLIO_DATA = {
  personal: {
    name: "Yusuf Emre",
    role: "Yazılım Geliştirici",
    bio: "Modern, ölçeklenebilir ve kullanıcı odaklı dijital ürünler inşa ediyorum. Mükemmel piksel (pixel-perfect) tasarımlar ve temiz kod mimarisi en büyük tutkum.",
    email: "merhaba@yusufemre.dev",
    location: "Türkiye",
    availableForWork: true,
  },
  social: {
    github: "https://github.com/7EMRE1905",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  skills: [
    {
      category: "Frontend",
      icon: Terminal,
      items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Araçlar & DevOps",
      icon: Layers,
      items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Ticaret Yönetim Asistanı",
      description: "Satıcıların stok, sipariş ve kargo süreçlerini tek bir panelden yönetmesini sağlayan kapsamlı bir SaaS çözümü. Gelişmiş veri analitiği içerir.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project-1.jpg",
    },
    {
      id: 2,
      title: "Dijital Randevu Sistemi",
      description: "Klinikler ve danışmanlar için otomatik SMS hatırlatmalı, takvim entegrasyonlu ve online ödeme destekli modern randevu platformu.",
      tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project-2.jpg",
    },
    {
      id: 3,
      title: "Kripto Fiyat Takip Botu",
      description: "Telegram ve Discord üzerinden anlık fiyat bildirimleri, arbitraj fırsatları ve portföy durumunu raporlayan performanslı bot altyapısı.",
      tags: ["Python", "FastAPI", "Redis", "WebSockets"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project-3.jpg",
    }
  ],
  experience: [
    {
      id: 1,
      title: "Kıdemli Frontend Geliştirici",
      company: "Tech Start-up",
      period: "2024 - Günümüz",
      description: "Mikromimari yapısına geçiş sürecini yönettim. React ve Next.js kullanarak web uygulamasının performansını %40 artırdım."
    },
    {
      id: 2,
      title: "Tam Yığın (Full-Stack) Geliştirici",
      company: "Dijital Ajans",
      period: "2022 - 2024",
      description: "Birden fazla e-ticaret ve kurumsal web projesini uçtan uca tasarlayıp kodladım. RESTful API'lar geliştirdim."
    }
  ]
};
