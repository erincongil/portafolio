'use client';

import React, { useState } from 'react';
import LanguageSwitch from '../components/LanguageSwitch';

import {
  User,
  Briefcase,
  GraduationCap,
  Code2,
  FolderGit2,
  Mail,
  MapPin,
  Check,
  Terminal,
  Database,
  Cpu,
  Award,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Server,
  Workflow,
  Globe
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function EnglishPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [copied, setCopied] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');

  const personalData = {
    name: "Ernesto Rincón",
    title: "Senior Software Developer | B.S. in Computer Science",
    bio: "Computer Science professional with over 8 years of experience in software development and database administration. Specialized in automating and optimizing enterprise administrative systems, warehouse management (WMS), and inventory control, as well as modernizing and migrating legacy codebases to modern, distributed architectures.",
    email: "erincongil@gmail.com",
    location: "Maracaibo, Venezuela",
    experienceYears: "8+ Years",
    specialties: [
      "ERP & POS Systems",
      "Warehouse Management Systems (WMS)",
      "Legacy Code Modernization",
      "Process Automation",
      "Systems Integration",
      "Database Architecture & Admin"
    ]
  };

  const experiences = [
    {
      company: "BIGWISE",
      role: "Senior Software Developer",
      period: "November 2024 - Present",
      location: "Maracaibo, Venezuela",
      status: "Current",
      description: "Leadership and execution in engineering critical enterprise solutions for multi-functional business platforms.",
      achievements: [
        "Development and maintenance of advanced features across ERP, POS, and HR management systems.",
        "Design and implementation of modern, intuitive, and high-performance user interfaces.",
        "Built custom reporting modules to empower executive and management decision-making.",
        "Executed comprehensive integration testing to guarantee zero regressions and optimal system stability."
      ],
      tech: ["Python", "Django", "Vue.js", "PostgreSQL", "Git"]
    },
    {
      company: "COBECA",
      role: "Senior Software Developer",
      period: "April 2018 - September 2024",
      location: "Maracaibo, Venezuela",
      status: "6 yrs, 6 mos",
      description: "Lead engineer for the core technological infrastructure overseeing inventory control, commercial process automation, and enterprise ERP modernization.",
      achievements: [
        "End-to-end migration of legacy administrative systems from OpenEdge ABL to a modern stack with Python, Django, Vue.js, and RabbitMQ.",
        "Supported and engineered new specialized applications for the Warehouse Management System (WMS).",
        "Designed and implemented automated workflows within purchasing, sales, and billing enterprise systems.",
        "Continuous performance optimization, debugging, and mission-critical support for the central inventory management engine."
      ],
      tech: ["Python", "Django", "Vue.js", "OpenEdge ABL", "RabbitMQ", "PostgreSQL", "MySQL"]
    },
    {
      company: "INVERDATA",
      role: "NetBeans Software Developer (POS)",
      period: "2018",
      location: "Maracaibo, Venezuela",
      status: "Professional Internship",
      description: "Professional internship focused on Point of Sale (POS) desktop applications and transaction processing.",
      achievements: [
        "Development and maintenance of core modules for Point of Sale (POS) systems.",
        "Implementation of business logic in Java utilizing the NetBeans development environment.",
        "Integration with hardware billing peripherals and local transaction databases."
      ],
      tech: ["Java", "NetBeans", "MySQL", "SQL"]
    }
  ];

  const projects = [
    {
      title: "Legacy ERP Migration to Modern Stack",
      client: "COBECA",
      category: "Architecture & Migration",
      description: "Comprehensive transformation of enterprise administrative software from OpenEdge ABL into a distributed, scalable microservice ecosystem.",
      highlights: [
        "Implemented microservices and asynchronous message queuing with RabbitMQ.",
        "Engineered high-performance RESTful APIs in Python/Django.",
        "Developed interactive and responsive front-end interfaces with Vue.js."
      ],
      techStack: ["Python", "Django", "Vue.js", "RabbitMQ", "OpenEdge ABL"]
    },
    {
      title: "WMS Modules & Warehouse Automation",
      client: "COBECA",
      category: "Logistics & Operations",
      description: "Automated workflow design for large-scale warehouse tracking and real-time inventory control.",
      highlights: [
        "Significant turnaround time reduction in receiving and dispatching goods.",
        "Algorithmic consistency checks and data sanitization for high-volume inventory tables.",
        "Automated real-time notifications and alerts for critical stock thresholds."
      ],
      techStack: ["OpenEdge ABL", "PostgreSQL", "Python"]
    },
    {
      title: "Procurement, Sales & Invoicing System",
      client: "COBECA",
      category: "Financial Automation",
      description: "Commercial workflow automation streamlining sales orders, fiscal billing compliance, and transaction settlement.",
      highlights: [
        "Automated business rules for high-volume batch invoicing.",
        "Optimized querying for large product catalogs and transaction histories.",
        "Direct synchronization with accounts receivable and accounts payable modules."
      ],
      techStack: ["Python", "Django", "MySQL", "RabbitMQ"]
    },
    {
      title: "ERP, POS & HR Enterprise Suite",
      client: "BIGWISE",
      category: "Enterprise Systems",
      description: "Continuous engineering and holistic technical support for commercial enterprise software platforms.",
      highlights: [
        "Engineered executive KPI dashboards and operational reporting tools.",
        "Continuous UX/UI enhancements for high operator efficiency.",
        "Rigorous integration testing ensuring system reliability."
      ],
      techStack: ["VisualBasic", "Microsoft SQL Server"]
    }
  ];

  const skills = [
    // Languages & Frameworks
    { name: "Python", category: "backend", level: "Intermediate", icon: "🐍" },
    { name: "Django", category: "backend", level: "Intermediate", icon: "🎸" },
    { name: "Vue.js", category: "frontend", level: "Intermediate", icon: "🟢" },
    { name: "Java", category: "backend", level: "Intermediate - Advanced", icon: "☕" },
    { name: "OpenEdge ABL", category: "backend", level: "Intermediate / Senior", icon: "⚙️" },
    { name: "RabbitMQ", category: "backend", level: "Foundational", icon: "🐇" },

    // Databases
    { name: "PostgreSQL", category: "database", level: "Advanced", icon: "🐘" },
    { name: "MySQL", category: "database", level: "Advanced", icon: "🐬" },

    // Tools & DevOps
    { name: "Git", category: "tools", level: "Intermediate", icon: "🌿" },
    { name: "Azure DevOps", category: "tools", level: "Intermediate", icon: "🔷" },
    { name: "Advanced Office Productivity", category: "tools", level: "Advanced", icon: "📊" },

    // Artificial Intelligence
    { name: "Gemini AI", category: "ai", level: "Integration / Professional Use", icon: "✨" },
    { name: "OpenAI ChatGPT", category: "ai", level: "Productivity", icon: "🌐" },
    { name: "Perplexity", category: "ai", level: "Productivity", icon: "🌐" }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Universidad del Zulia (LUZ)",
      period: "University Degree",
      type: "Higher Education",
      details: "Comprehensive academic foundation in computer science, data structures, software architecture, and information systems engineering."
    },
    {
      degree: "Associate Degree in Commerce & Administrative Services",
      institution: "U.E. Arq. Bicentenario del Natalicio de El Libertador",
      period: "Major: Computer Science",
      type: "Technical Education",
      details: "Strong fundamentals in accounting workflows, business operations, and computing foundations."
    }
  ];

  const languages = [
    { name: "English", level: "Intermediate (B1/B2)", percentage: 65 },
    { name: "Spanish", level: "Native", percentage: 100 }
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

          {/* Language Switcher in top right */}
          <div className="flex justify-end mb-4 sm:mb-0 sm:absolute sm:top-6 sm:right-6 z-20">
            <LanguageSwitch currentLang="en" />
          </div>

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
                  Available for new opportunities
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
                  <span>{personalData.experienceYears} Experience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>B.S. in Computer Science</span>
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
                      <span>Email copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Contact via Email</span>
                    </>
                  )}
                </button>
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
              <span>About Me</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'experience'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'projects'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Featured Projects</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'skills'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Skills & Technologies</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${activeTab === 'education'
                ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Languages</span>
            </button>
          </div>
        </nav>

        {/* TAB CONTENT AREA */}
        <main className="transition-all duration-300">

          {/* TAB 1: ABOUT ME */}
          {activeTab === 'about' && (
            <div className="space-y-6 animate-fadeIn">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Main Summary */}
                <div className="md:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    Professional Profile
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Senior Software Engineer passionate about engineering efficient, scalable systems tailored to solve complex business challenges. Proven track record in backend development with <span className="text-cyan-400 font-medium">Python, Django, and Java</span>, alongside building reactive, intuitive user interfaces with <span className="text-cyan-400 font-medium">Vue.js</span>.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Throughout my career, I have excelled in leading mission-critical initiatives in corporate ERP systems, POS platforms, and warehouse management (WMS). My expertise spans from maintaining legacy business systems in <span className="text-cyan-400 font-medium">OpenEdge ABL</span> to successfully migrating them to modern technologies and decoupled, message-driven architectures.
                  </p>
                </div>

                {/* Quick Info Box */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-indigo-400" />
                      Core Competencies
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
                </div>

              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">8+ Years</h4>
                    <p className="text-xs text-slate-400">Software Engineering</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">ERP & WMS</h4>
                    <p className="text-xs text-slate-400">Mission-Critical Systems</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Migrations</h4>
                    <p className="text-xs text-slate-400">Legacy to Modern Stack</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">AI Integration</h4>
                    <p className="text-xs text-slate-400">Artificial Intelligence</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  Professional Career
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
                            Key Achievements & Responsibilities:
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

          {/* TAB 3: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-cyan-400" />
                  Key Projects & Developments
                </h2>
                <p className="text-slate-400 text-sm mb-6">
                  High-impact enterprise software solutions engineered to streamline inventory, sales, and business administration.
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
                            Key Highlights:
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

          {/* TAB 4: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-cyan-400" />
                      Technical Skills
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Programming languages, frameworks, databases, and tools in my tech stack.
                    </p>
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setSelectedSkillCategory('all')}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${selectedSkillCategory === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      All
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
                      Databases
                    </button>
                    <button
                      onClick={() => setSelectedSkillCategory('ai')}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${selectedSkillCategory === 'ai' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      AI
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
                    <h4 className="text-sm font-bold text-indigo-200">AI-Accelerated Engineering & Productivity</h4>
                    <p className="text-xs text-indigo-300/80 leading-relaxed mt-0.5">
                      Fluent adoption of advanced AI models (Gemini, OpenAI ChatGPT, Perplexity) to accelerate code prototyping, algorithm optimization, technical documentation, and system design.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: EDUCATION AND LANGUAGES */}
          {activeTab === 'education' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Academic Background */}
                <div className="md:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    Academic Background
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
                    Languages
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
                    <p>Proficient in comprehending complex technical documentation, authoring clean maintainable code, and collaborating effectively within global cross-functional teams.</p>
                  </div>

                </div>

              </div>
            </div>
          )}

        </main>

        {/* FOOTER */}
        <footer className="mt-16 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-2">
          <p>© {CURRENT_YEAR} Ernesto Rincón.</p>
          <p className="font-mono text-[11px] text-slate-600">Built with Next.js & Tailwind CSS</p>
        </footer>

      </div>
    </div>
  );
}
