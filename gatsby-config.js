const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Colourful Presentation`,
    description: `Workshop and talks showcase`,
    author: `@kalovelo`,
    url: process.env.GATSBY_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "${__dirname}/src/styles/global/global";`,
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "api",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "api",
        // Url to query from
        url: process.env.GATSBY_API_URL + "/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "colourful-presentation",
        start_url: "/",
        background_color: "#fff",
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        showLineNumbers: true,
        noInlineHighlight: false,
        languageExtensions: [
          {
            language: "superscript",
            extend: "javascript",
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stella's Events`,
        short_name: `Stella's Events`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#735394`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/contact/`, `/about/`],
      },
    },
  ],
};
