/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rememberher.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  autoLastmod: true,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

