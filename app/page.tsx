'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { getPersonalInfo } from '@/utils/personal-info';
import { getProjects } from '@/utils/projects';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const info = getPersonalInfo(t);
  const featuredProjects = getProjects(t).slice(0, 3);

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(locale, {
      month: 'short',
      year: 'numeric',
    }).format(date);

  return (
    <div className="window grow resume-shell">
      <div className="title-bar">
        <div className="title-bar-text">{info.name}</div>
        <div className="title-bar-controls" />
      </div>
      <div className="window-body resume-body">
        <div className="resume-grid">
          <section id="profile" className="window resume-panel">
            <div className="title-bar">
              <div className="title-bar-text">{t('profile')}</div>
            </div>
            <div className="window-body resume-panel-body">
              <div className="profile-card">
                <div className="profile-image-frame">
                  <Image
                    src={info.picture}
                    alt={info.name}
                    width={120}
                    height={120}
                    className="profile-image"
                  />
                </div>
                <div className="profile-copy">
                  <h1>{info.name}</h1>
                  <p className="resume-role">{info.profession}</p>
                  <div className="resume-meta">
                    <span>
                      {info.city}, {info.province}
                    </span>
                    <span>{info.phoneNumber}</span>
                  </div>
                </div>
              </div>

              <div className="resume-section">
                <h2>{t('aboutMe')}</h2>
                <p>{t('summary')}</p>
              </div>
            </div>
          </section>

          <section id="skills" className="window resume-panel">
            <div className="title-bar">
              <div className="title-bar-text">{t('skills')}</div>
            </div>
            <div className="window-body resume-panel-body">
              <div className="skill-list">
                {info.skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <progress max={100} value={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="resume-grid full-width">
          <section id="experience" className="window resume-panel">
            <div className="title-bar">
              <div className="title-bar-text">{t('experience')}</div>
            </div>
            <div className="window-body resume-panel-body">
              <div className="timeline-list">
                {info.WorkHistory.map((job) => (
                  <article className="timeline-card" key={job.companyName}>
                    <div className="timeline-heading">
                      <div className="timeline-company">
                        <Image
                          src={job.companyLogo}
                          alt={job.companyName}
                          width={44}
                          height={44}
                          className="company-logo"
                        />
                        <div>
                          <h3>{job.companyName}</h3>
                          <p>{job.position}</p>
                        </div>
                      </div>
                      <span className="timeline-period">
                        {`${formatDate(job.startDate)} — ${job.endDate ? formatDate(job.endDate) : t('present')}`}
                      </span>
                    </div>
                    <div className="timeline-meta">
                      <span>{job.location}</span>
                      <span>{job.collaboration.join(' • ')}</span>
                    </div>
                    <div className="chip-row">
                      {job.technologies.map((tech) => (
                        <span className="chip" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="resume-grid">
          <section id="education" className="window resume-panel">
            <div className="title-bar">
              <div className="title-bar-text">{t('education')}</div>
            </div>
            <div className="window-body resume-panel-body">
              <div className="timeline-list">
                {info.education.map((item) => (
                  <article
                    className="timeline-card"
                    key={`${item.degree}-${item.at}`}
                  >
                    <div className="timeline-heading">
                      <div>
                        <h3>{item.degree}</h3>
                        <p>{item.field}</p>
                      </div>
                      <span className="timeline-period">
                        {`${formatDate(item.startDate)} — ${item.endDate ? formatDate(item.endDate) : t('present')}`}
                      </span>
                    </div>
                    <p className="timeline-meta">{item.at}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact-me" className="window resume-panel">
            <div className="title-bar">
              <div className="title-bar-text">{t('contactMe')}</div>
            </div>
            <div className="window-body resume-panel-body">
              <div className="contact-card">
                <h3>{t('letSConnect')}</h3>
                <p>{t('contactMessage')}</p>
                <div className="contact-links">
                  <a
                    href={info.socialMedia.telegram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button-link">
                      <span className="contact-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M9.6 15.3 9.2 20c.4 0 .6-.2.8-.4l2-2 4.2 3.2c.8.4 1.3.2 1.5-.7L21 4.7c.2-.9-.3-1.3-1-1.1L2.8 10.2c-.9.3-.9.9-.2 1.1l4.7 1.5 10.9-7c.5-.3.9-.1.5.2l-8.8 8.1Z" />
                        </svg>
                      </span>
                      Telegram
                    </button>
                  </a>
                  <a
                    href={info.socialMedia.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button-link">
                      <span className="contact-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2Zm6.2-1.7a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
                        </svg>
                      </span>
                      Instagram
                    </button>
                  </a>
                  <a
                    href={info.socialMedia.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button-link">
                      <span className="contact-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 2a10 10 0 0 0-3.16 19.18c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.56 1.37.21 2.38.11 2.63.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                        </svg>
                      </span>
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="resume-grid full-width">
          <section id="projects" className="window resume-panel">
            <div className="title-bar">
              <div className="title-bar-text">{t('projects')}</div>
            </div>
            <div className="window-body resume-panel-body">
              <div className="project-preview-grid">
                {featuredProjects.map((project) => (
                  <article className="project-preview-card" key={project.slug}>
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
                    <Link
                      className="mt-auto"
                      href={`/projects/${project.slug}`}
                    >
                      <button className="button-link">
                        {t('viewDetails')}
                      </button>
                    </Link>
                  </article>
                ))}
              </div>
              <Link href="/projects">
                <button className="button-link w-full justify-center">
                  {t('browseAllProjects')}
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
