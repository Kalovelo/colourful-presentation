export interface topic {
  name: string;
  url: string;
}

export interface IMenuProps {
  main: string;
  subitems: Array<topic>;
}

export interface ITopic {
  url: string;
  name: string;
}
