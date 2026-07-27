'use client';

import LangSwitcher from '@/components/ui/lang-switcher';
import ThemeChanger from '@/components/ui/theme-changer';
import TimeDisplay from '@/components/ui/time-display';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function StartMenu({
  theme,
  locale,
}: {
  theme: string;
  locale: string;
}) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === 'fa' || (typeof document !== 'undefined' && document.documentElement.dir === 'rtl');

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    return () => window.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const goToSection = (section: string) => {
    setIsOpen(false);

    if (pathname === '/') {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    router.push(`/#${section}`);
  };

  const menuItems = [
    { id: 'profile', label: t('profile') },
    { id: 'skills', label: t('skills') },
    { id: 'experience', label: t('experience') },
    { id: 'education', label: t('education') },
    { id: 'projects', label: t('projects') },
    { id: 'contact-me', label: t('contactMe') },
  ];

  return (
    <div className={`start-menu ${isRtl ? 'start-menu-rtl' : ''}`} ref={menuRef}>
      <button className="start-button" onClick={() => setIsOpen((value) => !value)}>
        <Image
          height={80}
          width={80}
          priority
          alt="start"
          src={theme === 'xp' ? '/xp.png' : '/98.png'}
        />
        {t('start')}
      </button>

      {isOpen ? (
        <div className={`start-menu-panel ${isRtl ? 'start-menu-panel-rtl' : ''}`} role="menu">
          <div className="start-menu-brand">
            <span>{t('start')}</span>
          </div>
          <div className="start-menu-items">
            {menuItems.map((item) => (
              <button key={item.id} className="start-menu-item" onClick={() => goToSection(item.id)}>
                <span className="start-menu-icon" aria-hidden="true">
                  {item.id === 'profile' ? '👤' : item.id === 'skills' ? '🛠️' : item.id === 'experience' ? '📋' : item.id === 'education' ? '🎓' : item.id === 'projects' ? '📁' : '✉️'}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="system-tray">
        <LangSwitcher locale={locale} />
        <ThemeChanger theme={theme || 'xp'} />
        <TimeDisplay />
      </div>
    </div>
  );
}
