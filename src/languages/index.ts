import { LanguageTypes } from '../interfaces';
import { danishLanguage } from './danishLanguage';
import { englishLanguage } from './englishLanguage';

export * from './englishLanguage';
export * from './danishLanguage';

export const getLanguage = (lang: LanguageTypes) => {
  switch (lang) {
    case 'en_US':
      return englishLanguage;
    case 'da_DK':
      return danishLanguage;
    default:
      return englishLanguage;
  }
};
