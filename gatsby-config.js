module.exports = {
  siteMetadata: {
    title: "Wisdom Community of Pasifika Teachers",
    author: {
      name: `Hyun Kim`,
      summary: `Educational Software Developer at Fiji National University.`,
    },
    description: `Community for the teachers in the wider Pacific region`,
    siteUrl: `https://www.pasifikateachers.org`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-2BTCP0N327"],
        head: true,
        send_page_view: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      // Plugin to source images into the Gatsby application from the local filesystem.
      // This means that the images can be transformed by "transformer" plugins and quried
      // through Gatsby graphql.
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      // Plugin to transform images that are sourced into the Gatsby application.
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      // Plugin to source content into the Gatsby application from the local filesystem.
      // This means that the contents can be transformed by "transformer" plugins (such as the
      // 'gatsby-transformer-remark' plugin) and quried through Gatsby graphql.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./content`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      // Plugin to parse markdown files that is sourced into the Gatsby application.
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-plugin-postcss`,
  ],
};
