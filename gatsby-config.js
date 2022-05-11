module.exports = {
  siteMetadata: {
    title: `Xtreme Workplace`,
    description: `Xtreme Workplace is a Digital marketing company. we are empowering MSME & startup business Owners to grow their business online through our web solutions.`,
    author: `@Anujsharma`,
    siteUrl: `https://xtremeworkplace.in/`,
    keywords: `ecommerce, ecommerce store, estore,e-commerce web design companies,
    e-commerce web design companies,
ecommerce web design agency delhi,
ecommerce web design agency amazon,
ecommerce web design agency amazon india,
ecommerce web design agency app,
ecommerce web design agency india,
ecommerce web design agency fees,
ecommerce web design agency glassdoor,
ecommerce web design agency google,
ecommerce web design agency near me,
ecommerce web design agency noida,
ecommerce web design agency of india,
ecommerce web design agency online,
ecommerce website designer near me,
ecommerce website design price in india,
ecommerce website development noida,
ecommerce website development usa,
wordpress ecommerce web designer near me,
ecommerce website developer in delhi,
ecommerce website developer in india, 
ecommerce website developer near me,
ecommerce website developer  `,
    image: `src/images/xwmain3.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xtreme Workplace`,
        short_name: `XW Team`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
      
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "62762d1f7b967b11798e3200",
        tawkKey: "1g2eq0h4i",
        
      },
    },
  
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/*`],
        runtimeCaching: [
          // previous definitions from the default config
          
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'cacheFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxAgeSeconds: 60 * 60,
                maxEntries: 30
              }
            }
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-226963239-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },

  ],
}
