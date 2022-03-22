import { ISpace } from ".";

export interface IState {
  data: ISpace[];
  handleData: (d: any) => void;
  loading: boolean;
}