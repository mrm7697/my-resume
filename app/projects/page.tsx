'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getProjects } from '@/utils/projects';

export default function ProjectsPage() {
  const t = useTranslations();
  const projects = getProjects(t);

  return (
    <div className="window grow resume-shell">
      <div className="title-bar">
        <div className="title-bar-text">{t('projects')}</div>
        <div className="title-bar-controls">
          <Link href="/">
            <button aria-label="Close"></button>
          </Link>
        </div>
      </div>
      <div className="window-body resume-body">
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.slug} className="project-card">
              <div className="timeline-company">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={48}
                  height={48}
                  className="company-logo"
                />
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="chip-row">
                {project.technologies.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.slug}`}>
                <button className="button-link">{t('viewDetails')}</button>
              </Link>
            </article>
          ))}
        </div>

        <Link href="/">
          <button className="button-link justify-center">
            {t('backToHome')}
          </button>
        </Link>
      </div>
    </div>
  );
}
