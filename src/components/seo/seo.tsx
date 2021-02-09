/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

interface ISeoProps {
  description: string;
  title: string;
  url: string;
  image?: string;
}
function SEO({ description, title, url, image }: ISeoProps) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "gr",
      }}
      title={title}
      // titleTemplate={title ? `%s | ${title}` : null}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: image ? process.env.API_URL + image : undefined,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
      ]}
    />
  );
}

export default SEO;
