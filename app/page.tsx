import { CopyButton } from '@/components/copy-button';
import { ExperienceItem } from '@/components/experience-item';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ProjectItem } from '@/components/project-item';
import { ThemeToggle } from '@/components/theme-toggle';
import { resumeData } from '@/lib/resum.data';
import { t, getTechClass } from '@/lib/utils';
import { Locale } from '@/types/resume';
import { ScrollReveal } from '@/components/scroll-reveal';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const locale: Locale = params.lang === 'fr' ? 'fr' : 'en';

  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-zinc-900 dark:text-zinc-100">
      {/* Header bordeaux */}
      <div className="bg-[#8B1A2F] dark:bg-[#6B1225] text-white animate-fade-slide-down">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                {t(resumeData.yearsOfExperience, locale)}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-white">
                {resumeData.name}
              </h1>
              <p className="mt-2 text-xl text-white/80">
                {t(resumeData.title, locale)}
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
                {t(resumeData.summary, locale)}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="rounded-xl bg-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/30"
                >
                  {resumeData.email}
                </a>
                <CopyButton value={resumeData.email} label="email" />
                <a
                  href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}
                  className="rounded-xl border border-white/30 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  {resumeData.phone}
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {resumeData.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/30 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <p className="mt-4 text-sm text-white/50">
                {t(resumeData.location, locale)}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <LanguageSwitcher locale={locale} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

        <ScrollReveal delay={0}>
          <section className="section-card mb-10 bg-[var(--section-bg)] rounded-2xl p-6 shadow-[var(--section-shadow)]">
            <h2 className="mb-4 text-2xl font-bold text-[#8B1A2F] dark:text-[#C9485B] border-b border-[#8B1A2F]/20 dark:border-[#C9485B]/20 pb-2">
              {locale === 'fr' ? 'Compétences' : 'Skills'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <span
                  key={skill}
                  className={`skill-badge ${getTechClass(skill)} text-xs px-3 py-1 rounded-full font-medium`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <section className="section-card mb-10 bg-[var(--section-bg)] rounded-2xl p-6 shadow-[var(--section-shadow)]">
            <h2 className="mb-4 text-2xl font-bold text-[#8B1A2F] dark:text-[#C9485B] border-b border-[#8B1A2F]/20 dark:border-[#C9485B]/20 pb-2">
              {locale === 'fr' ? 'Expériences professionnelles' : 'Work Experience'}
            </h2>
            <div className="space-y-6">
              {resumeData.experiences.map((experience) => (
                <ExperienceItem
                  key={`${experience.company}-${experience.period.en}`}
                  experience={experience}
                  locale={locale}
                />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <section className="section-card mb-10 bg-[var(--section-bg)] rounded-2xl p-6 shadow-[var(--section-shadow)]">
            <h2 className="mb-4 text-2xl font-bold text-[#8B1A2F] dark:text-[#C9485B] border-b border-[#8B1A2F]/20 dark:border-[#C9485B]/20 pb-2">
              {locale === 'fr' ? 'Projets' : 'Projects'}
            </h2>
            <div className="space-y-4">
              {resumeData.projects.map((project) => (
                <ProjectItem key={project.name} project={project} locale={locale} />
              ))}
            </div>
          </section>
        </ScrollReveal>

      </div>
    </main>
  );
}