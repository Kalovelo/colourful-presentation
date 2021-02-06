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

export interface IEvent {
  type: {
    title: string;
    slug: string;
  };
  topic: {
    title: string;
    slug: string;
  };
}
export interface IGraphqlHeaderSchema {
  api: {
    events: [IEvent];
  };
}
