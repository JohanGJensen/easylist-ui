import { ISpace } from ".";

export interface IState {
  data: ISpace[];
  loading: boolean;
  handleData: (d: any) => void;
  handleDeleteItem: (space: ISpace, item: any) => void;
  handleDeleteSpace: (spaceId: string) => void;
  handleAddItem: (id: any, item: any) => void;
  handleAddSpace: (space: ISpace) => void;
}