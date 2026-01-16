module.exports = {
  siteMetadata: {
    title: `Ifechukwu Edet - Frontend Developer`,
    description: `Frontend Developer portfolio`,
    author: `@ifechiglory`,
    siteUrl: `https://v4portfolio.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
