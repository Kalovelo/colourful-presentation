import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import { OnlineContext, OnlineContextProvider } from "../context/NetworkContext";
import Background from "./background";
import BarHeader from "./barHeader";
import "./header.scss";
import { IEvent, IGraphqlHeaderSchema } from "./interface";
import ModalHeader from "./modalHeader";
import WifiOffIcon from "@material-ui/icons/WifiOff";

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
    <OnlineContextProvider>
      <header className="header">
        <div className="header__wrapper">
          <BarHeader data={endpoints} />
          <ModalHeader data={endpoints} />
          <span className="header__networkStatus">
            {typeof navigator === "object" && navigator.onLine && <WifiOffIcon />}
          </span>
        </div>
        <span className="header__background">
          <Background />
        </span>
      </header>
    </OnlineContextProvider>
  );
};

export default Header;
