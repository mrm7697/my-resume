import { _Translator } from 'next-intl';
import pishroPic from '@/public/pooyan.png';
import pplush1 from '@/public/projects/pishro-plus/pplus-1.png';
import pplush2 from '@/public/projects/pishro-plus/pplus-2.png';
import pplush3 from '@/public/projects/pishro-plus/pplus-3.png';
import pplush4 from '@/public/projects/pishro-plus/pplus-4.png';
import pplush5 from '@/public/projects/pishro-plus/pplus-5.png';
import ariapaPic from '@/public/ariapa.png';
import isss1 from '@/public/projects/ISSS/ISSS-1.jpg';
import isss2 from '@/public/projects/ISSS/ISSS-2.jpg';
import isss3 from '@/public/projects/ISSS/ISSS-3.jpg';
import isss4 from '@/public/projects/ISSS/ISSS-4.jpg';
import isss5 from '@/public/projects/ISSS/ISSS-5.jpg';
import isss6 from '@/public/projects/ISSS/ISSS-6.jpg';
import isss7 from '@/public/projects/ISSS/ISSS-7.jpg';
import isss8 from '@/public/projects/ISSS/ISSS-8.jpg';
import isss9 from '@/public/projects/ISSS/ISSS-9.jpg';
import karmatickPic from '@/public/karmatick.png';
import karma1 from '@/public/projects/karmatick/karmatick-1.png';
import karma2 from '@/public/projects/karmatick/karmatick-2.png';
import karma3 from '@/public/projects/karmatick/karmatick-3.png';
import karma4 from '@/public/projects/karmatick/karmatick-4.png';
import karma5 from '@/public/projects/karmatick/karmatick-5.png';
import karma6 from '@/public/projects/karmatick/karmatick-6.png';
import karma7 from '@/public/projects/karmatick/karmatick-7.png';
import karma8 from '@/public/projects/karmatick/karmatick-8.png';
import karma9 from '@/public/projects/karmatick/karmatick-9.png';
import karma10 from '@/public/projects/karmatick/karmatick-10.png';
import karma11 from '@/public/projects/karmatick/karmatick-11.png';
import karma12 from '@/public/projects/karmatick/karmatick-12.png';
import karma13 from '@/public/projects/karmatick/karmatick-13.png';

export const getProjects = (t: _Translator<Record<string, any>, never>) => {
  return [
    {
      slug: 'pishro-plus',
      name: t('pishroPlus'),
      description: t('pplusDescription'),
      logo: pishroPic,
      technologies: ['vuejs', 'pinia', 'vuetify', 'axios', 'chart.js'],
      images: [pplush1, pplush2, pplush3, pplush4, pplush5],
    },
    {
      slug: 'isss',
      name: 'ISSS',
      description: t('isssDescription'),
      logo: ariapaPic,
      technologies: [
        'reactjs',
        'redux',
        'materialUI',
        'axios',
        'formik',
        'yup',
        'recharts',
        'i18next',
      ],
      images: [isss1, isss2, isss3, isss4, isss5, isss6, isss7, isss8, isss9],
    },
    {
      slug: 'karmatick',
      name: t('karmatick'),
      description: t('karmatickDescription'),
      logo: karmatickPic,
      technologies: [
        'reactsjs',
        'nextjs',
        'typescript',
        'axios',
        'tailwindcss',
        'leaflet',
        'swiper',
        'driver.js',
      ],
      images: [
        karma1,
        karma2,
        karma3,
        karma4,
        karma5,
        karma6,
        karma7,
        karma8,
        karma9,
        karma10,
        karma11,
        karma12,
        karma13,
      ],
    },
  ];
};
