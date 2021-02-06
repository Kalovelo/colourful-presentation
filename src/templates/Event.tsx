import { graphql } from "gatsby";
import React from "react";
import Event from "../components/event/event";
import Layout from "../components/layout/layout";

interface IEventTemplateProps {
  pageContext: {
    event: IEventProps;
  };
}
export default ({ pageContext: { event } }: IEventTemplateProps) => {
  // const [props, linkBundles] = [...data.api, data.api.links, data.api.code_snippets];
  return (
    <Layout>
      <Event {...event} />
    </Layout>
  );
};
