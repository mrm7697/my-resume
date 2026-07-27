import { _Translator } from 'next-intl';
import profilePic from '@/public/profile.png';
import hamilaPic from '@/public/hamila.png';
import pooyanSystemPic from '@/public/pooyan.png';
import ariapaPic from '@/public/ariapa.png';

export const getPersonalInfo = (t: _Translator<Record<string, any>, never>) => {
  return {
    name: t('mohammadrezaMatin'),
    picture: profilePic,
    profession: t('frontWebDeveloper'),
    marriageStatus: t('single'),
    birthDate: new Date(1997, 6, 29),
    province: t('fars'),
    city: t('shiraz'),
    phoneNumber: '+989215710257',
    skills: [
      {
        name: t('html'),
        level: 90,
      },
      {
        name: t('css'),
        level: 90,
      },
      { name: t('javascript'), level: 80 },
      {
        name: t('react'),
        level: 70,
      },
      { name: t('nextjs'), level: 70 },
      { name: t('typescript'), level: 50 },
      { name: t('vuejs'), level: 50 },
    ],
    socialMedia: {
      telegram: 'https://t.me/mrm7697',
      instagram: 'https://www.instagram.com/farshid.matin',
      github: 'https://github.com/mrm7697',
    },
    WorkHistory: [
      {
        companyName: t('pooyanSystem'),
        companyLogo: pooyanSystemPic,
        location: t('yazd'),
        collaboration: [t('full-time'), t('hourly')],
        position: t('frontEndDeveloper'),
        startDate: new Date(2021, 6, 21),
        endDate: new Date(2026, 2, 26),
        technologies: [
          t('dotnetCore'),
          t('blazorWebAssembly'),
          t('vuejs'),
          t('nuxtjs'),
        ],
      },
      {
        companyName: t('hamila'),
        companyLogo: hamilaPic,
        location: t('yazd'),
        collaboration: [t('part-time')],
        position: t('frontEndDeveloper'),
        startDate: new Date(2024, 4, 20),
        endDate: new Date(2025, 4, 21),
        technologies: [t('reactjs'), t('nextjs')],
      },
      {
        companyName: t('ariapa'),
        companyLogo: ariapaPic,
        location: t('yazd'),
        collaboration: [t('hourly')],
        position: t('frontEndDeveloper'),
        startDate: new Date(2024, 7, 22),
        endDate: new Date(2026, 2, 26),
        technologies: [t('reactjs'), t('nextjs')],
      },
    ],
    education: [
      {
        degree: t('diploma'),
        field: t('mathAndPhysics'),
        startDate: new Date(2012, 9, 22),
        endDate: new Date(2015, 9, 22),
        at: t('shahidSadoughiHighSchoolYazd'),
      },
      {
        degree: t('bachelor'),
        field: t('electricalEngineering'),
        startDate: new Date(2015, 9, 23),
        endDate: new Date(2021, 1, 19),
        at: t('amirkabirUniversityOfTechnology'),
      },
    ],
  };
};
