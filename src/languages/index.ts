import { LanguageTypes } from '../interfaces';
import { englishLanguage } from './englishLanguage';

export * from './englishLanguage';

export const getLanguage = (lang: LanguageTypes) => {
  switch (lang) {
    case 'en_US':
      return englishLanguage;
    default:
      return englishLanguage;
  }
};
