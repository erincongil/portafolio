'use client';

import React, { useState } from 'react';

import {
  User,
  Briefcase,
  GraduationCap,
  Code2,
  FolderGit2,
  Mail,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Database,
  Cpu,
  Layers,
  Award,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Server,
  Workflow,
  Globe
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [copied, setCopied] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');

  const personalData = {
    name: "Ernesto Rincón",
    title: "Programador Senior | Lic. en Computación",
    bio: "Profesional de la Computación con más de 8 años de experiencia en desarrollo de software y administración de bases de datos. Especialista en la automatización y optimización de sistemas administrativos, control de almacenes (WMS) y gestión de inventarios, así como en la modernización y migración de sistemas legacy a arquitecturas modernas.",
    email: "erincongil@gmail.com",
    location: "Maracaibo, Venezuela",
    experienceYears: "8+ Años",
    specialties: ["Sistemas ERP & POS", "Control de Almacenes (WMS)", "Migración de Legacy Code", "Automatización de Procesos"]
  };

  const experiences = [
    {
      company: "BIGWISE",
      role: "Desarrollador de Software Senior",
      period: "Noviembre 2024 - Presente",
      location: "Maracaibo, Venezuela",
      status: "Actual",
      description: "Liderazgo y ejecución en el desarrollo de soluciones empresariales críticas para plataformas multifuncionales.",
      achievements: [
        "Desarrollo y mantenimiento de funcionalidades avanzadas en sistemas ERP, POS y RRHH.",
        "Diseño e implementación de interfaces de usuario modernas, intuitivas y eficientes.",
        "Construcción de módulos personalizados de reportes para la toma de decisiones gerenciales.",
        "Ejecución de pruebas integrales de desarrollo para garantizar cero regresiones y máxima estabilidad."
      ],
      tech: ["Python", "Django", "Vue.js", "PostgreSQL", "Git"]
    },
    {
      company: "COBECA",
      role: "Desarrollador de Software Senior",
      period: "Abril 2018 - Septiembre 2024",
      location: "Maracaibo, Venezuela",
      status: "6 años y 6 meses",
      description: "Encargado principal de la infraestructura tecnológica para la gestión de inventarios, automatización comercial y modernización del ERP corporativo.",
      achievements: [
        "Migración completa de sistemas administrativos legacy en OpenEdge ABL a un stack moderno con Python, Django, Vue.js y RabbitMQ.",
        "Soporte y desarrollo de nuevos aplicativos para el sistema WMS (Warehouse Management System).",
        "Diseño e implementación de procesos automáticos en el sistema administrativo de compras, ventas y facturación.",
        "Optimización, depuración y soporte continuo en el core del sistema de gestión de inventarios."
      ],
      tech: ["Python", "Django", "Vue.js", "OpenEdge ABL", "RabbitMQ", "PostgreSQL", "MySQL"]
    },
    {
      company: "INVERDATA",
      role: "Desarrollador NetBeans (POS)",
      period: "2018",
      location: "Maracaibo, Venezuela",
      status: "Prácticas Profesionales",
      description: "Prácticas profesionales enfocadas en aplicaciones de Punto de Venta.",
      achievements: [
        "Desarrollo y mantenimiento de módulos para el sistema de Puntos de Ventas (POS).",
        "Implementación de lógica de negocio en Java utilizando el entorno NetBeans.",
        "Integración con perifericos de facturación y bases de datos locales."
      ],
      tech: ["Java", "NetBeans", "MySQL", "SQL"]
    }
  ];

  const projects = [
    {
      title: "Migración de ERP Legacy a Stack Moderno",
      client: "COBECA",
      category: "Arquitectura & Migración",
      description: "Transformación integral del sistema administrativo empresarial desde OpenEdge ABL hacia un ecosistema distribuido y escalable.",
      highlights: [
        "Implementación de microservicios e integración asíncrona con RabbitMQ.",
        "Desarrollo de API RESTful robustas en Python/Django.",
        "Frontend responsivo e interactivo con Vue.js."
      ],
      techStack: ["Python", "Django", "Vue.js", "RabbitMQ", "OpenEdge ABL"]
    },
    {
      title: "Módulos y Automatización para Sistema WMS",
      client: "COBECA",
      category: "Gestión Logística",
      description: "Creación de procesos automatizados para el control de almacenes e inventarios a gran escala.",
      highlights: [
        "Reducción significativa de tiempos en el procesamiento de recepción y despacho.",
        "Algoritmos de depuración y consistencia para datos de stock masivos.",
        "Notificaciones y alertas automatizadas para inventario crítico."
      ],
      techStack: ["OpenEdge ABL", "PostgreSQL", "Python"]
    },
    {
      title: "Sistema Administrativo de Compras, Ventas y Facturación",
      client: "COBECA",
      category: "Automatización Financiera",
      description: "Automatización de flujos de trabajo comercial para agilizar cierres de venta e integración fiscal.",
      highlights: [
        "Automatización de reglas de negocio para facturación masiva.",
        "Optimizaciones en la consulta de catálogos e historial de ventas.",
        "Sincronización con módulos de cuentas por cobrar y pagar."
      ],
      techStack: ["Python", "Django", "MySQL", "RabbitMQ"]
    },
    {
      title: "Ecosistema de ERP, POS & RRHH",
      client: "BIGWISE",
      category: "Sistemas Corporativos",
      description: "Desarrollo continuo de funcionalidades estratégicas y soporte integral para software empresarial.",
      highlights: [
        "Construcción de tableros de control y reportes gerenciales.",
        "Mejoras continuas en la experiencia de usuario (UX/UI).",
        "Garantía de calidad mediante pruebas de integración."
      ],
      techStack: ["VisualBasic", "Microsoft SQL Server"]
    }
  ];

  const skills = [
    // Lenguajes & Frameworks
    { name: "Python", category: "backend", level: "Intermedio", icon: "🐍" },
    { name: "Django", category: "backend", level: "Intermedio", icon: "🎸" },
    { name: "Vue.js", category: "frontend", level: "Intermedio", icon: "🟢" },
    { name: "Java", category: "backend", level: "Intermedio-Avanzado", icon: "☕" },
    { name: "OpenEdge ABL", category: "backend", level: "Intermedio / Senior", icon: "⚙️" },
    { name: "RabbitMQ", category: "backend", level: "Básico", icon: "🐇" },

    // Bases de Datos
    { name: "PostgreSQL", category: "database", level: "Avanzado", icon: "🐘" },
    { name: "MySQL", category: "database", level: "Avanzado", icon: "🐬" },

    // Herramientas & DevOps
    { name: "Git", category: "tools", level: "Intermedio", icon: "🌿" },
    { name: "Azure DevOps", category: "tools", level: "Intermedio", icon: "🔷" },
    { name: "Ofimática Avanzada", category: "tools", level: "Avanzado", icon: "📊" },

    // Inteligencia Artificial
    { name: "Gemini AI", category: "ai", level: "Integración / Uso Profesional", icon: "✨" },
    { name: "OpenAI ChatGPT", category: "ai", level: "Productividad", icon: "🌐" },
    { name: "Perplexity", category: "ai", level: "Productividad", icon: "🌐" }
  ];

  const education = [
    {
      degree: "Licenciatura en Computación",
      institution: "Universidad del Zulia (LUZ)",
      period: "Título Universitario",
      type: "Educación Superior",
      details: "Formación integral en ciencias de la computación, estructuras de datos, arquitectura de software y administración de sistemas de información."
    },
    {
      degree: "Técnico en Comercio y Servicios Administrativos",
      institution: "U.E. Arq. Bicentenario del Natalicio de El Libertador",
      period: "Mención: Informática",
      type: "Educación Técnica",
      details: "Bases sólidas en procesos contables, administrativos y fundamentos de desarrollo informático."
    }
  ];

  const languages = [
    { name: "Español", level: "Nativo", percentage: 100 },
    { name: "Inglés", level: "Intermedio (B1/B2)", percentage: 65 }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredSkills = selectedSkillCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedSkillCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-900">

      {/* Background Subtle Gradient Blurs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* HEADER / HERO SECTION */}
        <header className="mb-10 bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-500/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* Avatar / Profile Graphic */}
            <div className="relative group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-linear-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-1 shadow-lg shadow-cyan-500/10">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex flex-col items-center justify-center text-cyan-400">
                  <Terminal className="w-12 h-12 mb-1 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-mono tracking-widest text-slate-400">&lt;DEV /&gt;</span>
                </div>
              </div>
              <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full border-2 border-slate-900 shadow">
                Senior
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-medium mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Disponible para nuevos retos
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {personalData.name}
                </h1>
                <p className="text-lg text-cyan-400 font-medium mt-1">
                  {personalData.title}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {personalData.bio}
              </p>

              {/* Badges & Meta Info */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span>{personalData.experienceYears} Experiencia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Lic. en Computación</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Correo copiado!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Contactar por Correo</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalData.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  Enviar Email Directo
                </a>
              </div>

            </div>

          </div>
        </header>

        {/* TAB NAVIGATION MENU */}
        <nav className="mb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl min-w-max">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'about'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <User className="w-4 h-4" />
              <span>Sobre mí</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'experience'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experiencia</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'projects'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Proyectos Destacados</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'skills'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Habilidades & Tecnologías</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'education'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Educación & Idiomas</span>
            </button>
          </div>
        </nav>

        {/* TAB CONTENT AREA */}
        <main className="transition-all duration-300">

          {/* TAB 1: SOBRE MÍ */}
          {activeTab === 'about' && (
            <div className="space-y-6 animate-fadeIn">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Main Summary */}
                <div className="md:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    Perfil Profesional
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Soy un Programador Senior apasionado por la construcción de sistemas eficientes, escalables y orientados a la solución de problemas complejos de negocio. Cuento con una sólida trayectoria en el desarrollo backend con <span className="text-cyan-400 font-medium">Python, Django y Java</span>, así como la construcción de interfaces dinámicas con <span className="text-cyan-400 font-medium">Vue.js</span>.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    A lo largo de mi carrera he destacado por liderar procesos clave en sistemas ERP corporativos, plataformas POS y gestión de almacenes (WMS). Mi experiencia abarca desde el mantenimiento de sistemas heredados en <span className="text-cyan-400 font-medium">OpenEdge ABL</span> hasta su migración exitosa a tecnologías modernas y arquitecturas desacopladas basadas en mensajería.
                  </p>
                </div>

                {/* Quick Info Box */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-indigo-400" />
                      Áreas de Dominio
                    </h3>
                    <ul className="space-y-2.5">
                      {personalData.specialties.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-xs text-slate-400 mb-2">Contacto directo por correo:</p>
                    <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-xs text-cyan-400 truncate font-mono">{personalData.email}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                        title="Copiar correo"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">8+ Años</h4>
                    <p className="text-xs text-slate-400">Experiencia en Desarrollo</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">ERP & WMS</h4>
                    <p className="text-xs text-slate-400">Sistemas Críticos</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Migraciones</h4>
                    <p className="text-xs text-slate-400">Legacy a Modern Code</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">IA Integration</h4>
                    <p className="text-xs text-slate-400">Herramientas Modernas</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: EXPERIENCIA LABORAL */}
          {activeTab === 'experience' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  Trayectoria Profesional
                </h2>

                <div className="relative border-l-2 border-slate-800 pl-6 ml-2 sm:ml-4 space-y-10">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200" />

                      <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors">

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <div>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50 mb-1 inline-block">
                              {exp.company}
                            </span>
                            <h3 className="text-lg font-bold text-white">
                              {exp.role}
                            </h3>
                          </div>

                          <div className="text-left sm:text-right">
                            <span className="text-xs text-slate-400 font-mono block">
                              {exp.period}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Logros y Responsabilidades:
                          </p>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                          {exp.tech.map((t, i) => (
                            <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                              {t}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: PROYECTOS */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-cyan-400" />
                  Proyectos & Desarrollos Clave
                </h2>
                <p className="text-slate-400 text-sm mb-6">
                  Soluciones de software de impacto empresarial desarrolladas para optimizar inventarios, ventas y administración.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                            {project.client}
                          </span>
                          <span className="text-xs text-cyan-400 font-medium">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                          {project.title}
                        </h3>

                        <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="space-y-1.5 mb-4 bg-slate-900/50 p-3 rounded-lg border border-slate-800/60">
                          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            Aportes Destacados:
                          </p>
                          {project.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                              <span className="text-cyan-400">•</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: HABILIDADES */}
          {activeTab === 'skills' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-cyan-400" />
                      Habilidades Téchnicas
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Lenguajes, marcos de trabajo, bases de datos y herramientas que domino.
                    </p>
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setSelectedSkillCategory('all')}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${selectedSkillCategory === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      Todas
                    </button>
                    <button
                      onClick={() => setSelectedSkillCategory('backend')}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${selectedSkillCategory === 'backend' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      Backend
                    </button>
                    <button
                      onClick={() => setSelectedSkillCategory('frontend')}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${selectedSkillCategory === 'frontend' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      Frontend
                    </button>
                    <button
                      onClick={() => setSelectedSkillCategory('database')}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${selectedSkillCategory === 'database' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      Bases de Datos
                    </button>
                    <button
                      onClick={() => setSelectedSkillCategory('ai')}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${selectedSkillCategory === 'ai' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      IA
                    </button>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-slate-950 border border-slate-800 hover:border-slate-700 p-4 rounded-xl flex items-center gap-3 transition-all duration-200"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                        <span className="text-[11px] text-cyan-400">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Note for AI Tools */}
                <div className="mt-8 bg-linear-to-r from-slate-900 to-indigo-950/40 border border-indigo-900/50 p-4 rounded-xl flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-indigo-200">Productividad impulsada por Inteligencia Artificial</h4>
                    <p className="text-xs text-indigo-300/80 leading-relaxed mt-0.5">
                      Uso fluido de modelos avanzados de IA (Gemini, OpenAI ChatGPT, Perplexity) para acelerar la maquetación de código, optimización de algoritmos, documentación técnica y diseño conceptual.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: EDUCACIÓN Y IDIOMAS */}
          {activeTab === 'education' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Academic Background */}
                <div className="md:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    Formación Académica
                  </h2>

                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <div key={index} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="text-xs text-cyan-400 font-semibold">{item.type}</span>
                          <span className="text-xs text-slate-500 font-mono">{item.period}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                        <p className="text-sm text-slate-300 font-medium">{item.institution}</p>
                        <p className="text-xs text-slate-400 leading-relaxed pt-1">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages Side Card */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    Idiomas
                  </h2>

                  <div className="space-y-5">
                    {languages.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-white">{lang.name}</span>
                          <span className="text-xs text-cyan-400">{lang.level}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                          <div
                            className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                            style={{ width: `${lang.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <p>Capacidad para lectura de documentación técnica compleja, redacción de código limpio y comunicación funcional en equipos globales.</p>
                  </div>

                </div>

              </div>
            </div>
          )}

        </main>

        {/* FOOTER */}
        <footer className="mt-16 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-2">
          <p>© {CURRENT_YEAR} Ernesto Rincón.</p>
          <p className="font-mono text-[11px] text-slate-600">Desarrollado con Next.js & Tailwind CSS</p>
        </footer>

      </div>
    </div>
  );
}
