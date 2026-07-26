'use server';

import { cookies } from 'next/headers';
import i18n from '@/i18n/config';

const COOKIE_NAME = 'lang';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || i18n.defaultLocale;
}

export async function setUserLocale(locale: string) {
  const now = new Date();
  const newDate = new Date(now.setMonth(now.getMonth() + 1));
  (await cookies()).set(COOKIE_NAME, locale, { expires: newDate });
}
