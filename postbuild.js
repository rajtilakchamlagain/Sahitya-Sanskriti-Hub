import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import dynamic content for SEO generation
import { articles } from './src/data/articles.js';
import { poems } from './src/data/poems.js';
import { stories } from './src/data/stories.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const DOMAIN = 'https://sahityasanskriti.online';

// Clean, verified SEO configuration for core pillar routes
const SEO_CONFIG = {
    '/': {
        title: 'साहित्य संस्कृति हब | Sahitya Sanskriti Hub — नेपाली साहित्य र संस्कृति',
        description: 'नेपाली साहित्य, कविता, कथा, अनुसन्धान र सांस्कृतिक धरोहरको आधिकारिक मञ्च। डा. तिलक शर्माका उत्कृष्ट साहित्यिक रचनाहरू।',
        keywords: 'नेपाली साहित्य, नेपाली कविता, डा. तिलक शर्मा, Sahitya Sanskriti Hub, Nepali Literature, Nepali Poems'
    },
    '/nepali-sahitya': {
        title: 'नेपाली साहित्यको इतिहास र विकास | Sahitya Sanskriti Hub',
        description: 'नेपाली साहित्यको ऐतिहासिक विकासक्रम, प्रमुख कालखण्ड, साहित्यिक आन्दोलन र आधुनिक प्रवृत्तिहरूको विस्तृत विवेचना।',
        keywords: 'नेपाली साहित्य, नेपाली साहित्यको इतिहास, भानुभक्त, आधुनिक नेपाली साहित्य',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "नेपाली साहित्यको इतिहास र विकास",
            "description": "नेपाली साहित्यको ऐतिहासिक विकासक्रम र आधुनिक प्रवृत्तिहरूको विवेचना।",
            "author": { "@type": "Person", "name": "Dr. Tilak Sarmah" }
        }
    },
    '/nepali-kavita': {
        title: 'नेपाली कविता सङ्ग्रह | उत्कृष्ट नेपाली कविताहरू | Nepali Poetry',
        description: 'नेपाली आधुनिक र परम्परागत कविताहरूको समृद्ध सङ्ग्रह। प्रकृति, देशप्रेम, दर्शन र मानवीय संवेदनाका गहिरा अभिव्यक्तिहरू।',
        keywords: 'नेपाली कविता, नेपाली साहित्य, कविता सङ्ग्रह, Nepali Poetry, Kavita'
    },
    '/nepali-kavita-arth': {
        title: 'नेपाली कविता भावार्थ र विश्लेषण | Poetry Meaning & Analysis',
        description: 'नेपाली कविताहरूको गम्भीर भावार्थ, प्रतीक, अलङ्कार र सन्देशको प्राज्ञिक व्याख्या।',
        keywords: 'कविता भावार्थ, नेपाली कविता व्याख्या, कविता विश्लेषण'
    },
    '/culture': {
        title: 'नेपाली तथा गोर्खा संस्कृति र परम्परा | Himalayan Culture',
        description: 'असम तथा पूर्वोत्तर भारतका नेपाली समाजको मौलिक संस्कृति, चाडपर्व, रीतिथिति र लोकपरम्पराको संरक्षण।',
        keywords: 'नेपाली संस्कृति, असम नेपाली समाज, लोक संस्कृति, परम्परा'
    },
    '/author/dr-tilak-sarmah': {
        title: 'डा. तिलक शर्मा | व्यक्तित्व एवं कृतित्व | Dr. Tilak Sarmah',
        description: 'वरिष्ठ साहित्यकार, प्राज्ञ तथा अनुसन्धाता डा. तिलक शर्माको जीवनी, साहित्यिक योगदान र प्रकाशित कृतिहरू।',
        keywords: 'डा. तिलक शर्मा, Dr Tilak Sarmah, Tilak Sarmah works, Nepali Literature Author',
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Tilak Sarmah",
            "jobTitle": "Scholar & Author",
            "url": "https://sahityasanskriti.online/author/dr-tilak-sarmah"
        }
    },
    '/shradhanjali': {
        title: 'श्रद्धाञ्जली मञ्च | हाम्रो गौरवमय स्मृति | Memorial Tributes',
        description: 'साहित्य, संगीत, शिक्षा र समाजसेवामा विशिष्ट योगदान पुर्‍याउनुहुने महान् व्यक्तित्वहरूको स्मृतिमा समर्पित श्रद्धाञ्जली।',
        keywords: 'श्रद्धाञ्जली, Memorial Tributes, जुबिन गर्ग, गीता उपाध्याय, यदुमनि शर्मा, देव शर्मा चापागाईं'
    },
    '/shradhanjali/zubeen-garg': {
        title: 'वर्षदिन तिमी बि: जुबिन गर्गलाई श्रद्धाञ्जली | Zubeen Garg Tribute',
        description: 'भारतीय संगीत जगतका अमर तारा जुबिन गर्गको पहिलो पुण्यतिथिमा भावपूर्ण श्रद्धाञ्जली आलेख।',
        keywords: 'जुबिन गर्ग, Zubeen Garg, श्रद्धाञ्जली, वर्षदिन तिमी बि, Assamese Singer, Ya Ali',
        image: '/zubeen_varshadin.jpg'
    },
    '/shradhanjali/geeta-upadhyay': {
        title: 'हामी सबैकी दिदी: गीता उपाध्यायको स्मृतिमा | Geeta Upadhyay Tribute',
        description: 'शिक्षा, साहित्य र संस्कृतिकी सेतु स्वर्गीय गीता उपाध्यायको पुण्य स्मृतिमा विशेष श्रद्धाञ्जली।',
        image: '/aaa.jpeg'
    },
    '/shradhanjali/yadumani-sharma': {
        title: 'कलाकार यदुमनि शर्मालाई श्रद्धाञ्जली | Yadumani Sharma Tribute',
        description: 'विशिष्ट सङ्गीत साधक तथा लोककलाकार यदुमनि शर्माको स्मृतिमा भावपूर्ण श्रद्धाञ्जली।'
    },
    '/shradhanjali/dev-sharma-chapagai': {
        title: 'कृति शिक्षक देव शर्मा चापागाईंलाई श्रद्धाञ्जली | Dev Sharma Tribute',
        description: 'आदर्श शिक्षक तथा समाज सेवी देव शर्मा चापागाईंको पुण्य स्मृतिमा श्रद्धाञ्जली।'
    },
    '/about': {
        title: 'हाम्रो बारेमा | About Sahitya Sanskriti Hub',
        description: 'साहित्य संस्कृति हबको उद्देश्य, सम्पादकीय दृष्टिकोण र नेपाली भाषा-संस्कृतिको जगेर्ना गर्ने हाम्रो सङ्कल्प।'
    },
    '/privacy': {
        title: 'गोपनीयता नीति | Privacy Policy | Sahitya Sanskriti Hub',
        description: 'प्रयोगकर्ताको गोपनीयता, कुकीज नीति, र गुगल एडसेन्स सम्बन्धी हाम्रा नीतिगत विवरणहरू।'
    },
    '/terms': {
        title: 'नियम तथा सर्तहरू | Terms of Service | Sahitya Sanskriti Hub',
        description: 'साहित्य संस्कृति हबको सामग्री उपयोग र प्रयोगकर्ता नियमहरू।'
    },
    '/contact': {
        title: 'सम्पर्क | Contact Us | Sahitya Sanskriti Hub',
        description: 'सम्पादकीय समूहसँग सम्पर्क, प्रतिक्रिया र साहित्यिक रचना पठाउने माध्यम।'
    },
    '/zubeen-garg': {
        title: 'जुबिन गर्ग: जीवन र सांगीतिक यात्रा | Zubeen Garg Biography',
        description: 'असमका महान् गायक तथा संगीतकार जुबिन गर्गको सांगीतिक यात्रा, जीवनका आरोह-अवरोह र अमर धरोहर।',
        image: '/images/zubeen_epic.png'
    }
};

