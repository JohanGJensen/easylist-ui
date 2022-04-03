import { ISpace, ISpaceItem } from ".";
import { ILanguage } from "./language";

export interface ISpaceState {
  data: ISpace[];
  loading: boolean;
  handleDeleteItem(space: ISpace, item: ISpaceItem): void;
  handleDeleteSpace(spaceId: string): void;
  handleAddItem(spaceId: string, item: ISpaceItem): void;
  handleAddSpace(space: ISpace): void;
  handleUpdateItem(spaceId: string, item: ISpaceItem): void;
}

export type LanguageTypes = 'en_US' | 'da_DK' | 'es_ES';

export interface ISettingsState {
  checkboxPos: 'left' | 'right';
  handleCheckboxPos(value: 'left' | 'right'): void;
  langCode: LanguageTypes;
  lang: ILanguage;
  handleLanguage(value: LanguageTypes): void;
}