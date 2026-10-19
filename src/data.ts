import { Terminal, Server, Layers, type LucideIcon } from 'lucide-react';

/* =========================================================================
   🛠️ PORTFOLYO VERİ VE ÖZELLEŞTİRME MERKEZİ (data.ts)
   -------------------------------------------------------------------------
   Bu dosya, portfolyonun tüm metin, proje, yetenek ve sosyal medya bağlantılarını
   tek bir yerden yönetmenizi sağlar.

   👉 KENDİ PORTFOLYONUZ YAPMAK İÇİN:
      1. Aşağıdaki 'PORTFOLIO_DATA' objesindeki bilgileri kendinize göre güncelleyin.
      2. 'projects' dizisine kendi GitHub repolarınızı ekleyin veya çıkarın.
      3. 'skills' ve 'experience' alanlarını kendi yetenek ve deneyimlerinizle doldurun.
      4. Hepsi bu kadar! Başka hiçbir kod dosyasına dokunmanıza gerek kalmaz.
   ========================================================================= */

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  location: string;
  availableForWork: boolean;
}

export interface SocialLinks {
  github: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioSchema {
  personal: PersonalInfo;
  social: SocialLinks;
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
}

export const PORTFOLIO_DATA: PortfolioSchema = {
  // 👤 Kişisel Bilgiler & Hero Alanı
  personal: {
    name: "Yusuf Emre",
    role: "Yazılım Geliştirici & Açık Kaynak Meraklısı",
    bio: "Modern, yüksek performanslı ve kullanıcı odaklı dijital ürünler geliştiriyorum. Açık kaynak mimariler, pixel-perfect arayüzler ve temiz kod en büyük tutkum.",
    email: "yusufyazilimwebemre@gmail.com",
    location: "İstanbul, Türkiye",
    availableForWork: true, // true: 'Yeni projelere açık' rozetini yeşil yakar
  },

  // 🌐 Sosyal Medya & İletişim Bağlantıları
  social: {
    github: "https://github.com/7EMRE1905",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "mailto:yusufyazilimwebemre@gmail.com",
  },

  // 🚀 Projeler Bölümü (GitHub Repolarınız ile Birebir Eşleşir)
  projects: [
    {
      id: 1,
      title: "Osmanlı Padişahları Ansiklopedisi",
      description: "1299-1922 yılları arasındaki 36 Osmanlı padişahı ve Fetret Devri'ni kapsayan; kronolojik gezinti, biyografiler, askerî seferler ve soyağaçları sunan açık kaynak web ansiklopedisi.",
      tags: ["HTML5", "Vanilla CSS", "JavaScript", "GitHub Pages"],
      githubUrl: "https://github.com/7EMRE1905/osmanli-padisahlari",
      liveUrl: "https://7emre1905.github.io/osmanli-padisahlari/",
      image: "/project-4.jpg",
    },
    {
      id: 2,
      title: "E-Ticaret Yönetim Asistanı",
      description: "E-ticaret satıcılarının stok, sipariş, kargo ve analitik süreçlerini tek bir modern panelden yönetmesini sağlayan kapsamlı ve akıcı SaaS yönetim altyapısı.",
      tags: ["Next.js", "Tailwind CSS", "Prisma", "Zustand", "TypeScript"],
      githubUrl: "https://github.com/7EMRE1905/e-ticaret-yonetim-asistani",
      liveUrl: "https://github.com/7EMRE1905/e-ticaret-yonetim-asistani",
      image: "/project-1.jpg",
    },
    {
      id: 3,
      title: "Premium Geliştirici Portfolyo Şablonu",
      description: "Vercel ve Linear tasarım dilinden ilham alan, karanlık mod odaklı, akıcı mikro-animasyonlu ve tek bir dosyadan özelleştirilebilen açık kaynak portfolyo şablonu.",
      tags: ["React", "TypeScript", "Vite", "Framer Motion", "Glassmorphism"],
      githubUrl: "https://github.com/7EMRE1905/premium-portfolio-template",
      liveUrl: "https://github.com/7EMRE1905/premium-portfolio-template",
      image: "/project-2.jpg",
    },
    {
      id: 4,
      title: "Dijital Randevu Asistanı",
      description: "Klinikler, danışmanlar ve işletmeler için otomatik bildirimli, takvim senkronizasyonlu ve online ödeme destekli modern randevu yönetim sistemi.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com/7EMRE1905",
      liveUrl: "#",
      image: "/project-3.jpg",
    }
  ],

  // ⚡ Yetenekler & Araçlar (GitHub Profilinizdeki Stack ile Uyumlu)
  skills: [
    {
      category: "Frontend & Arayüz",
      icon: Terminal,
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
    },
    {
      category: "Backend & Veritabanı",
      icon: Server,
      items: ["Node.js", "Express", "Python", "Prisma ORM", "PostgreSQL", "REST APIs"],
    },
    {
      category: "Araçlar & DevOps",
      icon: Layers,
      items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Vite", "CI/CD"],
    }
  ],

  // 💼 Kariyer & Deneyim Geçmişi
  experience: [
    {
      id: 1,
      title: "Frontend & Web Geliştirici",
      company: "Serbest / Açık Kaynak Projeler",
      period: "2024 - Günümüz",
      description: "Modern web standartlarında açık kaynak şablonlar, e-ticaret yönetim arayüzleri ve interaktif web ansiklopedileri geliştirdim."
    },
    {
      id: 2,
      title: "Full-Stack Yazılım Meraklısı",
      company: "Bağımsız Geliştirme",
      period: "2022 - 2024",
      description: "React, Node.js ve veritabanı mimarileri üzerine yoğunlaşarak kullanıcı deneyimini ön planda tutan projeler hayata geçirdim."
    }
  ]
};
