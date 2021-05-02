import globby from 'globby';
import fs from 'fs';

async function generateSiteMap() {
  const pages = await globby(['.next/server/pages/**/*.html', '.next/serverless/pages/**/*.html']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">   
      ${pages
        .map((page) => {
          const path = page.replace('/index', '').replace('.next/serverless/pages', '').replace('.next/server/pages', '').replace('.html', '');
          return `
      <url>
        <loc>${`https://froom.co.jp${path}`}</loc>
      </url>
              `;
        })
        .join('')}
  </urlset>
  `;

  const robots = `User-Agent:*\nSitemap:https://froom.co.jp/sitemap.xml`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  fs.writeFileSync('public/robots.txt', robots);
}

generateSiteMap();
