'use client';

import { useState } from 'react';
import { Experience, Locale } from '@/types/resume';
import { t, getTechClass } from '@/lib/utils';

interface ExperienceItemProps {
  experience: Experience;
  locale: Locale;
}

export function ExperienceItem({ experience, locale }: ExperienceItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-l-4 border-[#8B1A2F] dark:border-[#C9485B] pl-4 py-2">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
            {t(experience.role, locale)}
          </h3>
          <p className="text-sm text-[#8B1A2F] dark:text-[#C9485B] font-medium">
            {experience.company}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {t(experience.period, locale)}
            {experience.location && ` · ${t(experience.location, locale)}`}
          </p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-xs text-[#8B1A2F] dark:text-[#C9485B] hover:underline shrink-0 mt-1"
        >
          {open ? '▲ Réduire' : '▼ Détails'}
        </button>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
        {t(experience.summary, locale)}
      </p>

      {open && (
        <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
          {experience.details.map((detail, i) => (
            <li key={i}>{t(detail, locale)}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className={`${getTechClass(tech)} text-xs px-3 py-1 rounded-full font-medium`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}