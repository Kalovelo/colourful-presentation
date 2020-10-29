import { graphql } from "gatsby";
import React from "react";
import Archive from "../components/archive/archive";
import Banner from "../components/banner/banner";
import Layout from "../components/layout/layout";

const workshopImage = require("./index/images/workshop.png");

const banner3Props = {
  type: "line",
  icon: <img src={workshopImage} />,
  title: "Workshops",
  text: "We're talking about tools. We also exchange swag!",
};

export default ({ data }: any) => {
  return (
    <Layout>
      <Archive theme="workshop" events={data.api.events} />
    </Layout>
  );
};

export const query = graphql`
  query {
    api {
      events(eventType: "WORKSHOP") {
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
