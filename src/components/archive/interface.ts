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
  };
}

export interface IArchiveProps {
  theme: string;
  events: Array<IEvent>;
}
