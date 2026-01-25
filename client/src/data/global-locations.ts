
export interface GlobalLocation {
    id: string; // Unique ID (e.g., "us-ny", "in-kolkata")
    slug: string; // URL slug (e.g., "new-york", "kolkata")
    name: string; // Display Name (e.g., "New York")
    country: string; // Country Name
    state?: string; // State/Province if applicable
    address: string;
    phone: string;
    email: string;
    coordinates: { lat: number; lng: number };
    currency: string; // "USD", "INR", "GBP"
    timezone: string;
    techFocus: string; // localized tech focus
    description: string;
    img?: string; // Optional background image override
    recommendedAppIds: number[];
}

export const globalLocations: GlobalLocation[] = [
    // --- INTERNATIONAL OFFICES ---
    {
        id: "us-ny",
        slug: "new-york",
        name: "New York",
        country: "USA",
        state: "NY",
        address: "5 Penn Plaza, 14th Floor, New York, NY 10001, US",
        phone: "+91 33690 29331", // Global Contact
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 40.7519, lng: -73.9941 },
        currency: "USD",
        timezone: "America/New_York",
        techFocus: "Fintech & Enterprise Solutions",
        description: "Leading Software Development Company in New York specializing in Fintech and Enterprise AI.",
        recommendedAppIds: [41, 42, 45, 46] // Job, Real Estate, Event, Influencer
    },
    {
        id: "uk-lon",
        slug: "london",
        name: "London",
        country: "United Kingdom",
        address: "12 Steward Street, The Steward Building, London, E1 6FQ, Great Britain",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 51.5188, lng: -0.0773 },
        currency: "GBP",
        timezone: "Europe/London",
        techFocus: "Banking & Neobank Solutions",
        description: "Top App Development Agency in London. We build secure banking and fintech applications.",
        recommendedAppIds: [42, 16, 11, 41] // Real Estate, Cleaning, Electrician, Job
    },
    {
        id: "de-mun",
        slug: "munich",
        name: "Munich",
        country: "Germany",
        state: "Bavaria",
        address: "Banking Circle S.A. - German Branch, Maximilianstraße 54, 80538 München",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 48.1380, lng: 11.5860 },
        currency: "EUR",
        timezone: "Europe/Berlin",
        techFocus: "Automotive & Industrial IoT",
        description: "Premier IT Consultancy in Munich. Expert developers for Automotive and Industrial automation.",
        recommendedAppIds: [42, 19, 13, 23] // Real Estate, Painter, AC (HVAC), Training
    },
    {
        id: "au-syd",
        slug: "sydney",
        name: "Sydney",
        country: "Australia",
        state: "NSW",
        address: "Level 11/10 Carrington St, Sydney NSW 2000, Australia",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: -33.8657, lng: 151.2064 },
        currency: "AUD",
        timezone: "Australia/Sydney",
        techFocus: "Real Estate & Consumer Tech",
        description: "Best Web Design & Development Company in Sydney. Launch your startup with Cehpoint.",
        recommendedAppIds: [42, 14, 12, 50] // Real Estate, Car Wash, Plumber, Community
    },
    {
        id: "ca-cal",
        slug: "calgary",
        name: "Calgary",
        country: "Canada",
        state: "Alberta",
        address: "736 Meridian Road N.E, Calgary, Alberta, CA",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 51.059, lng: -114.002 }, // Approx for Meridian Rd NE
        currency: "CAD",
        timezone: "America/Edmonton",
        techFocus: "Energy Tech & Enterprise Services",
        description: "Software Innovation Partner in Calgary. Custom App Development for Energy and Service sectors.",
        recommendedAppIds: [41, 13, 11, 47] // Job, AC (Heating), Electrician, Local News
    },
    {
        id: "ae-dub",
        slug: "dubai",
        name: "Dubai",
        country: "UAE",
        address: "1st Floor, Emaar Square, Building 6, Dubai, United Arab Emirates",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 25.197, lng: 55.274 },
        currency: "AED",
        timezone: "Asia/Dubai",
        techFocus: "Real Estate, Tourism & Luxury Tech",
        description: "Top Mobile App Developers in Dubai. Specialized in Real Estate and Luxury Service Apps.",
        recommendedAppIds: [42, 14, 34, 48] // Real Estate, Car Wash, Jewellery, Tour Booking
    },

    // --- INDIA LOCATIONS (Previous + New Footer) ---
    {
        id: "in-kol",
        slug: "kolkata",
        name: "Kolkata",
        country: "India",
        state: "West Bengal",
        address: "Salt Lake Sector V, Kolkata, West Bengal, India",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 22.5726, lng: 88.3639 },
        currency: "INR",
        timezone: "Asia/Kolkata",
        techFocus: "Software Development Hub",
        description: "Best Website and App Company in Kolkata. Startup ecosystem partners.",
        recommendedAppIds: [27, 2, 7, 21] // Bengali Course, Fish, Sweet Shop, Tuition
    },
    {
        id: "in-bol",
        slug: "bolpur",
        name: "Bolpur",
        country: "India",
        state: "West Bengal",
        address: "Cehpoint, Labpur, Sandipan Patsala Para, Birbhum, Bolpur, West Bengal - 731303, India",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 23.6693, lng: 87.6917 },
        currency: "INR",
        timezone: "Asia/Kolkata",
        techFocus: "Digital Education & Rural Tech",
        description: "Leading IT Training and Software Company in Bolpur/Birbhum.",
        recommendedAppIds: [21, 23, 5, 29] // Tuition, Computer Institute, Rice Supply, School App
    },
    // ... Keeping other major Indian cities for SEO dominance ...
    {
        id: "in-mum",
        slug: "mumbai",
        name: "Mumbai",
        country: "India",
        state: "Maharashtra",
        address: "Bandra Kurla Complex, Mumbai, India",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 19.0760, lng: 72.8777 },
        currency: "INR",
        timezone: "Asia/Kolkata",
        techFocus: "Fintech & Media Tech",
        description: "Top App Developers in Mumbai for Fintech, Media, and Entertainment.",
        recommendedAppIds: [6, 16, 46, 45] // Tiffin, House Cleaning, Influencer, Event
    },
    {
        id: "in-del",
        slug: "delhi",
        name: "Delhi",
        country: "India",
        state: "Delhi",
        address: "Connaught Place, New Delhi, India",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 28.6139, lng: 77.2090 },
        currency: "INR",
        timezone: "Asia/Kolkata",
        techFocus: "GovTech & Startup Hub",
        description: "Leading Web Development Agency in Delhi NCR.",
        recommendedAppIds: [13, 11, 41, 30] // AC Repair, Electrician, Job, Coaching CRM
    },
    {
        id: "in-blr",
        slug: "bangalore",
        name: "Bangalore",
        country: "India",
        state: "Karnataka",
        address: "Whitefield, Bangalore, Karnataka, India",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 12.9716, lng: 77.5946 },
        currency: "INR",
        timezone: "Asia/Kolkata",
        techFocus: "Silicon Valley of India",
        description: "World-class Mobile App Development Services in Bangalore.",
        recommendedAppIds: [1, 42, 14, 23] // Grocery, Real Estate, Car Wash, Computer Training
    },
    {
        id: "in-hyd",
        slug: "hyderabad",
        name: "Hyderabad",
        country: "India",
        state: "Telangana",
        address: "HITEC City, Hyderabad, India",
        phone: "+91 33690 29331",
        email: "contact@cehpoint.co.in",
        coordinates: { lat: 17.3850, lng: 78.4867 },
        currency: "INR",
        timezone: "Asia/Kolkata",
        techFocus: "Biotech & IT Services",
        description: "Best Software Company in Hyderabad.",
        recommendedAppIds: [16, 12, 10, 31]
    },
    // --- INDIA TECH HUBS ---
    { id: "in-che", slug: "chennai", name: "Chennai", country: "India", state: "Tamil Nadu", address: "Tidel Park, Chennai, India", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 13.0827, lng: 80.2707 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "SaaS & Automotive Tech", description: "Top App Development Company in Chennai.", recommendedAppIds: [42, 11, 23, 1] },
    { id: "in-pun", slug: "pune", name: "Pune", country: "India", state: "Maharashtra", address: "Hinjewadi IT Park, Pune, Maharashtra", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 18.5204, lng: 73.8567 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Automotive & IT Services", description: "Leading IT Consultancy in Pune.", recommendedAppIds: [13, 14, 46, 23] },
    { id: "in-ahm", slug: "ahmedabad", name: "Ahmedabad", country: "India", state: "Gujarat", address: "GIFT City, Ahmedabad, Gujarat", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 23.0225, lng: 72.5714 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Fintech & Pharma Tech", description: "Best Web Development Agency in Ahmedabad.", recommendedAppIds: [10, 31, 34, 48] },
    { id: "in-jai", slug: "jaipur", name: "Jaipur", country: "India", state: "Rajasthan", address: "Sitapura Industrial Area, Jaipur, Rajasthan", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 26.9124, lng: 75.7873 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Tourism & Handicraft Tech", description: "Top Digital Marketing & App Company in Jaipur.", recommendedAppIds: [48, 34, 45, 12] },
    { id: "in-ind", slug: "indore", name: "Indore", country: "India", state: "Madhya Pradesh", address: "Crystal IT Park, Indore, MP", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 22.7196, lng: 75.8577 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Smart City Solutions", description: "Leading Software Company in Indore.", recommendedAppIds: [42, 1, 6, 23] },
    { id: "in-koc", slug: "kochi", name: "Kochi", country: "India", state: "Kerala", address: "Infopark, Kochi, Kerala", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 9.9312, lng: 76.2673 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Maritime & Tourism Tech", description: "Best App Developers in Kochi.", recommendedAppIds: [48, 2, 8, 11] },
    { id: "in-chd", slug: "chandigarh", name: "Chandigarh", country: "India", state: "Chandigarh", address: "IT Park, Chandigarh, India", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 30.7333, lng: 76.7794 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Urban Planning & IT", description: "Top IT Services Provider in Chandigarh.", recommendedAppIds: [41, 19, 13, 23] },

    // --- INDIA EMERGING ---
    { id: "in-luc", slug: "lucknow", name: "Lucknow", country: "India", state: "Uttar Pradesh", address: "Gomti Nagar, Lucknow, UP", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 26.8467, lng: 80.9462 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "GovTech & Logistics", description: "Best Software Company in Lucknow.", recommendedAppIds: [30, 41, 21, 5] },
    { id: "in-bhu", slug: "bhubaneswar", name: "Bhubaneswar", country: "India", state: "Odisha", address: "Infocity, Bhubaneswar, Odisha", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 20.2961, lng: 85.8245 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Education & Smart City", description: "Leading Tech Company in Bhubaneswar.", recommendedAppIds: [21, 23, 1, 30] },
    { id: "in-coi", slug: "coimbatore", name: "Coimbatore", country: "India", state: "Tamil Nadu", address: "Tidel Park, Coimbatore, TN", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 11.0168, lng: 76.9558 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Textile & Manufacturing Tech", description: "Top Industrial IoT Partners in Coimbatore.", recommendedAppIds: [13, 11, 41, 14] },
    { id: "in-vis", slug: "visakhapatnam", name: "Visakhapatnam", country: "India", state: "Andhra Pradesh", address: "IT SEZ, Rushikonda, Visakhapatnam", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 17.6868, lng: 83.2185 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Maritime & Port Tech", description: "Best App Development Agency in Vizag.", recommendedAppIds: [1, 2, 48, 16] },
    { id: "in-nag", slug: "nagpur", name: "Nagpur", country: "India", state: "Maharashtra", address: "MIHAN SEZ, Nagpur, Maharashtra", phone: "+91 33690 29331", email: "contact@cehpoint.co.in", coordinates: { lat: 21.1458, lng: 79.0882 }, currency: "INR", timezone: "Asia/Kolkata", techFocus: "Logistics & Transport", description: "Software Solutions in Nagpur.", recommendedAppIds: [12, 14, 42, 6] }
];

export const indianCities = globalLocations; // Backward compatibility alias
