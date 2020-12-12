export interface topic {
  name: string;
  url: string;
}

export interface submenuProps {
  main: string;
  subitems: Array<topic>;
}
