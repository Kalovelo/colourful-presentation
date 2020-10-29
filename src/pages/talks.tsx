import { graphql } from "gatsby";
import React from "react";
import Archive from "../components/archive/archive";
import Layout from "../components/layout/layout";

export default ({ data }: any) => {
  return (
    <Layout>
      <Archive theme="talk" events={data.api.events} />
    </Layout>
  );
};

export const query = graphql`
  query {
    api {
      events(eventType: "TALK") {
        eventType
        poster
        summary
        name
        date
        place
      }
    }
  }
`;
