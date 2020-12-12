export interface event {
  eventType: string;
  poster: string;
  date: string;
  name: string;
  summary: string;
  place: string;
}

export interface archiveProps {
  theme: string;
  events: Array<event>;
}
