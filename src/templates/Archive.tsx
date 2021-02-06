import { graphql } from "gatsby";
import React from "react";
import Archive from "../components/archive/archive";
import Layout from "../components/layout/layout";

export default ({ data, pageContext }: any) => {
  return (
    <Layout>
      <Archive theme={pageContext.type} events={data.api.events} />
    </Layout>
  );
};
export const query = graphql`
  query TypeQuery($events: [ID!]) {
    api {
      events(where: { id_in: $events }) {
        type {
          title
        }
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
