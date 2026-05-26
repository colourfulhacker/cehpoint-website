const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.cehpoint.co.in';
const today = new Date().toISOString().split('T')[0];
const DATA_FILE = path.resolve(__dirname, 'client/src/data/global-locations.ts');

const staticPages = [
    { path: '/', priority: '1.0' },
    { path: '/services', priority: '0.9' },
    { path: '/ai-solutions', priority: '0.8' },
    { path: '/contact', priority: '0.8' },
    { path: '/insights', priority: '0.7' },
    { path: '/careers', priority: '0.6' },
    { path: '/quotation', priority: '0.7' },
    { path: '/demo-delivery', priority: '0.7' },
    { path: '/privacy', priority: '0.3' },
    { path: '/terms', priority: '0.3' },
    { path: '/training', priority: '0.6' },
    { path: '/partner-network', priority: '0.6' },
    { path: '/company-profile', priority: '0.6' },
    { path: '/incubation', priority: '0.5' },
    { path: '/investor-connect', priority: '0.5' },
    { path: '/leadership-search', priority: '0.5' },
    { path: '/tenders', priority: '0.6' },
    { path: '/cost-estimator', priority: '0.6' },
    { path: '/interns', priority: '0.5' },
];

const servicePages = [
    { path: '/services/ecommerce', priority: '0.8' },
    { path: '/services/edutech', priority: '0.8' },
    { path: '/services/fintech', priority: '0.8' },
    { path: '/services/cyber-security', priority: '0.8' },
    { path: '/services/rural-digitalization', priority: '0.8' },
    { path: '/services/game-development', priority: '0.8' },
    { path: '/services/professional-partner', priority: '0.7' },
    { path: '/services/business-app-catalog', priority: '0.7' },
];

const cyberCrimePages = [
    { path: '/services/cyber-crime-investigation', priority: '0.8' },
    { path: '/services/cyber-crime-investigation/process', priority: '0.7' },
    { path: '/services/cyber-crime-investigation/methodology', priority: '0.7' },
    { path: '/services/cyber-crime-investigation/clients', priority: '0.7' },
    { path: '/services/cyber-crime-investigation/pricing', priority: '0.7' },
    { path: '/services/cyber-crime-investigation/request', priority: '0.7' },
    { path: '/services/cyber-crime-investigation/legal', priority: '0.6' },
];

const insightPages = [
    '/ethical-standards', '/ai-vs-reality', '/hidden-costs', '/rural-goldmine',
    '/escape-9-5', '/15k-revolution', '/ransomware-paradox', '/hyperlocal-future',
    '/cto-trap', '/hr-forensics', '/digital-forensics-roi', '/cyber-security-myths',
    '/gig-economy-upgrade', '/edtech-evolution', '/fashion-tech-revolution',
    '/healthcare-ai-triage', '/logistics-route-automation', '/retail-inventory-ai',
    '/legal-contract-automation', '/finance-fraud-ml', '/manufacturing-rpa',
    '/real-estate-ai-valuation', '/edtech-automated-enrollment',
    '/agriculture-iot-automation', '/construction-compliance-ai', '/hospitality-ai-concierge'
];

const otherPages = [
    '/security-scheme'
];

const globalRegions = ['us-ca', 'uk', 'de', 'au', 'ae', 'in'];

const generateSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

    const addUrl = (urlPath, priority, changefreq = 'weekly') => {
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}${urlPath}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>${changefreq}</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += `  </url>\n`;
    };

    staticPages.forEach(page => addUrl(page.path, page.priority));
    servicePages.forEach(page => addUrl(page.path, page.priority));
    cyberCrimePages.forEach(page => addUrl(page.path, page.priority));
    insightPages.forEach(page => addUrl(`/insights${page}`, '0.7'));
    otherPages.forEach(page => addUrl(page, '0.6'));
    
    // Extract location slugs from data file
    if (fs.existsSync(DATA_FILE)) {
        const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
        const slugRegex = /slug:\s*["']([^"']+)["']/g;
        let match;
        let seen = new Set();
        while ((match = slugRegex.exec(fileContent)) !== null) {
            const slug = match[1];
            if (slug && !seen.has(slug)) {
                seen.add(slug);
                addUrl(`/location/${slug}`, '0.8');
            }
        }
    }
    
    globalRegions.forEach(region => addUrl(`/services/global/${region}`, '0.8'));

    xml += `</urlset>`;

    const publicDir = path.resolve(__dirname, 'client/public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    const outputPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    const urlCount = (xml.match(/<url>/g) || []).length;
    console.log(`Sitemap generated with ${urlCount} URLs`);
};

generateSitemap();