
import fs from 'fs';
import path from 'path';

// Manual list of cities to avoid TS import issues in simple script
const cities = [
    // Global Offices
    "new-york", "london", "munich", "sydney", "calgary", "dubai",
    // India
    "kolkata", "bolpur", "mumbai", "delhi", "bangalore", "hyderabad", "pune", "durgapur", "siliguri", "chennai"
];

const regions = ["us-ca", "uk", "de", "au", "ae", "in"];

const staticRoutes = [
    "",
    "/services",
    "/ai-solutions",
    "/training",
    "/careers",
    "/quotation",
    "/demo-delivery",
    "/company-profile",
    "/investor-connect",
    "/services/cyber-security",
    "/services/ecommerce",
    "/services/edutech",
    "/services/fintech",
    "/services/business-app-catalog"
];

const baseUrl = "https://www.cehpoint.co.in";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes.map(route => `
    <url>
        <loc>${baseUrl}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>${route === "" ? "1.0" : "0.8"}</priority>
    </url>
    `).join('')}
    
    ${regions.map(region => `
    <url>
        <loc>${baseUrl}/services/global/${region}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    `).join('')}

    ${cities.map(city => `
    <url>
        <loc>${baseUrl}/location/${city}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    `).join('')}
</urlset>`;


const targetPath = fs.existsSync(path.resolve('client', 'public')) 
    ? path.resolve('client', 'public', 'sitemap.xml') 
    : path.resolve('public', 'sitemap.xml');

fs.writeFileSync(targetPath, sitemap);
console.log(`Sitemap generated successfully at ${targetPath}`);
