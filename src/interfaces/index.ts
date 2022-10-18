export * from './providers';
export * from './language';

export interface ISpaceItem {
  id: string;
  complete: string;
  name: string;
}

export interface ISpace {
  id: string;
  name: string;
  user: string;
  items: ISpaceItem[];
}