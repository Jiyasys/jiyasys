import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = 'Jiyasys - Enterprise IT Services & Solutions';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Jiyasys provides cutting-edge IT services, software development, AI automations, and tech consulting for enterprises worldwide.';
  const defaultKeywords = 'IT services, software development, AI automations, tech consulting, enterprise solutions, Rajasthan India';
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || 'https://www.jiyasys.com/'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || 'https://www.jiyasys.com/og-image.jpg'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || 'https://www.jiyasys.com/'} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || 'https://www.jiyasys.com/og-image.jpg'} />
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Jiyasys",
          "url": "https://www.jiyasys.com",
          "logo": "https://www.jiyasys.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
