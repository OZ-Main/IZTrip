import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { buildExtraTripCatalogEn } from '@/features/trips/data/mockTripsExtra'
import { AppLanguage } from '@/shared/domain'
import { readStoredAppLanguage } from '@/shared/helpers/storedLanguage.helpers'

import en from './locales/en.json'
import ro from './locales/ro.json'
import ru from './locales/ru.json'

const englishCatalog = {
  ...en.trips.catalog,
  ...buildExtraTripCatalogEn(),
}

const englishResources = {
  ...en,
  trips: {
    ...en.trips,
    catalog: englishCatalog,
  },
}

void i18n.use(initReactI18next).init({
  resources: {
    [AppLanguage.English]: { translation: englishResources },
    [AppLanguage.Romanian]: { translation: ro },
    [AppLanguage.Russian]: { translation: ru },
  },
  lng: readStoredAppLanguage(),
  fallbackLng: AppLanguage.English,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

export default i18n
