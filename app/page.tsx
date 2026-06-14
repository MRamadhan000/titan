"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiGithub,
  FiMail,
  FiDownload,
  FiExternalLink,
  FiChevronDown,
  FiArrowRight,
  FiMenu,
  FiX,
  FiBarChart2,
  FiMusic,
  FiTool,
  FiUsers,
  FiCoffee,
  FiTerminal,
  FiMapPin,
} from "react-icons/fi";

import {
  FiAward,
  FiBriefcase,
  FiCpu,
  FiMonitor,
  FiSmartphone,
  FiBook,
  FiCode,
  FiLayers,
} from "react-icons/fi";

import {
  FaJava,
  FaUnity,
  FaLightbulb,
  FaBrain,
  FaBriefcase,
  FaVolumeUp,
  FaHeartbeat,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

// ============================================================
// DATA
// ============================================================

const DATA = {
  profile: {
    name: "M Ramadhan Titan DC",
    greeting: "Hello, I'm",
    roles: [
      "Full Stack Developer",
      "IoT Enthusiast",
      "Machine Learning Learner",
    ],
    description:
      "Active Informatics student at Universitas Muhammadiyah Malang with experience in software development, entrepreneurship, and academic mentoring. Passionate about creating innovative digital products and leveraging technology to deliver meaningful user experiences.",
    photo: "/titan3.png",
    available: true,
    email: "mcahya830@gmail.com",
    github: "https://github.com/MRamadhan000",
    linkedin: "https://linkedin.com",
    cv: "#",
  },

  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "CSS"],
    },
    {
      category: "Backend",
      items: ["NestJS", "Express.js", "Laravel"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
    },
    {
      category: "Programming",
      items: ["Java", "Python", "C", "Typescript"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Jenkins", "GitLab"],
    },
  ],

  projects: [
    {
      name: "Taretan Camera",
      category: "E-Commerce",
      icon: FiMonitor,
      badgeColor: "blue",
      description:
        "Camera rental e-commerce platform with booking management and payment workflow.",
      image: "/taretan-camera.png",
      imageBg: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Docker", "VPS"],
      github: "",
      demo: "https://fe-taretan-camera.vercel.app/",
    },

    {
      name: "SpeakMinds",
      category: "E-Learning",
      icon: FiBook,
      badgeColor: "green",
      description:
        "E-learning platform with course management and progress tracking.",
      image: "/speak-minds.png",
      imageBg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      stack: ["React", "NestJS", "Supabase"],
      github: "",
      demo: "https://fe-speak-minds-academy.vercel.app",
    },

    {
      name: "UV Sense",
      category: "IoT",
      icon: FiCpu,
      badgeColor: "orange",
      description:
        "Real-time UV index monitoring dashboard powered by ESP32 and WebSocket.",
      image: "",
      imageBg: "linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)",
      stack: ["ESP32", "WebSocket"],
      github: "#",
      demo: "",
    },

    {
      name: "Rentify",
      category: "Mobile",
      icon: FiSmartphone,
      badgeColor: "purple",
      description:
        "Flutter rental marketplace application implementing MVC architecture.",
      image: "/rentify.png",
      imageBg: "linear-gradient(135deg, #fce7f3 0%, #fdf4ff 100%)",
      stack: ["Flutter", "Dart", "MVC"],
      github: "#",
      demo: "https://drive.google.com/file/d/1GNg0h50XdfDWLJXKA2vEDBXRNlI4Oua2/view?usp=sharing",
    },
    {
      name: "Agrifresh Indo",
      category: "Web",
      icon: FiLayers,
      badgeColor: "green",
      description:
        "Company profile and inventory management system for Agrifresh Indo.",
      image: "/natura.png",
      imageBg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      stack: ["Next.js", "NestJS", "PostgreSQL"],
      github: "#",
      demo: "https://agrifreshindo.com",
    },
    {
      name: "Embik Farm",
      category: "Web",
      icon: FiLayers,
      badgeColor: "blue",
      description: "Company profile website for a local farming business.",
      image: "/embik-farm.png",
      imageBg: "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)",
      stack: ["Next.js", "React", "Tailwind CSS"],
      github: "#",
      demo: "https://embikfarm.com",
    },
    {
      name: "Music Genre Classification",
      category: "Machine Learning",
      icon: FiMusic,
      badgeColor: "purple",
      description: "Machine learning model for classifying music genres.",
      image: "",
      imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
      stack: ["Python", "Machine Learning"],
      github: "#",
      demo: "",
    },

    {
      name: "Vehicle Data Mining",
      category: "Data Science",
      icon: FiBarChart2,
      badgeColor: "orange",
      description: "Vehicle dataset analysis and visualization using R.",
      image: "",
      imageBg: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)",
      stack: ["R", "Data Visualization"],
      github: "#",
      demo: "",
    },
  ],

  experience: [
    {
      icon: FiTool,
      title: "Laboratory Assistant",
      org: "UMM Informatics Laboratory",
      period: "July 2024 – Present",
      description:
        "Assisted lecturers in conducting programming practical sessions, performed code reviews, graded student assignments, and developed the Advanced Programming course module for 3rd-semester students.",
    },
    {
      icon: FiUsers,
      title: "Coordinator / Head of PMM Group 15",
      org: "University Community Service (PMM UMM) – Jambangan Village",
      period: "2025",
      description:
        "Led and coordinated team community programs, managed field execution, and ensured smooth collaboration between students and local authorities in Jambangan Village.",
    },
    {
      icon: FiBriefcase,
      title: "Logistics and Equipment Committee",
      org: "Information Technology Character Building (ITCB) 2025",
      period: "2024",
      description:
        "Managed technical preparation and event logistics, including deploying digital infrastructure (Google Forms, Linktree) and setting up hardware equipment like projectors to support smooth event execution.",
    },
    {
      icon: FiCoffee, // Menambahkan icon yang cocok untuk sie konsumsi/hospitality
      title: "Consumption Committee",
      org: "Laboratory Assistant Open Recruitment Event 2025",
      period: "2024",
      description:
        "Managed catering logistics, budgeted food supply distributions, and coordinated hospitality operations for committee members and candidates during the recruitment process.",
    },
  ],

  competitions: [
    {
      icon: FiBriefcase,
      name: "P2MW 2025 (Program Pembinaan Mahasiswa Wirausaha)",
      category: "Digital Business",
      description:
        "Developed a digital business platform for 'Embik Farm' using Next.js. Integrated targeted SEO strategies, product catalogs, interactive inquiry forms, and Google Analytics to optimize marketing performance and track user conversion.",
    },
    {
      icon: FiAward,
      name: "KMI Expo 2025 (Kewirausahaan Mahasiswa Indonesia)",
      category: "Digital Business",
      description:
        "Showcased and pitched the 'Embik Farm' digital marketing platform at a national-level exhibition, demonstrating how tech-driven solutions like SEO and data-driven web analytics can scale traditional agricultural businesses.",
    },
    {
      icon: FiCode,
      name: "Aspire 2026 by Amcor",
      category: "GovTech / Web Application Design",
      description:
        "[In Progress] Designing an innovative GovTech web application solution tailored for public transportation management to streamline urban transit and enhance civic infrastructure.",
    },
    {
      icon: FiTerminal,
      name: "Beecrowd Competitive Programming 2024",
      category: "Algorithm & Competitive Programming",
      description:
        "Competed in a high-intensity algorithmic problem-solving competition hosted by the Informatics Student Association (HMIF) UMM, solving complex mathematical and logical programming challenges.",
    },
  ],

  certifications: [
    {
      icon: FaBriefcase,
      name: "IBM SkillsBuild University Education Program (Phase 2)",
      org: "IBM SkillsBuild x Hacktiv8",
      year: "2026",
      link: "#",
      image: "certificates/ibm.png",
    },
    {
      icon: FaBrain,
      name: "AI-volution: AI for Social Good",
      org: "American Spaces & Mereka",
      year: "2025",
      link: "#",
      image: "certificates/ai-volution.png",
    },
    {
      icon: FaHeartbeat,
      name: "Upgrading Event: Recharge & Reflect (Burnout Management)",
      org: "UMM Informatics Laboratory",
      year: "2025",
      link: "#",
      image: "certificates/recharge.png",
    },
    {
      icon: FaJava,
      name: "Java Object-Oriented Programming",
      org: "Oracle Academy",
      year: "2024",
      link: "#",
      image: "",
    },
    {
      icon: DiNodejs,
      name: "MERN Stack Development Certified",
      org: "UMM Informatics Laboratory",
      year: "2024",
      link: "#",
      image: "certificates/mern.png",
    },
    {
      icon: FaUnity,
      name: "Unity Game Development Training : GHOST RUNNER: NIGHT OF THE HAUNTED KEY",
      org: "UMM Informatics Laboratory",
      year: "2024",
      link: "#",
      image: "certificates/unity.png",
    },
    {
      icon: FaVolumeUp, // Menggunakan icon suara/komunikasi untuk Public Speaking
      name: "National Public Speaking Training",
      org: "FESt Management x BEM FEB UMM",
      year: "2024",
      link: "#",
      image: "certificates/speaking.png",
    },

    {
      icon: FaLightbulb,
      name: "National Entrepreneurship Training",
      org: "FESt Management x BEM FEB UMM",
      year: "2024",
      link: "#",
      image: "certificates/enterp.png",
    },
  ],
};

