import { ISpace, ISpaceItem } from ".";
import { ILanguage } from "./language";

export type LanguageTypes = 'en_US' | 'da_DK' | 'es_ES';

export interface ISpaceState {
  data: ISpace[];
  handleSetAllSpaces: (spaces: ISpace[]) => void;
  handleAddSpace: (space: ISpace) => void;
  handleDeleteSpace: (spaceId: string) => void;
  handleAddItem: (spaceId: string, item: ISpaceItem) => void;
  handleDeleteItem: (space: ISpace, itemId: string ) => void;
  handleUpdateItem: (spaceId: string, item: ISpaceItem ) => void;
}

export interface ISettingsState {
  checkboxPos: 'left' | 'right';
  handleCheckboxPos(value: 'left' | 'right'): void;
  langCode: LanguageTypes;
  lang: ILanguage;
  handleLanguage(value: LanguageTypes): void;
}