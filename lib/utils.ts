import { Locale, LocalizedString } from '@/types/resume';

export function t(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

export const techColors: Record<string, string> = {
  // Languages
  'JavaScript':   'bg-[#F7DF1E] text-black',
  'TypeScript':   'bg-[#3178C6] text-white',
  'Python':       'bg-[#3776AB] text-white',

  // Frontend
  'React.js':     'bg-[#61DAFB] text-black',
  'React':        'bg-[#61DAFB] text-black',
  'Vue.js':       'bg-[#42B883] text-white',
  'Vue':          'bg-[#42B883] text-white',
  'Angular':      'bg-[#DD0031] text-white',
  'Next.js':      'bg-zinc-900 text-white dark:bg-white dark:text-black',
  'Tailwind CSS': 'bg-[#06B6D4] text-white',
  'Tailwind':     'bg-[#06B6D4] text-white',
  'Figma':        'bg-[#F24E1E] text-white',
  'Vite':         'bg-[#646CFF] text-white',
  '.NET':         'bg-[#512BD4] text-white',

  // Backend
  'Node.js':      'bg-[#339933] text-white',
  'Express':      'bg-zinc-800 text-white',

  // Base de données
  'MongoDB':      'bg-[#47A248] text-white',
  'Mongoose':     'bg-[#880000] text-white',
  'MySQL':        'bg-[#4479A1] text-white',
  'SQL':          'bg-[#4479A1] text-white',
  'PostgreSQL':   'bg-[#4169E1] text-white',
  'Prisma':       'bg-[#2D3748] text-white',

  // Outils
  'Git':          'bg-[#F05032] text-white',
  'GitHub':       'bg-zinc-900 text-white',
  'Shopify':      'bg-[#96BF48] text-white',
  'WordPress':    'bg-[#21759B] text-white',
  'Power Apps':   'bg-[#742774] text-white',
  'Postman':      'bg-[#FF6C37] text-white',
  'Storybook':    'bg-[#FF4785] text-white',
  'Trello':       'bg-[#0052CC] text-white',

  // Méthodes / autres
  'Agile':        'bg-[#8B1A2F] text-white',
  'REST API':     'bg-[#8B1A2F] text-white',
  'UX/UI':        'bg-[#8B1A2F] text-white',
  'Auth.js':      'bg-[#8B1A2F] text-white',
  'CRUD':         'bg-[#8B1A2F] text-white',
  'Axios':        'bg-[#5A29E4] text-white',
};

export function getTechClass(tech: string): string {
  return techColors[tech] ?? 'bg-[#8B1A2F] text-white';
}