// ============================================================
// TYPES
// ============================================================

type BadgeColor = "blue" | "green" | "orange" | "purple";

type Certification = (typeof DATA.certifications)[number];

// ============================================================
// BADGE COLOR MAP
// ============================================================

const badgeClassMap: Record<BadgeColor, string> = {
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  orange: "bg-amber-100 text-amber-800",
  purple: "bg-violet-100 text-violet-800",
};

// ============================================================
// HOOKS
// ============================================================

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeUp();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold text-blue-600 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <FadeUp className="text-center mb-12">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-700 tracking-tight mb-3">
        {title}
      </h2>
      <p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">
        {desc}
      </p>
    </FadeUp>
  );
}

// ── CERTIFICATE MODAL ─────────────────────────────────────
function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certification | null;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // Lock body scroll while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const CertIcon = cert.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto animate-[scaleIn_0.2s_ease-out]">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors shadow-sm"
        >
          <FiX size={18} />
        </button>

        {/* Image / preview area */}
        <div className="w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-50 flex items-center justify-center overflow-hidden rounded-t-2xl border-b border-slate-200">
          {cert.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-blue-600">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                <CertIcon size={30} />
              </div>
              <span className="text-xs font-medium text-slate-400">
                Certificate preview not available
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <CertIcon size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-700 leading-snug">
                {cert.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{cert.org}</p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-slate-100">
            <span className="text-sm font-semibold text-blue-600">
              {cert.year}
            </span>
            {cert.link && cert.link !== "#" && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Open Credential
                <FiExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100)
          current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const p = DATA.profile;

  return (
    <div className="font-sans bg-white text-slate-500 antialiased">
      {/* ── NAVBAR ───────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 shadow-sm"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center gap-8">
          <a
            href="#home"
            className="text-lg font-extrabold text-blue-600 tracking-tight flex-shrink-0"
          >
            {/* RT */}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-1 flex-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeSection === l.href.slice(1)
                      ? "text-slate-700 bg-slate-100"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={p.cv}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <FiDownload size={14} /> Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-600 py-2 border-b border-slate-100 last:border-0 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-4 pt-3 items-center flex-wrap">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-blue-600"
              >
                GitHub
              </a>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-blue-600"
              >
                LinkedIn
              </a>
              <a
                href={p.cv}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg"
              >
                <FiDownload size={13} /> Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left */}
            <div className="order-2 md:order-1">
              <FadeUp>
                <p className="text-blue-600 font-medium text-sm mb-2 tracking-wide">
                  {p.greeting}
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-700 leading-tight tracking-tighter mb-4">
                  {p.name}
                </h1>
                <p className="text-base font-medium text-slate-600 mb-4 leading-relaxed">
                  {p.roles.join(", ")}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed max-w-sm mb-8">
                  {p.description}
                </p>

                <div className="flex gap-3 flex-wrap mb-8">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200"
                  >
                    View Projects <FiArrowRight size={14} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-1.5 border border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 text-slate-600 text-sm font-medium rounded-lg transition-all"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="flex gap-2">
                  {[
                    {
                      href: p.github,
                      icon: <FiGithub size={18} />,
                      label: "GitHub",
                    },
                    {
                      href: `mailto:${p.email}`,
                      icon: <FiMail size={18} />,
                      label: "Email",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all hover:-translate-y-0.5"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — photo */}
            <div className="order-1 md:order-2 flex justify-center">
              <FadeUp delay={0.15}>
                <div className="relative pb-10">
                  {/* Ambient glow */}
                  <div
                    className="absolute -top-6 -right-6 w-72 h-72 rounded-3xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
                    }}
                  />
                  {/* Photo */}
                  <div className="relative w-64 h-80 sm:w-72 sm:h-[26rem] md:w-80 md:h-[30rem] rounded-3xl overflow-hidden z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.src = `https://api.dicebear.com/8.x/initials/svg?seed=RT&backgroundColor=2563EB&fontColor=ffffff&fontSize=42`;
                      }}
                    />
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 opacity-50 animate-bounce">
          <FiChevronDown size={20} />
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="What I've built"
            title="Featured Projects"
            desc="A selection of projects across web, mobile, IoT, and machine learning."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DATA.projects.map((proj, i) => {
              const ProjectIcon = proj.icon;

              return (
                <FadeUp key={proj.name} delay={i * 0.05}>
                  <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200 flex flex-col h-full">
                    {/* Thumbnail */}
                    <div
                      className="h-40 flex items-center justify-center relative overflow-hidden"
                      style={{ background: proj.imageBg }}
                    >
                      {proj.image && !imgErrors[proj.name] ? (
                        <img
                          src={proj.image}
                          alt={proj.name}
                          className="w-full h-full object-cover"
                          onError={() =>
                            setImgErrors((prev) => ({
                              ...prev,
                              [proj.name]: true,
                            }))
                          }
                        />
                      ) : (
                        <ProjectIcon className="w-14 h-14 text-blue-600 opacity-80" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold mb-3 w-fit ${
                          badgeClassMap[proj.badgeColor as BadgeColor]
                        }`}
                      >
                        {proj.category}
                      </span>

                      <h3 className="text-base font-bold text-slate-700 mb-2">
                        {proj.name}
                      </h3>

                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {proj.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 border border-slate-200 text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 mt-auto">
                        {proj.github && proj.github !== "#" && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
                          >
                            <FiGithub size={14} />
                            GitHub
                          </a>
                        )}

                        {proj.demo && (
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <FiExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="Where I've contributed"
            title="Experience"
            desc="Roles and responsibilities I've held."
          />
          <FadeUp delay={0.1}>
            <div className="max-w-2xl mx-auto relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-5 bottom-5 w-0.5 bg-slate-200" />
              {DATA.experience.map((exp) => (
                <div key={exp.title} className="relative mb-8 last:mb-0">
                  {/* Dot */}
                  <div className="absolute -left-[29px] top-5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-[0_0_0_2px] shadow-blue-600" />
                  <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div>
                        <h3 className="text-sm font-bold text-slate-700">
                          {exp.title}
                        </h3>
                        <p className="text-xs text-blue-600 font-medium">
                          {exp.org}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ─────────────────────────────────────── */}
      <section id="achievements" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="Recognition & Programs"
            title="Competitions & Programs"
            desc="Competitions, entrepreneurship programs, and technology events."
          />

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 gap-4 mb-20 max-w-2xl mx-auto">
              {DATA.competitions.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <c.icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-700">
                      {c.name}
                    </h3>

                    <p className="text-xs text-slate-500">{c.category}</p>

                    <p className="text-xs text-slate-400 mt-1">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <SectionHeader
            eyebrow="Continuous Learning"
            title="Certifications & Training"
            desc="Professional certifications, workshops, and technical training programs."
          />

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DATA.certifications.map((c) => (
                <div
                  key={c.name}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <c.icon size={22} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-700 leading-tight mb-1">
                      {c.name}
                    </h4>

                    <p className="text-xs text-slate-500">{c.org}</p>

                    <p className="text-xs font-semibold text-blue-600 mt-2">
                      {c.year}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveCert(c)}
                    className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    View Credential
                    <FiExternalLink size={11} />
                  </button>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────── */}
      <section
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
        }}
      >
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-base text-white/80 max-w-md mx-auto leading-relaxed mb-9">
              Open for collaboration, internships, freelance opportunities, and
              technology discussions.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={`mailto:${p.email}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5"
              >
                <FiMail size={15} /> Contact Me
              </a>
              <a
                href={p.cv}
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/40 text-white font-medium text-sm rounded-lg hover:bg-white/10 hover:border-white/70 transition-all"
              >
                <FiDownload size={15} /> Download Resume
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            {/* Info */}
            <div>
              <h3 className="text-base font-semibold text-white">{p.name}</h3>

              <p className="text-sm text-slate-400 mt-1">
                Fullstack Developer • Informatics Student
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm text-slate-400">
                <FiMail size={14} />
                <a
                  href={`mailto:${p.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {p.email}
                </a>
              </div>

              <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                <FiMapPin size={14} />
                <span>Junrejo, Batu, East Java, Indonesia</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800 transition-all"
              >
                <FiGithub size={18} />
              </a>

              <a
                href={`mailto:${p.email}`}
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800 transition-all"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-5">
            <p className="text-xs text-slate-500 text-center">
              © {new Date().getFullYear()} {p.name}. Built with Next.js,
              Tailwind CSS, and TypeScript.
            </p>
          </div>
        </div>
      </footer>
      {/* ── CERTIFICATE MODAL ────────────────────────────────── */}
      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </div>
  );
}
