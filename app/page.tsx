'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="window grow">
      <div className="title-bar">
        <div className="title-bar-text">{t('mohammadrezaMatin')}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        Microsoft&#10094;R&#10095; Windows DOS &#10094;C&#10095; Copyright
        Microsoft Corp 1990-2001.
        {`C:&#92;WINDOWS&#92;SYSTEM32>`} You can build a command line easily
        with a window and pre tag
      </div>
    </div>
  );
}
