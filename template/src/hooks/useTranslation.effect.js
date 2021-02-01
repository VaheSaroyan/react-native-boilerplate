import * as React from 'react'
import { Translation } from '@/translations/context'

const useTranslation = () => {
  const { translations, language, changeLanguage } = React.useContext(
    Translation,
  )

  const __ = (key, variables) => {
    let elem = null
    const firstKey = key?.split('.')[0]

    if (translations.hasOwnProperty(firstKey)) {
      const findByKey = () => {
        key?.split('.')?.forEach((item) => {
          if (!elem) {
            elem = translations[item]
          } else {
            elem = elem[item]
          }
        })
        return elem
      }

      if (variables) {
        let translatedKey = findByKey()
        Object.entries(variables).forEach((item) => {
          translatedKey = translatedKey.replace(`{{${item[0]}}}`, item[1] || '')
        })
        return translatedKey
      }

      const translation = findByKey()

      if (elem) {
        return translation
      }

      return snakeCase(key.replace(/\./g, '_')).replace(/_/g, ' ')
    }

    return key
  }

  const setLanguage = (lang) => {
    changeLanguage(lang)
  }

  return {
    __,
    language,
    setLanguage,
  }
}

const snakeCase = (string) => {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_')
}

export default useTranslation
