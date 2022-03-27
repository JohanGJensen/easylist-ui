import { ISpace } from ".";

export interface IState {
  data: ISpace[];
  loading: boolean;
  handleDeleteItem: (space: ISpace, item: any) => void;
  handleDeleteSpace: (spaceId: string) => void;
  handleAddItem: (id: string, item: any) => void;
  handleAddSpace: (space: ISpace) => void;
  handleUpdateItem: (id: string, item: any) => void;
}