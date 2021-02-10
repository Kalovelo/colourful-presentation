import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout/layout";

// import SEO from "../components/seo/seo";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      api {
        notFound404 {
          headtitle
          description
        }
      }
    }
  `);
  console.log(data);
  return (
    <Layout>
      <h1>{data.api.notFound404.headtitle}</h1>
      <h2>
        <ReactMarkdown source={data.api.notFound404.description}></ReactMarkdown>
      </h2>
    </Layout>
  );
};

export default NotFoundPage;
