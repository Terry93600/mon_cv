import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  name: 'GENLY Terry',
  title: {
    fr: 'Développeur Web Fullstack',
    en: 'Fullstack Web Developer',
  },
  yearsOfExperience: {
    fr: 'Disponible immédiatement',
    en: 'Available immediately',
  },
  summary: {
    fr: "Développeur Fullstack, j'ai contribué au développement et au déploiement d'applications web et mobiles. À l'aise en frontend, backend et en bases de données SQL/NoSQL, je travaille efficacement en méthode Agile grâce à mon autonomie, mon esprit d'équipe et ma capacité d'analyse.",
    en: 'As a Fullstack Developer, I have contributed to the development and deployment of web and mobile applications. With expertise in front-end, back-end, and SQL/NoSQL databases, I work effectively using Agile methodologies thanks to my independence, team spirit, and analytical skills.',
  },
  email: 'terrygenly.tg@gmail.com',
  phone: '+33 6 58 68 38 75',
  location: {
    fr: 'Paris, France',
    en: 'Paris, France',
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/terry93600' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/genlyterry' },
  ],
  experiences: [
    {
      company: 'Pernod Ricard',
      role: {
        fr: "Concepteur d'application Web (Alternance)",
        en: 'Web Application Developer (Apprenticeship)',
      },
      period: {
        fr: 'Mars 2024 — Octobre 2025',
        en: 'March 2024 — October 2025',
      },
      location: {
        fr: 'Paris',
        en: 'Paris',
      },
      summary: {
        fr: "Conception d'applications internes, mise en place d'interfaces cohérentes, rédaction de documentation technique et planification de projets en méthode Agile.",
        en: 'Design of internal applications, implementation of consistent interfaces, technical documentation writing, and Agile project planning.',
      },
      details: [
        {
          fr: "Conception d'applications internes avec mise en place d'interfaces cohérentes (Design system, Vue.js).",
          en: 'Designed internal applications with consistent interfaces using Design System and Vue.js.',
        },
        {
          fr: "Développement d'applications métiers pour les équipes (Power Apps, JavaScript).",
          en: 'Developed business applications for internal teams using Power Apps and JavaScript.',
        },
        {
          fr: 'Rédaction de documentation technique et formalisation des bonnes pratiques (React, Angular, Vue, .NET, GitHub).',
          en: 'Wrote technical documentation and formalized coding best practices (React, Angular, Vue, .NET, GitHub).',
        },
        {
          fr: "Planification et suivi des projets en s'appuyant sur les méthodes Agile.",
          en: 'Planned and tracked projects using Agile methodologies.',
        },
      ],
      technologies: ['Vue.js', 'React', 'Angular', 'JavaScript', 'Power Apps', 'GitHub'],
    },
    {
      company: 'Pernod Ricard',
      role: {
        fr: 'Développeur Web (Alternance)',
        en: 'Web Developer (Apprenticeship)',
      },
      period: {
        fr: 'Janvier 2024 — Janvier 2025',
        en: 'January 2024 — January 2025',
      },
      location: {
        fr: 'Paris',
        en: 'Paris',
      },
      summary: {
        fr: "Migration d'un site vers Shopify, réalisation de maquettes Figma et conception d'interfaces internes.",
        en: 'Migrated a website to Shopify, created Figma mockups, and designed internal interfaces.',
      },
      details: [
        {
          fr: "Migration d'un site existant vers la plateforme Shopify.",
          en: 'Migrated an existing website to the Shopify platform.',
        },
        {
          fr: "Réalisation de maquettes dans Figma dans le cadre de la refonte d'une application interne.",
          en: 'Created Figma mockups as part of an internal application redesign.',
        },
        {
          fr: "Conception d'applications internes avec mise en place d'interfaces cohérentes (Design system, Vue.js).",
          en: 'Designed internal applications with consistent interfaces using Design System and Vue.js.',
        },
      ],
      technologies: ['Shopify', 'Figma', 'Vue.js', 'JavaScript'],
    },
  ],
  projects: [
    {
      name: 'Application de gestion des temps de repos',
      description: {
        fr: "Réalisation d'une application interne pour la gestion des temps de repos des équipes.",
        en: 'Development of an internal application for managing team break times.',
      },
      technologies: ['Vue.js', 'JavaScript', 'Power Apps'],
    },
    {
      name: 'Migration Shopify',
      description: {
        fr: "Contribution à la migration d'un site web vers Shopify, avec adaptation de la structure et des contenus.",
        en: 'Contributed to the migration of a website to Shopify, adapting structure and content.',
      },
      technologies: ['Shopify', 'JavaScript', 'Figma'],
    },
    {
      name: 'Documentation bonnes pratiques',
      description: {
        fr: 'Structuration et rédaction de la documentation relative aux bonnes pratiques de codage en entreprise.',
        en: 'Structured and wrote documentation on coding best practices within the company.',
      },
      technologies: ['React', 'Angular', 'Vue', '.NET', 'GitHub'],
    },
  ],
  skills: [
    'React.js',
    'Vue.js',
    'Node.js',
    'Express',
    'TypeScript',
    'JavaScript',
    'SQL',
    'MySQL',
    'MongoDB',
    'Mongoose',
    'REST API',
    'Git',
    'Shopify',
    'WordPress',
    'Power Apps',
    'Figma',
    'Agile',
    'Postman',
  ],
};