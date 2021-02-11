import { graphql } from "gatsby";
import React from "react";
import Event from "../components/event/event";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

interface IEventTemplateProps {
  location: any;
  pageContext: {
    event: IEventProps;
  };
}
export default (props: IEventTemplateProps) => {
  const event = props.pageContext.event;
  return (
    <Layout>
      <SEO
        url={props.location.href}
        title={event.title}
        description={event.summary}
        image={event.poster.url}
      />
      <Event {...event} />
    </Layout>
  );
};
