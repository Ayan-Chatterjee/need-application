import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Enterprise Solutions | Professional Business Services',
  description = 'Leading enterprise solutions provider offering innovative business services, products, and support for your organization.',
  image = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop',
  url = 'https://enterprise-solutions.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="enterprise, solutions, business services, products, support" />
      <meta name="author" content="Enterprise Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Enterprise Solutions" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Enterprise Solutions",
          "url": url,
          "logo": image,
          "description": description,
          "sameAs": [
            "https://www.facebook.com/enterprisesolutions",
            "https://www.twitter.com/enterprisesolutions",
            "https://www.linkedin.com/company/enterprisesolutions"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+1-800-BUSINESS",
            "email": "support@enterprise-solutions.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
