import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Background from "./background";
import BarHeader from "./barHeader";
import "./header.scss";
import { IEvent, IGraphqlHeaderSchema } from "./interface";
import ModalHeader from "./modalHeader";

const Header: React.FC = () => {
  const data: IGraphqlHeaderSchema = useStaticQuery(graphql`
    query {
      api {
        events {
          type {
            title
            slug
          }
          topic {
            title
            slug
          }
        }
      }
    }
  `);

  const getUniqueEndpoints = (data: IGraphqlHeaderSchema) => {
    const fetchedTopics: Array<string> = [];
    const endpoints: any = {};
    data.api.events.forEach((event: IEvent) => {
      const eventType = event.type;
      const eventTopic = event.topic;
      if (!endpoints.hasOwnProperty(eventType.title)) {
        endpoints[eventType.title] = { slug: eventType.slug, topics: [] };
      }
      if (!fetchedTopics.includes(eventTopic.title)) {
        fetchedTopics.push(eventTopic.title);
        endpoints[eventType.title].topics.push(eventTopic);
      }
    });

    return endpoints;
  };

  const endpoints = getUniqueEndpoints(data);
  return (
    <header className="header">
      <div className="header__wrapper">
        <BarHeader data={endpoints} />
        <ModalHeader data={endpoints} />
      </div>
      <span className="header__background">
        <Background />
      </span>
    </header>
  );
};

export default Header;
