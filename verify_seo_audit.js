import fs from 'fs';

const BASE_URL = "https://sahityasanskriti.online";

const ROUTES = [
    "/nepali-sahitya",
    "/nepali-kavita",
    "/nepali-kavita-arth",
    "/author/dr-tilak-sarmah",
    "/hi/nepali-sahitya",
    "/as/nepali-sahitya",
    "/en/nepali-literature"
];

async function verifyRoutes() {
    console.log("1️⃣ ROUTE VERIFICATION");
    const results = [];

    for (const route of ROUTES) {
        try {
            const response = await fetch(`${BASE_URL}${route}`);
            console.log(`Checking ${route}... Status: ${response.status}`);
            results.push({ route, status: response.status });

            if (route === "/nepali-sahitya") {
                const html = await response.text();
                verifyMetaTags(html);
                verifyStructuredData(html);
            }
        } catch (error) {
            console.error(`Error fetching ${route}:`, error.message);
            results.push({ route, status: 'ERROR' });
        }
    }
}

function verifyMetaTags(html) {
    console.log("\n2️⃣ META TAG SERVER-SIDE RENDER CHECK (Raw HTML)");

    const checks = {
        title: /<title>.*नेपाली साहित्य.*<\/title>/.test(html),
        description: /<meta name="description"/.test(html),
        hreflang: /hreflang="hi"/.test(html),
        canonical: /rel="canonical"/.test(html)
    };

    console.log("Meta Tag Presence in Raw HTML:");
    console.log(`Title Tag: ${checks.title ? "✅ Found" : "❌ MISSING (Client-Side Only?)"}`);
    console.log(`Description: ${checks.description ? "✅ Found" : "❌ MISSING"}`);
    console.log(`Hreflang: ${checks.hreflang ? "✅ Found" : "❌ MISSING"}`);
    console.log(`Canonical: ${checks.canonical ? "✅ Found" : "❌ MISSING"}`);

    if (!checks.title || !checks.description) {
        console.log("\nCRITIQUE: Meta tags are likely rendering Client-Side only. SSR or Pre-rendering is required.");
    }
}

function verifyStructuredData(html) {
    console.log("\n3️⃣ STRUCTURED DATA VALIDATION");
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

    if (jsonLdMatch && jsonLdMatch[1]) {
        console.log("✅ JSON-LD Script Found. Validating content...");
        try {
            const data = JSON.parse(jsonLdMatch[1]);
            console.log("Schema Type:", data["@type"]);
            if (data["@context"] === "https://schema.org") {
                console.log("Context: Valid");
            } else {
                console.log("Context: Invalid");
            }
        } catch (e) {
            console.log("❌ JSON-LD Parse Error:", e.message);
        }
    } else {
        console.log("❌ JSON-LD NOT FOUND in HTML Source (Client-Side only?)");
    }
}

async function verifySitemap() {
    console.log("\n4️⃣ SITEMAP VALIDATION");
    try {
        const response = await fetch(`${BASE_URL}/sitemap.xml`);
        console.log(`Checking sitemap.xml... Status: ${response.status}`);
        if (response.status === 200) {
            const body = await response.text();
            console.log("Snippet:");
            console.log(body.substring(0, 200) + "...");
            if (body.includes("/nepali-sahitya")) console.log("✅ URLs found in sitemap.");
        }
    } catch (e) {
        console.log("Error checking sitemap:", e.message);
    }
}

async function verifyRobots() {
    console.log("\n5️⃣ ROBOTS.TXT CHECK");
    try {
        const response = await fetch(`${BASE_URL}/robots.txt`);
        console.log(`Checking robots.txt... Status: ${response.status}`);
        if (response.status === 200) {
            const body = await response.text();
            console.log("Content:");
            console.log(body);
        }
    } catch (e) {
        console.log("Error checking robots.txt:", e.message);
    }
}

async function runAudit() {
    await verifyRoutes();
    await verifySitemap();
    await verifyRobots();
    console.log("\nEND AUDIT");
}

runAudit();
