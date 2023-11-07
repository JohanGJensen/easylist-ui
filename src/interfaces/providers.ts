import { RegistrationRequest } from 'api/endpoints';
import { ISpace } from '.';
import { ILanguage } from './language';

export type LanguageTypes = 'en_US' | 'da_DK' | 'es_ES';

export interface ISpaceState {
  data: ISpace[];
}

export interface ISettingsState {
  checkboxPos: 'left' | 'right';
  handleCheckboxPos(value: 'left' | 'right'): void;
  langCode: LanguageTypes;
  lang: ILanguage;
  handleLanguage(value: LanguageTypes): void;
}

export type User = {
  jwt: string;
};
export interface IUserState {
  user: User;
  login: (request: RegistrationRequest) => void;
  register: (request: RegistrationRequest) => void;
}
