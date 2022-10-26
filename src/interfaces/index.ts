export * from './providers';
export * from './language';

export interface ISpaceItem {
  id: string;
  complete: boolean;
  name: string;
}

export interface IItemRequest {
  id?: string;
  name: string;
  complete: boolean;
}

export interface ISpaceRequest {
  name: string;
  user: string;
}

export interface ISpace {
  id: string;
  name: string;
  user: string;
  items: ISpaceItem[];
}