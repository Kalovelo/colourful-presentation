import { StaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/Date";
import Card from "../card/card";
import Hero from "../hero/hero";
import "./archive.scss";

interface event {
  eventType: string;
  poster: string;
  date: string;
  name: string;
  summary: string;
  place: string;
}

interface archiveProps {
  theme: string;
  events: [event];
}

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

  const generateHero = (event: event) => (
    <Hero
      cta="lalala"
      description={event.summary}
      headTitle={event.name}
      element={generateCard(event)}
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
          </div>
          {futureEvents.map((event) => generateHero(event))}
        </>
      )}
      {pastEvents.length > 0 && (
        <>
          <div className="archive__filter">
            <h2 className={`archive__filter-text archive__filter-text--${theme}`}>
              Past Events
            </h2>
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
