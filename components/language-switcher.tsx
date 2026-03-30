'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Locale } from '@/types/resume';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function switchLanguage(nextLocale: Locale) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', nextLocale);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`rounded-xl px-3 py-2 text-sm transition ${
          locale === 'en'
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
            : 'border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        className={`rounded-xl px-3 py-2 text-sm transition ${
          locale === 'fr'
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
            : 'border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800'
        }`}
      >
        FR
      </button>
    </div>
  );
}