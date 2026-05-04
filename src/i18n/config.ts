import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { buildExtraTripCatalog } from '@/features/trips/data/buildExtraTripCatalog'
import { AppLanguage } from '@/shared/domain'
import { readStoredAppLanguage } from '@/shared/helpers/storedLanguage.helpers'

import en from './locales/en.json'
import ro from './locales/ro.json'
import ru from './locales/ru.json'

const englishCatalog = {
  ...en.trips.catalog,
  ...buildExtraTripCatalog(AppLanguage.English),
}

const romanianCatalog = {
  ...ro.trips.catalog,
  ...buildExtraTripCatalog(AppLanguage.Romanian),
}

const russianCatalog = {
  ...ru.trips.catalog,
  ...buildExtraTripCatalog(AppLanguage.Russian),
}

const englishResources = {
  ...en,
  trips: {
    ...en.trips,
    catalog: englishCatalog,
  },
}

const romanianResources = {
  ...ro,
  trips: {
    ...ro.trips,
    catalog: romanianCatalog,
  },
}

const russianResources = {
  ...ru,
  trips: {
    ...ru.trips,
    catalog: russianCatalog,
  },
}

void i18n.use(initReactI18next).init({
  resources: {
    [AppLanguage.English]: { translation: englishResources },
    [AppLanguage.Romanian]: { translation: romanianResources },
    [AppLanguage.Russian]: { translation: russianResources },
  },
  lng: readStoredAppLanguage(),
  fallbackLng: AppLanguage.English,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

export default i18n
