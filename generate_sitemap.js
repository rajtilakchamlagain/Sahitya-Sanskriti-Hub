import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const BASE_URL = "https://sahityasanskriti.online";

const pages = [
    "/",
    "/poems",
    "/stories",
    "/articles",
    "/research",
    "/about",
    "/contact",
    "/nepali-sahitya",
    "/nepali-kavita",
    "/nepali-kavita-arth",
    "/hi/nepali-sahitya",
    "/as/nepali-sahitya",
    "/en/nepali-literature",
    "/author/dr-tilak-sarmah"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
