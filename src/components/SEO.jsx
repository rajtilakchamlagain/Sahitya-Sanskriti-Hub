import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    image,
    article = false,
    author = "Sahitya Sanskriti Hub",
    publishedTime,
    modifiedTime,
    hreflangs = []
}) => {
    const location = useLocation();
    const currentUrl = `https://sahityasanskriti.online${location.pathname}`;
    const defaultImage = "https://sahityasanskriti.online/logo.png";
    const siteTitle = "Sahitya Sanskriti Hub";

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    // Schema Markup
    const schema = article ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "image": [image || defaultImage],
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": siteTitle,
            "logo": {
                "@type": "ImageObject",
                "url": defaultImage
            }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "description": description
    } : {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteTitle,
        "url": "https://sahityasanskriti.online",
        "description": description
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Hreflang Tags for Multilingual Support */}
            {hreflangs.map((lang, index) => (
                <link key={index} rel="alternate" hreflang={lang.lang} href={`https://sahityasanskriti.online${lang.path}`} />
            ))}
            {/* Self-referencing hreflang is good practice */}
            <link rel="alternate" hreflang="x-default" href="https://sahityasanskriti.online/" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image || defaultImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default SEO;