const cleanExcerpt = (html, maxLength = 160) => {
    if (!html) return '';
    let text = html.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (text.length > maxLength) {
        text = text.substring(0, maxLength) + '...';
    }
    return text;
};

async function injectSEO() {
    if (!fs.existsSync(DIST_DIR)) {
        console.error("DIST directory not found. Run 'npm run build' first.");
        process.exit(1);
    }

    const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');
    const allUrlsForSitemap = [];

    const writeFile = (route, config) => {
        allUrlsForSitemap.push(route);

        const routeDir = path.join(DIST_DIR, route.substring(1));
        fs.mkdirSync(routeDir, { recursive: true });

        let html = template;

        // 1. Replace Title
        if (config.title) {
            html = html.replace(/<title>.*?<\/title>/, `<title>${config.title}</title>`);
        }

        // 2. Replace Description
        const cleanDesc = config.description ? config.description.replace(/"/g, '&quot;') : '';
        if (cleanDesc) {
            if (html.includes('<meta name="description"')) {
                html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${cleanDesc}"`);
            } else {
                html = html.replace('</head>', `<meta name="description" content="${cleanDesc}">\n</head>`);
            }
        }

        // Open Graph tags
        if (config.title) html = html.replace('</head>', `<meta property="og:title" content="${config.title}">\n</head>`);
        if (cleanDesc) html = html.replace('</head>', `<meta property="og:description" content="${cleanDesc}">\n</head>`);
        if (config.image) html = html.replace('</head>', `<meta property="og:image" content="${config.image}">\n</head>`);

        // 3. Inject JSON-LD Schema
        if (config.schema) {
            const schemaScript = `<script type="application/ld+json">${JSON.stringify(config.schema)}</script>`;
            html = html.replace('</head>', `${schemaScript}\n</head>`);
        }

        // 4. Inject Canonical Tag
        const canonicalTag = `<link rel="canonical" href="${DOMAIN}${route}" />`;
        html = html.replace('</head>', `${canonicalTag}\n</head>`);

        fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
    };

    console.log("Generating static SEO pages...");

    // 1. Static Pillar Pages
    for (const [route, config] of Object.entries(SEO_CONFIG)) {
        writeFile(route, config);
    }

    // 2. Articles
    articles.forEach(article => {
        writeFile(`/article/${article.id}`, {
            title: `${article.title} | Sahitya Sanskriti`,
            description: article.excerpt || cleanExcerpt(article.content),
            image: article.image,
            schema: {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": article.title,
                "author": { "@type": "Person", "name": article.author || "Dr. Tilak Sarmah" },
                "datePublished": article.date
            }
        });
    });

    // 3. Poems
    poems.forEach(poem => {
        writeFile(`/poem/${poem.id}`, {
            title: `${poem.title} | कविता | Sahitya Sanskriti`,
            description: poem.excerpt || cleanExcerpt(poem.content),
            schema: {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "headline": poem.title,
                "author": { "@type": "Person", "name": poem.author || "Dr. Tilak Sarmah" }
            }
        });
    });

    // 4. Stories
    stories.forEach(story => {
        writeFile(`/story/${story.id}`, {
            title: `${story.title} | कथा | Sahitya Sanskriti`,
            description: story.excerpt || cleanExcerpt(story.content),
            schema: {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "headline": story.title,
                "author": { "@type": "Person", "name": story.author || "Dr. Tilak Sarmah" }
            }
        });
    });

    // 5. Build High-Quality Authentic Sitemap
    const baseRoutes = ['/', '/poems', '/articles', '/stories', '/research', '/study', '/shradhanjali'];
    baseRoutes.forEach(r => allUrlsForSitemap.push(r));

    const uniqueUrls = [...new Set(allUrlsForSitemap)];
    console.log(`Generated authentic sitemap with ${uniqueUrls.length} high-quality URLs.`);

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map(url => `  <url>\n    <loc>${DOMAIN}${url}</loc>\n    <changefreq>${url === '/' ? 'daily' : 'weekly'}</changefreq>\n    <priority>${url === '/' ? '1.0' : (url.startsWith('/shradhanjali') || url.startsWith('/article') ? '0.9' : '0.8')}</priority>\n  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent, 'utf-8');
    fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`, 'utf-8');

    // Also update public copies
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent, 'utf-8');

    console.log("Clean sitemap.xml and robots.txt ready.");
}

injectSEO();
