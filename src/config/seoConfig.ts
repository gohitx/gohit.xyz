/**
 * SEO Configuration for gohit.xyz
 * Central configuration for all SEO-related data across the site
 */

import type { Language } from '@/components/me/i18n/languages'

export interface SiteConfig {
  name: string
  username: string
  url: string
  ogImage: string
  author: {
    name: string
    alternateName: string
    jobTitle: {
      en: string
      es: string
      zh: string
    }
    location: string
    image: string
  }
  social: {
    youtube: string
    github: string
    linkedin: string
    twitter: string
    instagram: string
    tiktok: string
  }
  organization: {
    name: string
    url: string
    logo: string
    sameAs: string[]
  }
}

export const siteConfig: SiteConfig = {
  name: 'Gohit X',
  username: '@gohitx',
  url: 'https://gohit.xyz',
  ogImage: '/favicon.ico', // TODO: Create proper og-image.png (1200x630px)

  author: {
    name: 'Gohit Bastian',
    alternateName: 'Gohit X',
    jobTitle: {
      en: 'Software Engineer & Content Creator',
      es: 'Ingeniero de Software y Creador de Contenido',
      zh: '软件工程师和内容创作者',
    },
    location: 'Lima, Peru',
    image: '/me.webp',
  },

  social: {
    youtube: 'https://www.youtube.com/@gohitx',
    github: 'https://github.com/gohitx',
    linkedin: 'https://www.linkedin.com/in/gohitx/',
    twitter: 'https://twitter.com/gohitx',
    instagram: 'https://www.instagram.com/gohitx',
    tiktok: 'https://www.tiktok.com/@gohitx',
  },

  organization: {
    name: 'Gohit X',
    url: 'https://gohit.xyz',
    logo: 'https://gohit.xyz/favicon.ico',
    sameAs: [
      'https://www.youtube.com/@gohitx',
      'https://github.com/gohitx',
      'https://www.linkedin.com/in/gohitx/',
      'https://twitter.com/gohitx',
      'https://www.instagram.com/gohitx',
      'https://www.tiktok.com/@gohitx',
    ],
  },
}

/**
 * Get default SEO title for a given language
 */
export function getDefaultTitle(lang: Language = 'en'): string {
  const titles = {
    en: 'Gohit X @gohitx | Software Engineer & Content Creator',
    es: 'Gohit X @gohitx | Ingeniero de Software y Creador de Contenido',
    zh: 'Gohit X @gohitx | 软件工程师和内容创作者',
  }
  return titles[lang]
}

/**
 * Get default SEO description for a given language
 */
export function getDefaultDescription(lang: Language = 'en'): string {
  const descriptions = {
    en: 'Software Engineer from Peru specializing in mobile development. Open-source contributor and creator of VSCode extensions for developers.',
    es: 'Ingeniero de Software de Perú especializado en desarrollo móvil. Contribuidor open-source y creador de extensiones VSCode para desarrolladores.',
    zh: '来自秘鲁的软件工程师，专注于移动开发。开源贡献者和 VSCode 扩展创建者。',
  }
  return descriptions[lang]
}

/**
 * Get keywords for SEO
 */
export function getKeywords(lang: Language = 'en'): string[] {
  const keywords = {
    en: [
      'Gohit X',
      'gohitx',
      'Software Engineer',
      'Frontend Developer',
      'Mobile Developer',
      'VSCode Extensions',
      'Open Source',
      'LynxJS',
      'Lynx Theme',
      'React Developer',
      'Content Creator',
      'Peru Developer',
    ],
    es: [
      'Gohit X',
      'gohitx',
      'Ingeniero de Software',
      'Desarrollador Frontend',
      'Desarrollador Móvil',
      'Extensiones VSCode',
      'Código Abierto',
      'LynxJS',
      'Lynx Theme',
      'Desarrollador React',
      'Creador de Contenido',
      'Desarrollador Perú',
    ],
    zh: [
      'Gohit X',
      'gohitx',
      '软件工程师',
      '前端开发',
      '移动开发',
      'VSCode 扩展',
      '开源',
      'LynxJS',
      'Lynx Theme',
      'React 开发者',
      '内容创作者',
      '秘鲁开发者',
    ],
  }
  return keywords[lang]
}
