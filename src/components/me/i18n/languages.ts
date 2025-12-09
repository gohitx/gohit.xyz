/**
 * Language configuration and constants
 */

export const SUPPORTED_LANGUAGES = ['en', 'es', 'zh'] as const
export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export const DEFAULT_LANGUAGE: Language = 'en'

export interface LanguageConfig {
  code: Language
  label: string
  nativeName: string
  flag: string
  direction: 'ltr' | 'rtl'
}

export const LANGUAGE_CONFIG: Record<Language, LanguageConfig> = {
  en: {
    code: 'en',
    label: 'EN',
    nativeName: 'English',
    flag: '🇺🇸',
    direction: 'ltr',
  },
  es: {
    code: 'es',
    label: 'ES',
    nativeName: 'Español',
    flag: '🇪🇸',
    direction: 'ltr',
  },
  zh: {
    code: 'zh',
    label: 'ZH',
    nativeName: '中文',
    flag: '🇨🇳',
    direction: 'ltr',
  },
}

/**
 * Get language configuration by code
 */
export function getLanguageConfig(lang: Language): LanguageConfig {
  return LANGUAGE_CONFIG[lang]
}

/**
 * Check if a language code is supported
 */
export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language)
}
