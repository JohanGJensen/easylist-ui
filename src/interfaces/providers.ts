import { ISpace, ISpaceItem } from ".";
import { ILanguage } from "./language";

export type LanguageTypes = 'en_US' | 'da_DK' | 'es_ES';

export interface ISettingsState {
  checkboxPos: 'left' | 'right';
  handleCheckboxPos(value: 'left' | 'right'): void;
  langCode: LanguageTypes;
  lang: ILanguage;
  handleLanguage(value: LanguageTypes): void;
}