/**
 * i18n utility functions
 */

import type { Language } from './languages'
import { DEFAULT_LANGUAGE, LANGUAGE_CONFIG } from './languages'

/**
 * Generate route path for a specific language
 */
export function getLanguageRoute(lang: Language, basePath: string = '/me'): string {
  if (lang === DEFAULT_LANGUAGE) {
    return basePath
  }
  return `${basePath}/${lang}`
}

/**
 * Get all language routes for alternate links
 */
export function getAllLanguageRoutes(basePath: string = '/me') {
  return Object.keys(LANGUAGE_CONFIG).map((lang) => ({
    lang: lang as Language,
    href: getLanguageRoute(lang as Language, basePath),
  }))
}

/**
 * Extract language from path
 */
export function getLanguageFromPath(path: string): Language {
  const segments = path.split('/').filter(Boolean)
  const potentialLang = segments[segments.length - 1]

  if (potentialLang in LANGUAGE_CONFIG) {
    return potentialLang as Language
  }

  return DEFAULT_LANGUAGE
}
