import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const NotFoundPage = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const { api, site } = useStaticQuery(graphql`
    query {
      api {
        termsOfUse {
          text
          title
          seo_summary
        }
      }
    }
  `);

  console.log(api);
  return (
    <Layout>
      <SEO
        description={api.termsOfUse.seo_summary}
        title={api.termsOfUse.title}
        url={url}
      />
      <h1>{api.termsOfUse.title}</h1>
      <ReactMarkdown source={api.termsOfUse.text}></ReactMarkdown>
    </Layout>
  );
};

export default NotFoundPage;
