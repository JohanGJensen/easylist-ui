export * from './providers';
export * from './language';

export interface ISpaceItem {
  id: string;
  complete: boolean;
  name: string;
}

export interface ISpaceItemRequest {
  id?: string;
  name: string;
  complete: boolean;
}

export interface ISpace {
  id: string;
  name: string;
  user: string;
  items: ISpaceItem[];
}