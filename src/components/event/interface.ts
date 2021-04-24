interface ILinkBundle {
  title: string;
  links: [
    {
      title: string;
      url: string;
    }
  ];
}

interface ICheatsheet {
  title: string;
  chapter: [
    {
      title: string;
      field: [
        {
          command: string;
          explanation: string;
        }
      ];
    }
  ];
}

interface IEventProps {
  poster: {
    url: string;
  };
  type: string;
  summary: string;
  title: string;
  date: string;
  place: string;
  facebook_event: string | null | undefined;
  description: string;
  linkBundles: Array<ILinkBundle> | null | undefined;
  codeSnippets: [ISnippet];
  cheatsheet: ICheatsheet | null | undefined;
  gallery: [
    {
      image: {
        url: string;
        alternativeText: string;
      };
    }
  ];
}
