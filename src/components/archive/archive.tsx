import React, { useEffect, useState } from "react";
import Card from "../card/card";
import "./archive.scss";
import { event, archiveProps } from "./interface";

const Archive: React.FC<archiveProps> = ({ events, theme }) => {
  const [pastEvents, setPastEvents] = useState<event[]>([]);
  const [futureEvents, setFutureEvents] = useState<event[]>([]);

  const filterEvents = () => {
    const pastEvents: event[] = [];
    const futureEvents: event[] = [];
    events.map((event) => {
      new Date(parseInt(event.date)).getTime() > new Date().getTime()
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

  const generateCard = (event: event) => (
    <Card
      eventType={event.eventType}
      image="https://events.stellarouzi.com/static/media/gsoc_2019_poster.ff524d89.png"
      name={event.name}
      date={event.date}
      place="Thessaloniki"
      link="https://events.stellarouzi.com/static/media/gsoc_2019_poster.ff524d89.png"
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
            {futureEvents.map((event) => generateCard(event))}
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
            {pastEvents.map((event, index) => generateCard(event))}
          </div>
        </>
      )}
    </section>
  );
};

export default Archive;
