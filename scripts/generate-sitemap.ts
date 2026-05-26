import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


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
    '/insights/healthcare-ai-triage',
    '/insights/logistics-route-automation',
    '/insights/retail-inventory-ai',
    '/insights/legal-contract-automation',
    '/insights/finance-fraud-ml',
    '/insights/manufacturing-rpa',
    '/insights/real-estate-ai-valuation',
    '/insights/edtech-automated-enrollment',
    '/insights/agriculture-iot-automation',
    '/insights/construction-compliance-ai',
    '/insights/hospitality-ai-concierge',
    '/partner-network'
];

const routes = [...staticRoutes];

// Add Dynamic City Locations (Hardcoded for stability)
const citySlugs = [
    'new-york', 'london', 'munich', 'sydney', 'calgary', 'dubai',
    'kolkata', 'bolpur', 'mumbai', 'delhi', 'bangalore', 'hyderabad',
    'chennai', 'pune', 'ahmedabad', 'jaipur', 'indore', 'kochi',
    'chandigarh', 'lucknow', 'bhubaneswar', 'coimbatore', 'visakhapatnam', 'nagpur'
];
citySlugs.forEach(slug => routes.push(`/location/${slug}`));

// Add Dynamic Global Regions
const regions = ['us-ca', 'uk', 'de', 'au', 'ae', 'in'];
regions.forEach(region => routes.push(`/services/global/${region}`));

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
console.log(`Sitemap generated with ${routes.length} URLs at ${sitemapPath}`);
