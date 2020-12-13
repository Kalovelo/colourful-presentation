export interface IEvent {
  eventType: string;
  poster: string;
  date: string;
  name: string;
  summary: string;
  place: string;
}

export interface IArchiveProps {
  theme: string;
  events: Array<IEvent>;
}
