'use client';

import { ChangeEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function ThemeChanger({ theme }: { theme: string }) {
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const router = useRouter();

  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedTheme(selected);
    Cookies.set('theme', selected);
    const link = document.getElementById('theme-style') as HTMLLinkElement;
    link.href = selected === '98' ? '/98.css' : '/xp.css';
    router.refresh();
  };

  return (
    <select value={selectedTheme} onChange={handleChangeTheme}>
      <option value="xp">XP</option>
      <option value="98">98</option>
    </select>
  );
}
