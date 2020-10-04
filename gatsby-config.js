/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/personal-website-gatsby",
  siteMetadata: {
    firstname: 'Vincent',
    lastname: 'Dutordoir',
    twitter: 'https://twitter.com/vdutor',
    github: 'https://github.com/vdutor',
    linkedin: 'https://www.linkedin.com/in/vdutor',
    cvUrl: 'https://drive.google.com/file/d/1lvvkp9aIiiscIHlCTnemfaLSR7D4DZBO/view?usp=sharing'
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Saira Extra Condensed',
            variants: ['500', '700'],
          },
          {
            family: 'Muli',
            variants: ['400', '400i', '800', '800i'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    },
    'gatsby-transformer-bibtex',
  ],
}
