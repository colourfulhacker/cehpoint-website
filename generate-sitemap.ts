
import fs from 'fs';
import path from 'path';
import { globalLocations } from './client/src/data/global-locations';

const BASE_URL = 'https://www.cehpoint.co.in';

const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/industries',
    '/case-studies',
    '/insights' // Blog listing
];

// Add specific important pages here if needed
const priorityPages = [
    ''
];

const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // 1. Static Pages
    staticPages.forEach(page => {
        const priority = page === '' ? '1.0' : '0.8';
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}${page}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += `  </url>\n`;
    });

    // 2. City Pages (Localized SEO)
    globalLocations.forEach(city => {
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}/location/${city.slug}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.9</priority>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    const outputPath = path.resolve(__dirname, 'client/public/sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`✅ Sitemap generated at ${outputPath}`);
};

generateSitemap();
