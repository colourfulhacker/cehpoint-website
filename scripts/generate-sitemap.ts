
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globalLocations } from '../client/src/data/global-locations';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://cehpoint.co.in';

const staticRoutes = [
    '/',
    '/services',
    '/services/ecommerce',
    '/services/edutech',
    '/services/fintech',
    '/services/cyber-security',
    '/services/business-app-catalog',
    '/services/cyber-crime-investigation',
    '/services/cyber-crime-investigation/process',
    '/services/cyber-crime-investigation/methodology',
    '/services/cyber-crime-investigation/clients',
    '/services/cyber-crime-investigation/pricing',
    '/services/cyber-crime-investigation/request',
    '/services/cyber-crime-investigation/legal',
    '/ai-solutions',
    '/training',
    '/privacy',
    '/terms',
    '/security-scheme',
    '/demo-delivery',
    '/quotation',
    '/cost-estimator',
    '/incubation',
    '/careers',
    '/interns',
    '/investor-connect',
    '/leadership-search',
    '/company-profile',
    '/insights',
    '/insights/ethical-standards',
    '/insights/ai-vs-reality',
    '/insights/hidden-costs',
    '/insights/rural-goldmine',
    '/insights/escape-9-5',
    '/insights/15k-revolution',
    '/insights/ransomware-paradox',
    '/insights/hyperlocal-future',
    '/insights/cto-trap',
    '/insights/hr-forensics',
    '/insights/digital-forensics-roi',
    '/insights/cyber-security-myths',
    '/insights/gig-economy-upgrade',
    '/insights/edtech-evolution',
    '/insights/fashion-tech-revolution',
    '/partner-network'
];

function generateSitemap() {
    const routes = [...staticRoutes];

    // Add dynamic routes
    globalLocations.forEach(location => {
        if (location.slug) {
            routes.push(`/services/global/${location.slug}`);
            routes.push(`/location/${location.slug}`);
        }
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map(route => {
                return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../client/public');

    if (!fs.existsSync(publicDir)) {
        console.log('Creating public directory...');
        fs.mkdirSync(publicDir, { recursive: true });
    }

    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`Sitemap generated with ${routes.length} URLs at ${sitemapPath}`);
}

generateSitemap();
