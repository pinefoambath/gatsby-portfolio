module.exports = {
  siteMetadata: {
    siteUrl: `https://andrea.wiki`,
    name: `Andrea Kreideweiss`,
    role: `Full stack developer`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`
  ],
};
