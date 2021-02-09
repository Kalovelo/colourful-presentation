import { graphql } from "gatsby";
import React from "react";
import Archive from "../components/archive/archive";
import { IEvent } from "../components/archive/interface";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

export default (props: {
  location: { origin: string; href: string };
  pageContext: { type: string; topic: string | undefined; description: string };
  data: { api: { events: IEvent[] } };
}) => {
  const archive = props.pageContext;
  return (
    <Layout>
      <SEO
        title={archive.topic ? archive.topic : archive.type}
        description={archive.description}
        url={props.location.href}
      />
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
        summary
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
