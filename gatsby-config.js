/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    firstname: `Vincent`,
    lastname: `Dutordoir`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Saira Extra Condensed`,
            variants: [`500`, `700`],
          },
          {
            family: `Muli`,
            variants: [`400`, `400i`, `800`, `800i`],
          },
        ],
      },
    },
  ],
}
