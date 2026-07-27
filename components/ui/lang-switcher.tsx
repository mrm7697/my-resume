'use client';

import { ChangeEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LangSwitcher({ locale }: { locale: string }) {
  const [language, setLanguage] = useState(locale);
  const router = useRouter();

  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setLanguage(selected);
    Cookies.set('lang', selected);
    router.refresh();
  };
  return (
    <select value={language} onChange={handleChangeLang}>
      <option value="fa">فا</option>
      <option value="en">En</option>
    </select>
  );
}
