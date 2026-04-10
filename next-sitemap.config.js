/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://wholesalify.com",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapBaseFileName: "sitemap",
  exclude: ["/api/*"],
};
