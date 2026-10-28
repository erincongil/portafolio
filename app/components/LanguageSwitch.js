'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LanguageSwitch({ currentLang = 'es' }) {
  const router = useRouter();
  const isEn = currentLang === 'en';

  const toggleLanguage = () => {
    if (isEn) {
      router.push('/');
    } else {
      router.push('/en');
    }
  };

  return (
    <div className="inline-flex items-center gap-1.5 p-1 bg-slate-950/90 border border-slate-800 hover:border-slate-700/80 rounded-full shadow-lg backdrop-blur-md transition-colors">
      {/* ES Option */}
      <Link
        href="/"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          !isEn
            ? 'bg-slate-800 text-cyan-400 shadow-xs'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        title="Ver versión en Español"
      >
        <span className="text-sm leading-none" role="img" aria-label="Español">🇪🇸</span>
        <span className="tracking-wider">ES</span>
      </Link>

      {/* Switch Toggle */}
      <button
        type="button"
        role="switch"
        aria-checked={isEn}
        aria-label={isEn ? "Switch to Spanish" : "Cambiar a Inglés"}
        onClick={toggleLanguage}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-900 border border-slate-700/80 p-0.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
      >
        <span
          className={`inline-block h-4.5 w-4.5 transform rounded-full bg-linear-to-r from-cyan-400 to-blue-500 shadow-md transition-transform duration-300 ease-in-out ${
            isEn ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>

      {/* EN Option */}
      <Link
        href="/en"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          isEn
            ? 'bg-slate-800 text-cyan-400 shadow-xs'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        title="View English version"
      >
        <span className="text-sm leading-none" role="img" aria-label="English">🇺🇸</span>
        <span className="tracking-wider">EN</span>
      </Link>
    </div>
  );
}
