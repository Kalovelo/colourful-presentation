export interface IEvent {
  eventType: string;
  poster: {
    url: string;
  };
  slug: string;
  date: string;
  title: string;
  summary: string;
  place: string;
  type: {
    title: string;
    slug: string;
  };
  topic: {
    title: string;
    slug: string;
  };
}

export interface IArchiveProps {
  theme: string;
  events: Array<IEvent>;
  location: string;
}
