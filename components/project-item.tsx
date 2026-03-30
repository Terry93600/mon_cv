// import { Project, Locale } from '@/types/resume';
// import { t } from '@/lib/utils';

// export function ProjectItem({
//   project,
//   locale,
// }: {
//   project: Project;
//   locale: Locale;
// }) {
//   return (
//     <article className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
//         <div>
//           <h3 className="text-lg font-semibold">{project.name}</h3>
//           <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
//             {t(project.description, locale)}
//           </p>
//         </div>

//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-xl border border-zinc-300 px-3 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
//           >
//             {locale === 'fr' ? 'Voir' : 'Open'}
//           </a>
//         )}
//       </div>

//       <div className="mt-4 flex flex-wrap gap-2">
//         {project.technologies.map((tech) => (
//           <span
//             key={tech}
//             className="rounded-full border border-zinc-300 px-3 py-1 text-xs dark:border-zinc-700"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </article>
//   );
// }

import { Project, Locale } from '@/types/resume';
import { t, getTechClass } from '@/lib/utils';

interface ProjectItemProps {
  project: Project;
  locale: Locale;
}

export function ProjectItem({ project, locale }: ProjectItemProps) {
  return (
    <div className="border-l-4 border-[#8B1A2F] dark:border-[#C9485B] pl-4 py-2">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          {project.name}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8B1A2F] dark:text-[#C9485B] hover:underline"
          >
            ↗ Voir
          </a>
        )}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
        {t(project.description, locale)}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech) => (
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