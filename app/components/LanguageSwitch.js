'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function VenezuelaFlagIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`${className} rounded-full overflow-hidden shrink-0 shadow-sm transition-transform duration-200`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-venezuela-flag">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-venezuela-flag)">
        {/* Yellow stripe */}
        <rect x="0" y="0" width="32" height="10.67" fill="#FCE300" />
        {/* Blue stripe */}
        <rect x="0" y="10.67" width="32" height="10.67" fill="#003882" />
        {/* Red stripe */}
        <rect x="0" y="21.33" width="32" height="10.67" fill="#CE1126" />
        {/* 8 Stars in an arc in the blue stripe */}
        <g fill="#FFFFFF">
          <circle cx="9.2" cy="15.8" r="0.9" />
          <circle cx="10.8" cy="14.2" r="0.9" />
          <circle cx="12.8" cy="13.2" r="0.9" />
          <circle cx="14.9" cy="12.8" r="0.9" />
          <circle cx="17.1" cy="12.8" r="0.9" />
          <circle cx="19.2" cy="13.2" r="0.9" />
          <circle cx="21.2" cy="14.2" r="0.9" />
          <circle cx="22.8" cy="15.8" r="0.9" />
        </g>
      </g>
    </svg>
  );
}

function USAFlagIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`${className} rounded-full overflow-hidden shrink-0 shadow-sm transition-transform duration-200`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-usa-flag">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-usa-flag)">
        {/* White background */}
        <rect width="32" height="32" fill="#FFFFFF" />
        {/* Red stripes (7 red out of 13) */}
        <rect y="0" width="32" height="2.46" fill="#B22234" />
        <rect y="4.92" width="32" height="2.46" fill="#B22234" />
        <rect y="9.85" width="32" height="2.46" fill="#B22234" />
        <rect y="14.77" width="32" height="2.46" fill="#B22234" />
        <rect y="19.69" width="32" height="2.46" fill="#B22234" />
        <rect y="24.62" width="32" height="2.46" fill="#B22234" />
        <rect y="29.54" width="32" height="2.46" fill="#B22234" />
        {/* Blue Canton */}
        <rect x="0" y="0" width="14" height="17.23" fill="#3C3B6E" />
        {/* Star dots */}
        <g fill="#FFFFFF">
          <circle cx="2.5" cy="3" r="0.75" />
          <circle cx="6" cy="3" r="0.75" />
          <circle cx="9.5" cy="3" r="0.75" />
          <circle cx="12" cy="3" r="0.75" />

          <circle cx="4.25" cy="5.8" r="0.75" />
          <circle cx="7.75" cy="5.8" r="0.75" />
          <circle cx="10.75" cy="5.8" r="0.75" />

          <circle cx="2.5" cy="8.6" r="0.75" />
          <circle cx="6" cy="8.6" r="0.75" />
          <circle cx="9.5" cy="8.6" r="0.75" />
          <circle cx="12" cy="8.6" r="0.75" />

          <circle cx="4.25" cy="11.4" r="0.75" />
          <circle cx="7.75" cy="11.4" r="0.75" />
          <circle cx="10.75" cy="11.4" r="0.75" />

          <circle cx="2.5" cy="14.2" r="0.75" />
          <circle cx="6" cy="14.2" r="0.75" />
          <circle cx="9.5" cy="14.2" r="0.75" />
          <circle cx="12" cy="14.2" r="0.75" />
        </g>
      </g>
    </svg>
  );
}

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
    <div className="inline-flex items-center gap-2 p-1.5 bg-slate-950/90 border border-slate-800 hover:border-slate-700/80 rounded-full shadow-lg backdrop-blur-md transition-colors">
      {/* Venezuela / Español */}
      <Link
        href="/"
        className={`flex items-center justify-center p-1 rounded-full transition-all duration-200 ${
          !isEn
            ? 'ring-2 ring-cyan-400 bg-slate-800 shadow-sm scale-110'
            : 'opacity-40 hover:opacity-90 hover:scale-105'
        }`}
        title="Versión en Español (Venezuela)"
        aria-label="Versión en Español"
      >
        <VenezuelaFlagIcon className="w-5.5 h-5.5" />
      </Link>

      {/* Switch Toggle */}
      <button
        type="button"
        role="switch"
        aria-checked={isEn}
        aria-label={isEn ? "Cambiar a Español" : "Switch to English"}
        onClick={toggleLanguage}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-900 border border-slate-700/80 p-0.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
      >
        <span
          className={`inline-block h-4.5 w-4.5 transform rounded-full bg-linear-to-r from-cyan-400 to-blue-500 shadow-md transition-transform duration-300 ease-in-out ${
            isEn ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>

      {/* USA / English */}
      <Link
        href="/en"
        className={`flex items-center justify-center p-1 rounded-full transition-all duration-200 ${
          isEn
            ? 'ring-2 ring-cyan-400 bg-slate-800 shadow-sm scale-110'
            : 'opacity-40 hover:opacity-90 hover:scale-105'
        }`}
        title="English version (United States)"
        aria-label="English version"
      >
        <USAFlagIcon className="w-5.5 h-5.5" />
      </Link>
    </div>
  );
}
