import * as React from 'react'
import Context from './context'
import useMount from '@/hooks/useMount.effect'
import AsyncStorage from '@react-native-community/async-storage'
import getServerTranslations from './Service'
import { Api } from '@/services'
import { DEFAULT_LANGUAGE } from '@/config'

const Translation = ({ children }) => {
  const [translations, setTranslations] = React.useState({})
  const [language, setLanguage] = React.useState(DEFAULT_LANGUAGE)

  const getTranslations = async (serverTranslations, onStart, localLang) => {
    const storageTranslations = await AsyncStorage.getItem('translations')

    const changeTranslations = async () => {
      const trans = {
        translations: serverTranslations,
        language: localLang,
      }
      Api.setLanguage(localLang)
      await AsyncStorage.setItem('translations', JSON.stringify(trans))
      await getTranslations(serverTranslations)
    }
    if (storageTranslations) {
      const { translations: t } = JSON.parse(storageTranslations)
      if (
        JSON.stringify(t) !== JSON.stringify(serverTranslations) &&
        !onStart
      ) {
        await changeTranslations(serverTranslations)
      } else {
        setTranslations(t)
      }
    } else {
      await changeTranslations()
    }
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    getServerTranslations(lang).then((serverTranslations) =>
      getTranslations(serverTranslations, false, lang),
    )
  }

  const setStorageLanguage = async () => {
    const storageTranslations = await AsyncStorage.getItem('translations')
    if (storageTranslations) {
      const { language: lang = DEFAULT_LANGUAGE } = JSON.parse(
        storageTranslations,
      )

      setLanguage(lang)
      return lang
    }
    return DEFAULT_LANGUAGE
  }

  useMount(() => {
    setStorageLanguage().then((lang) => {
      Api.setLanguage(lang)
      getTranslations({}, true, lang).then(() => {
        // console.warn('Local translations is get')
      })
      getServerTranslations(lang).then((serverTranslations) => {
        getTranslations(serverTranslations, false, lang).then(() => {
          // console.warn('Server translations is get')
        })
      })
    })
  })

  return (
    <Context value={{ translations, language, changeLanguage }}>
      {children}
    </Context>
  )
}

export default Translation
