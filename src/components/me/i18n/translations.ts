/**
 * Centralized translation strings for the me page
 */

import type { Language } from './languages'

export interface MePageTranslations {
  title: string
  web: string
  mobile: string
  intro1: string
  name: string
  intro2: string
  role: string
  intro3: string
  country: string
  intro4: string
  specialty: string
  intro5: string
  contrib1: string
  linkText: string
  // SEO
  metaTitle: string
  metaDescription: string
}

export const translations: Record<Language, MePageTranslations> = {
  en: {
    title: 'FrontEnd Developer',
    web: 'web',
    mobile: 'mobile',
    intro1: "Hey 👋, I'm ",
    name: 'Gohit',
    intro2: ', a ',
    role: 'Software Engineer',
    intro3: 'from',
    country: 'Peru 🇵🇪',
    intro4: '. I specialize in',
    specialty: 'mobile',
    intro5:
      "development and I'm a content creator focused on software (programming) and a bit of hardware.",
    contrib1:
      "I actively contribute to open-source projects across multiple communities — including Linux and several well-known organizations reflected in my activity. I'm also the creator and maintainer of multiple extensions for VSCode, Cursor, Windsurf, Trae.ai, Kiro, Firebase Studio, and Antigravity. ",
    linkText: 'Here',
    metaTitle: 'Gohit Bastian - FrontEnd Developer | Software Engineer',
    metaDescription:
      'Software Engineer from Peru specializing in mobile development. Open-source contributor and creator of VSCode extensions.',
  },
  es: {
    title: 'Desarrollador FrontEnd',
    web: 'web',
    mobile: 'móvil',
    intro1: 'Hola 👋, soy ',
    name: 'Gohit',
    intro2: ', un ',
    role: 'Ingeniero de Software',
    intro3: 'de',
    country: 'Perú 🇵🇪',
    intro4: '. Me especializo en desarrollo',
    specialty: 'móvil',
    intro5: 'y soy creador de contenido enfocado en software (programación) y un poco de hardware.',
    contrib1:
      'Contribuyo activamente a proyectos de código abierto en múltiples comunidades — incluyendo Linux y varias organizaciones conocidas reflejadas en mi actividad. También soy el creador y mantenedor de múltiples extensiones para VSCode, Cursor, Windsurf, Trae.ai, Kiro, Firebase Studio y Antigravity. ',
    linkText: 'Aquí',
    metaTitle: 'Gohit Bastian - Desarrollador FrontEnd | Ingeniero de Software',
    metaDescription:
      'Ingeniero de Software de Perú especializado en desarrollo móvil. Contribuidor open-source y creador de extensiones VSCode.',
  },
  zh: {
    title: '前端开发人员',
    web: 'Web',
    mobile: '移动端',
    intro1: '嗨 👋，我是 ',
    name: 'Gohit',
    intro2: '，来自 ',
    country: '秘鲁 🇵🇪',
    role: '的软件工程师',
    intro3: '。',
    intro4: '我专注于',
    specialty: '移动',
    intro5: '开发，同时也是一名专注于软件（编程）和少量硬件的内容创作者。',
    contrib1:
      '我积极参与多个社区的开源项目 —— 包括 Linux 和几个反映在我活动中的知名组织。我也是 VSCode, Cursor, Windsurf, Trae.ai, Kiro、Firebase Studio 和 Antigravity 的多个扩展的创建者和维护者。',
    linkText: '这里',
    metaTitle: 'Gohit Bastian - 前端开发人员 | 软件工程师',
    metaDescription: '来自秘鲁的软件工程师，专注于移动开发。开源贡献者和 VSCode 扩展创建者。',
  },
}

/**
 * Get translations for a specific language
 */
export function getTranslations(lang: Language): MePageTranslations {
  return translations[lang]
}
