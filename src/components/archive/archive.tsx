import React, { useEffect, useState } from "react";
import Card from "../card/card";
import "./archive.scss";
import { IEvent, IArchiveProps } from "./interface";

const Archive: React.FC<IArchiveProps> = ({ events, theme, location }) => {
  const [pastEvents, setPastEvents] = useState<IEvent[]>([]);
  const [futureEvents, setFutureEvents] = useState<IEvent[]>([]);

  const filterEvents = () => {
    const pastEvents: IEvent[] = [];
    const futureEvents: IEvent[] = [];
    events.forEach((event) => {
      new Date(event.date).getTime() > new Date().getTime()
        ? futureEvents.push(event)
        : pastEvents.push(event);
    });

    return { pastEvents, futureEvents };
  };

  useEffect(() => {
    const events = filterEvents();
    setPastEvents(events.pastEvents);
    setFutureEvents(events.futureEvents);
  }, []);

  const generateCard = (event: IEvent, index: number, location: string) => (
    <Card
      key={index}
      eventType={event.type.title}
      image={event.poster.url}
      name={event.title}
      date={event.date}
      place={event.place}
      link={`/${event.type.slug}/${event.topic.slug}/${event.slug}/`}
    />
  );

  return (
    <section className="archive">
      {futureEvents.length > 0 && (
        <>
          <div className="archive__filter">
            <h2 className={`archive__filter-text archive__filter-text--${theme}`}>
              Upcoming
            </h2>
            <h3 className="archive__filter-description">
              Προλαβαίνεις να ενημερώσεις το πρόγραμμα σου!
            </h3>
          </div>
          <div className="archive__grid">
            {futureEvents.map((event, index) =>
              generateCard(event, index, location)
            )}
          </div>
        </>
      )}
      {pastEvents.length > 0 && (
        <>
          <div className="archive__filter">
            <h2 className={`archive__filter-text archive__filter-text--${theme}`}>
              Past Events
            </h2>
            <h3 className="archive__filter-description">
              Βρες βοηθητικό υλικό από προηγούμενα event, καθώς και φωτογραφίες.
            </h3>
          </div>
          <div className="archive__grid">
            {pastEvents.map((event, index) => generateCard(event, index, location))}
          </div>
        </>
      )}
    </section>
  );
};

export default Archive;
