import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globalLocations } from '../client/src/data/global-locations';
import { regionalTrends } from '../client/src/data/regional-trends';

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

    // Add Dynamic City Locations (/location/:slug)
    // This covers both International Cities (New York/London) and Indian Cities (Mumbai/Kolkata)
    globalLocations.forEach(location => {
        if (location.slug) {
            routes.push(`/location/${location.slug}`);
        }
    });

    // Add Dynamic Global Regions (/services/global/:region)
    // This covers specific region/country pages like 'us-ca', 'uk', 'de', 'in'
    Object.keys(regionalTrends).forEach(regionKey => {
        routes.push(`/services/global/${regionKey}`);
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map(route => {
                // Calculate priority
                let priority = '0.8';
                let changefreq = 'weekly';

                if (route === '/') {
                    priority = '1.0';
                } else if (route.startsWith('/services/')) {
                    priority = '0.9';
                } else if (route.startsWith('/location/')) {
                    priority = '0.85'; // High priority for local landing pages
                } else if (route.startsWith('/insights')) {
                    priority = '0.7';
                }

                return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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
