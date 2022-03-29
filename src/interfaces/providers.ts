import { ISpace, ISpaceItem } from ".";

export interface IState {
  data: ISpace[];
  loading: boolean;
  handleDeleteItem(space: ISpace, item: ISpaceItem): void;
  handleDeleteSpace(spaceId: string): void;
  handleAddItem(spaceId: string, item: ISpaceItem): void;
  handleAddSpace(space: ISpace): void;
  handleUpdateItem(spaceId: string, item: ISpaceItem): void;
}