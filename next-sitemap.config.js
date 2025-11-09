/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kowlooncnslt.com', // 你的主域名
    generateRobotsTxt: true, // 會自動生成 robots.txt
    sitemapSize: 5000, // 每個 sitemap 最大 URL 數
    changefreq: 'daily', // 更新頻率
    priority: 0.7, // 頁面優先級
    exclude: ['/admin/*', '/wp-admin/*'], // 不需要抓取的頁面
  };

  