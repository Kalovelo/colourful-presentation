export interface IMenuProps {
  main: string;
  subitems: Array<ITopic>;
}

export interface IBarSubMenuProps extends IMenuProps {
  popperId: string;
}

export interface ITopic {
  url: string;
  slug: string;
  title: string;
}

export interface IType {
  title: string;
  slug: string;
  topics: ITopic[];
}
