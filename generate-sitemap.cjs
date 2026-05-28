const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.cehpoint.co.in';
const today = new Date().toISOString().split('T')[0];
const DATA_FILE = path.resolve(__dirname, 'client/src/data/global-locations.ts');

const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
    { path: '/ai-in-real-life', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/insights', priority: '0.7', changefreq: 'daily' },
    { path: '/careers', priority: '0.6', changefreq: 'weekly' },
    { path: '/quotation', priority: '0.7', changefreq: 'monthly' },
    { path: '/demo-delivery', priority: '0.7', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
    { path: '/training', priority: '0.6', changefreq: 'weekly' },
    { path: '/partner-network', priority: '0.6', changefreq: 'monthly' },
    { path: '/company-profile', priority: '0.6', changefreq: 'monthly' },
    { path: '/incubation', priority: '0.5', changefreq: 'monthly' },
    { path: '/investor-connect', priority: '0.5', changefreq: 'monthly' },
    { path: '/leadership-search', priority: '0.5', changefreq: 'monthly' },
    { path: '/tenders', priority: '0.6', changefreq: 'weekly' },
    { path: '/cost-estimator', priority: '0.6', changefreq: 'monthly' },
    { path: '/interns', priority: '0.5', changefreq: 'weekly' },
];

const servicePages = [
    { path: '/services/ecommerce', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/edutech', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/fintech', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/cyber-security', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/rural-digitalization', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/game-development', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/professional-partner', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/business-app-catalog', priority: '0.7', changefreq: 'weekly' },
];

const cyberCrimePages = [
    { path: '/services/cyber-crime-investigation', priority: '0.8', changefreq: 'weekly' },
    { path: '/services/cyber-crime-investigation/process', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/cyber-crime-investigation/methodology', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/cyber-crime-investigation/clients', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/cyber-crime-investigation/pricing', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/cyber-crime-investigation/request', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/cyber-crime-investigation/legal', priority: '0.6', changefreq: 'yearly' },
];

const insightArticles = [
    { slug: 'ethical-standards', title: 'Ethical Standards in AI Development', date: '2026-05-01' },
    { slug: 'ai-vs-reality', title: 'AI vs Reality: Separating Hype from Impact', date: '2026-05-01' },
    { slug: 'hidden-costs', title: 'Hidden Costs of Digital Transformation', date: '2026-05-01' },
    { slug: 'rural-goldmine', title: 'Rural India: The Untapped Goldmine', date: '2026-05-01' },
    { slug: 'escape-9-5', title: 'Escape the 9-5: IT Freelancing Guide', date: '2024-10-15' },
    { slug: '15k-revolution', title: 'The 15,000 Startup Revolution', date: '2024-10-15' },
    { slug: 'ransomware-paradox', title: 'The Ransomware Paradox: Why Paying is a Trap', date: '2024-03-24' },
    { slug: 'hyperlocal-future', title: 'The Hyperlocal Future', date: '2024-10-15' },
    { slug: 'cto-trap', title: 'The CTO Trap', date: '2024-10-15' },
    { slug: 'hr-forensics', title: 'HR Forensics', date: '2024-10-15' },
    { slug: 'digital-forensics-roi', title: 'Digital Forensics ROI', date: '2024-10-15' },
    { slug: 'cyber-security-myths', title: 'Cyber Security Myths Debunked', date: '2026-05-01' },
    { slug: 'gig-economy-upgrade', title: 'The Gig Economy Upgrade', date: '2024-10-15' },
    { slug: 'edtech-evolution', title: 'EdTech Evolution', date: '2026-05-01' },
    { slug: 'fashion-tech-revolution', title: 'Fashion Tech Revolution', date: '2024-10-15' },
    { slug: 'healthcare-ai-triage', title: 'Healthcare AI Triage', date: '2026-05-01' },
    { slug: 'logistics-route-automation', title: 'Logistics Route Automation', date: '2024-10-15' },
    { slug: 'retail-inventory-ai', title: 'Retail Inventory AI', date: '2024-10-15' },
    { slug: 'legal-contract-automation', title: 'Legal Contract Automation', date: '2024-10-15' },
    { slug: 'finance-fraud-ml', title: 'Finance Fraud ML', date: '2024-10-15' },
    { slug: 'manufacturing-rpa', title: 'Manufacturing RPA', date: '2024-10-15' },
    { slug: 'real-estate-ai-valuation', title: 'Real Estate AI Valuation', date: '2024-10-15' },
    { slug: 'edtech-automated-enrollment', title: 'EdTech Automated Enrollment', date: '2026-05-01' },
    { slug: 'agriculture-iot-automation', title: 'Agriculture IoT Automation', date: '2026-05-01' },
    { slug: 'construction-compliance-ai', title: 'Construction Compliance AI', date: '2026-05-01' },
    { slug: 'hospitality-ai-concierge', title: 'Hospitality AI Concierge', date: '2026-05-01' },
];

const otherPages = [
    { path: '/security-scheme', priority: '0.6', changefreq: 'monthly' },
];

const globalRegions = ['us-ca', 'uk', 'de', 'au', 'ae', 'in'];

const writeOutput = (filename, content) => {
    // Only client/public is the Vite build root that ships to Vercel.
    const clientPublicDir = path.resolve(__dirname, 'client/public');
    if (!fs.existsSync(clientPublicDir)) {
        fs.mkdirSync(clientPublicDir, { recursive: true });
    }
    fs.writeFileSync(path.join(clientPublicDir, filename), content);
};

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

    staticPages.forEach(page => addUrl(page.path, page.priority, page.changefreq));
    servicePages.forEach(page => addUrl(page.path, page.priority, page.changefreq));
    cyberCrimePages.forEach(page => addUrl(page.path, page.priority, page.changefreq));
    insightArticles.forEach(article => addUrl(`/insights/${article.slug}`, '0.7', 'monthly'));
    otherPages.forEach(page => addUrl(page.path, page.priority, page.changefreq));

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
                addUrl(`/location/${slug}`, '0.8', 'weekly');
            }
        }
    }

    globalRegions.forEach(region => addUrl(`/services/global/${region}`, '0.8', 'monthly'));

    xml += `</urlset>`;

    writeOutput('sitemap.xml', xml);

    const urlCount = (xml.match(/<url>/g) || []).length;
    console.log(`Main sitemap generated with ${urlCount} URLs`);
};

const generateArticlesSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n`;

    insightArticles.forEach(article => {
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}/insights/${article.slug}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += `    <news:news>\n`;
        xml += `      <news:publication>\n`;
        xml += `        <news:name>Cehpoint Insights</news:name>\n`;
        xml += `        <news:language>en</news:language>\n`;
        xml += `      </news:publication>\n`;
        xml += `      <news:publication_date>${article.date}</news:publication_date>\n`;
        xml += `      <news:title>${article.title}</news:title>\n`;
        xml += `    </news:news>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    writeOutput('sitemap-articles.xml', xml);

    console.log(`Articles sitemap generated with ${insightArticles.length} articles`);
};

generateSitemap();
generateArticlesSitemap();
