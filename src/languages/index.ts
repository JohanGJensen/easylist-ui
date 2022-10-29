import { LanguageTypes } from '../interfaces';
import { danishLanguage } from './danishLanguage';
import { englishLanguage } from './englishLanguage';
import { spanishLanguage } from './spanishLanguage';

export * from './englishLanguage';
export * from './danishLanguage';
export * from './spanishLanguage';

export const getLanguage = (lang: LanguageTypes) => {
  if (lang === 'en_US') {
    return englishLanguage;
  }
  if (lang === 'es_ES') {
    return spanishLanguage;
  }
  if (lang === 'da_DK') {
    return danishLanguage;
  }

  return englishLanguage;
};
