import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  isProject?: boolean;
  projectSchemaData?: {
    name: string;
    description: string;
    author: string;
    year: string;
    location: string;
  };
}

export default function SEO({ title, description, isProject = false, projectSchemaData }: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://raj-shrestha.dev${location.pathname}`;

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update meta tags helper
    const updateMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.head.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute(attributeName, attributeValue);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateMetaTag('meta[name="description"]', "name", "description", description);
    
    // Open Graph (Facebook)
    updateMetaTag('meta[property="og:title"]', "property", "og:title", title);
    updateMetaTag('meta[property="og:description"]', "property", "og:description", description);
    updateMetaTag('meta[property="og:type"]', "property", "og:type", isProject ? "article" : "website");
    updateMetaTag('meta[property="og:url"]', "property", "og:url", currentUrl);
    updateMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "Raj Shrestha Portfolio");
    updateMetaTag('meta[property="og:image"]', "property", "og:image", "https://raj-shrestha.dev/assets/seo-banner.jpg");

    // Twitter Cards
    updateMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    updateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", "https://raj-shrestha.dev/assets/seo-banner.jpg");

    // 3. Dynamic Canonical Link
    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", currentUrl);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", currentUrl);
      document.head.appendChild(link);
    }

    // 4. Generate JSON-LD Schema
    const baseBreadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://raj-shrestha.dev/"
        },
        location.pathname !== "/" ? {
          "@type": "ListItem",
          "position": 2,
          "name": title.split(" — ")[0],
          "item": currentUrl
        } : null
      ].filter(Boolean)
    };

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Raj Shrestha",
      "jobTitle": "AI Marketing Expert & Web Designer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressCountry": "Nepal"
      },
      "url": "https://raj-shrestha.dev",
      "sameAs": [
        "https://linkedin.com/in/raj-shrestha-ai",
        "https://twitter.com/raj_shrestha_ai"
      ]
    };

    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Raj Shrestha — AI Marketing & Web Design",
      "image": "https://raj-shrestha.dev/assets/seo-banner.jpg",
      "priceRange": "$$",
      "telephone": "+977-9800000000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Baluwatar",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "postalCode": "44600",
        "addressCountry": "NP"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.7215",
        "longitude": "85.3311"
      },
      "url": "https://raj-shrestha.dev",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    };

    let schemas: any[] = [baseBreadcrumbSchema, personSchema, professionalServiceSchema];

    if (isProject && projectSchemaData) {
      const creativeWorkSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": projectSchemaData.name,
        "description": projectSchemaData.description,
        "creator": {
          "@type": "Person",
          "name": projectSchemaData.author
        },
        "locationCreated": {
          "@type": "Place",
          "name": projectSchemaData.location
        },
        "dateCreated": projectSchemaData.year
      };
      schemas.push(creativeWorkSchema);
    }

    // Clear previous schemas
    const oldScripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    oldScripts.forEach(script => script.remove());

    // Append new schemas
    schemas.forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup schemas if unmounting
      const activeScripts = document.head.querySelectorAll('script[type="application/ld+json"]');
      activeScripts.forEach(script => script.remove());
    };
  }, [title, description, location.pathname, isProject, projectSchemaData]);

  return null; // Side effect only
}
