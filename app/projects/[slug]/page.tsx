'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { getProjects } from '@/utils/projects';

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const t = useTranslations();
  const projects = getProjects(t);
  const project = projects.find((item) => item.slug === params.slug);
  const [activeImage, setActiveImage] = useState(0);

  const currentImages = project?.images ?? [];

  useMemo(() => {
    setActiveImage(0);
  }, [params.slug]);

  if (!project) {
    return null;
  }

  return (
    <div className="window grow resume-shell">
      <div className="title-bar">
        <div className="title-bar-text">{project.name}</div>
        <div className="title-bar-controls" />
      </div>
      <div className="window-body resume-body">
        <div className="project-detail-card">
          <div className="timeline-company">
            <Image src={project.logo} alt={project.name} width={64} height={64} className="company-logo" />
            <div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="chip-row">
            {project.technologies.map((tech) => (
              <span className="chip" key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="window project-detail-card gallery-shell">
          <div className="title-bar">
            <div className="title-bar-text">{t('projectGallery')}</div>
          </div>
          <div className="window-body">
            <div className="gallery-main">
              <Image src={currentImages[activeImage]} alt={`${project.name} ${activeImage + 1}`} width={900} height={540} />
            </div>
            <div className="gallery-controls">
              <button onClick={() => setActiveImage((value) => (value > 0 ? value - 1 : currentImages.length - 1))}>
                {t('previous')}
              </button>
              <button onClick={() => setActiveImage((value) => (value < currentImages.length - 1 ? value + 1 : 0))}>
                {t('next')}
              </button>
            </div>
            <div className="thumbnails">
              {currentImages.map((image, index) => (
                <button key={`${image.src}-${index}`} className={`thumbnail-button ${index === activeImage ? 'active' : ''}`} onClick={() => setActiveImage(index)}>
                  <Image src={image} alt={`${project.name} thumbnail ${index + 1}`} width={180} height={90} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-links">
          <Link href="/projects" className="action-link">{t('backToProjects')}</Link>
          <Link href="/" className="action-link">{t('backToHome')}</Link>
        </div>
      </div>
    </div>
  );
}
