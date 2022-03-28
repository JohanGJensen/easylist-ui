import { ISpace } from ".";

export interface IState {
  data: ISpace[];
  loading: boolean;
  handleDeleteItem(): void;
  handleDeleteSpace(): void;
  handleAddItem(): void;
  handleAddSpace(): void;
  handleUpdateItem(): void;
}