import { ISpace, ISpaceItem } from ".";

export interface ISpaceState {
  data: ISpace[];
  loading: boolean;
  handleDeleteItem(space: ISpace, item: ISpaceItem): void;
  handleDeleteSpace(spaceId: string): void;
  handleAddItem(spaceId: string, item: ISpaceItem): void;
  handleAddSpace(space: ISpace): void;
  handleUpdateItem(spaceId: string, item: ISpaceItem): void;
}

export interface ISettingsState {
  checkboxPos: 'left' | 'right';
  handleCheckboxPos(value: 'left' | 'right'): void;
}