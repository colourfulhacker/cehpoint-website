
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.cehpoint.co.in';
const DATA_FILE = path.resolve(__dirname, 'client/src/data/global-locations.ts');

const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/industries',
    '/case-studies',
    '/insights'
];

const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    console.log("Reading locations from:", DATA_FILE);

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

    // 2. Extract Cities via Regex
    try {
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
            const slugRegex = /slug:\s*["']([^"']+)["']/g;
            let match;
            let count = 0;

            while ((match = slugRegex.exec(fileContent)) !== null) {
                const slug = match[1];
                if (slug && slug.trim().length > 0) {
                    xml += `  <url>\n`;
                    xml += `    <loc>${BASE_URL}/location/${slug}</loc>\n`;
                    xml += `    <lastmod>${today}</lastmod>\n`;
                    xml += `    <changefreq>weekly</changefreq>\n`;
                    xml += `    <priority>0.9</priority>\n`;
                    xml += `  </url>\n`;
                    count++;
                }
            }
            console.log(`✅ Found ${count} locations from data file.`);
        } else {
            console.warn("⚠️ Global Locations data file not found at expected path:", DATA_FILE);
        }
    } catch (err) {
        console.error("Error reading locations file:", err);
    }

    xml += `</urlset>`;

    // Ensure directory exists
    const publicDir = path.resolve(__dirname, 'client/public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    const outputPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`✅ Sitemap generated successfully at ${outputPath}`);
};

generateSitemap();
