module.exports = {
  siteUrl: 'https://letscodeltd.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // optional if using SSR
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://letcodeltd.com/server-sitemap.xml', // for dynamic routes
    ],
  },
};