import { en, ru } from '@/translations/resources'
import { DEFAULT_LANGUAGE } from '@/constants'

/**
 * server request example for get translations
 * @param lang
 * @returns {Promise<unknown>}
 */
export default async (lang = DEFAULT_LANGUAGE) => {
  //return Get('translations')
  return new Promise((resolve) => {
    setTimeout(() => {
      if (lang === DEFAULT_LANGUAGE) {
        resolve(en)
      } else {
        resolve(ru)
      }
    }, 1000)
  })
}
