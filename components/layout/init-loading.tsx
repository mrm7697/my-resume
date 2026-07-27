'use client';

import { useEffect, useState } from 'react';
import LoadingProgress from '../ui/loading-progress';
import { useTranslations } from 'next-intl';

export default function InitLoading() {
  const [show, setShow] = useState(false);

  const t = useTranslations();

  useEffect(() => {
    if (!show) {
      setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 2000);
    }
  }, []);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all ${show ? 'z-50 visible bg-black/50' : '-z-1 invisible bg-transparent'}`}
    >
      <div className="bg-white px-8 py-6 flex flex-col justify-center items-center gap-4 rounded-2xl shadow-lg">
        <LoadingProgress />
        <p>{t('initializing')}</p>
      </div>
    </div>
  );
}
