export * from './providers';
export * from './language';

export interface ISpaceItem {
  _id: string;
  complete: string;
  name: string;
}

export interface ISpace {
  _id: string;
  name: string;
  user: string;
  items: ISpaceItem[];
}