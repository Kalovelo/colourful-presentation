export interface IMenuProps {
  main: string;
  subitems: Array<ITopic>;
}

export interface IBarSubMenuProps extends IMenuProps {
  popperId: string;
}

export interface ITopic {
  url: string;
  name: string;
}
