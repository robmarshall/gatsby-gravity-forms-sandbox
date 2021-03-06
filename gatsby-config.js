let activeEnv = process.env.ACTIVE_ENV || "development"

require("dotenv").config({
  //path: `.env.${process.env.NODE_ENV}`,
  path: `.env.development`,
})

console.log(`Using environment config: '${activeEnv}'`)

// Set up basic auth string
const basicAuthString =
  "Basic " +
  Buffer.from(
    process.env.BASIC_AUTH_USER + ":" + process.env.BASIC_AUTH_PASS
  ).toString("base64")

// If we are in dev, ignore the fact that we are using a fake SSL certificate
if (activeEnv == "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
}

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: "gatsby-source-gravityforms",
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: `${process.env.PROTOCOL}://${process.env.BASE_URL}`,
        // Gravity Forms API
        api: {
          key: process.env.GATSBY_GF_CONSUMER_KEY,
          secret: process.env.GATSBY_GF_CONSUMER_SECRET,
        },
        // Basic Auth
        basicAuth: {
          username: process.env.BASIC_AUTH_USER,
          password: process.env.BASIC_AUTH_PASS,
        },
      },
    },
    // Setup WPGraphQL.com to be the source
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: `WPGraphQL`,
    //     // This is field under which it's accessible
    //     fieldName: `wpgraphql`,
    //     // Url to query from
    //     url: `${process.env.PROTOCOL}://${process.env.BASE_URL}/graphql`,
    //     headers: {
    //       Authorization: basicAuthString,
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-source-randomcat",
    //   options: {
    //     api: "a5d3ce41-1f54-4145-b630-6ce2c2afc736",
    //     limit: "1000",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
