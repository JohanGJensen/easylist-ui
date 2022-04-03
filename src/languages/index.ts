import { LanguageTypes } from '../interfaces';
import { danishLanguage } from './danishLanguage';
import { englishLanguage } from './englishLanguage';
import { spanishLanguage } from './spanishLanguage';

export * from './englishLanguage';
export * from './danishLanguage';
export * from './spanishLanguage';

export const getLanguage = (lang: LanguageTypes) => {
  switch (lang) {
    case 'en_US':
      return englishLanguage;
    case 'da_DK':
      return danishLanguage;
    case 'es_ES':
      return spanishLanguage;
    default:
      return englishLanguage;
  }
};
