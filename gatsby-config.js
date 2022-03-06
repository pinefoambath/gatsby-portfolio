module.exports = {
  siteMetadata: {
    siteUrl: `https://your.url`,
    name: `Gatsby Portfolio Scaffold`,
    role: `Your role here`,
    bio: `Zurich based software developer.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-bio`,
        path: `${__dirname}/MD/bio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-blog-posts`,
        path: `${__dirname}/MD/blog-posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
  ],
};
