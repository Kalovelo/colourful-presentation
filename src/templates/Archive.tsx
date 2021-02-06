import { graphql } from "gatsby";
import React from "react";
import Archive from "../components/archive/archive";
import { IEvent } from "../components/archive/interface";
import Layout from "../components/layout/layout";

export default (props: {
  location: { origin: string };
  pageContext: { type: string };
  data: { api: { events: IEvent[] } };
}) => {
  return (
    <Layout>
      <Archive
        location={props.location.origin}
        theme={props.pageContext.type}
        events={props.data.api.events}
      />
    </Layout>
  );
};
export const query = graphql`
  query TypeQuery($events: [ID!]) {
    api {
      events(where: { id_in: $events }) {
        type {
          title
          slug
        }
        topic {
          title
          slug
        }
        slug
        date
        title
        place
        poster {
          url
        }
      }
    }
  }
`;
