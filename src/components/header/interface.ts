export interface topic {
  name: string;
  url: string;
}

export interface ISubmenuProps {
  main: string;
  subitems: Array<topic>;
}
