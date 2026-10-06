import type { Metadata } from "next";

export const siteConfig = {
  name: "IT Companies Nepal",
  shortName: "IT Companies Nepal",
  description:
    "Discover IT companies, software development companies, and technology businesses in Nepal.",
  url: "https://itcompaniesnepal.ghimiresushank.com.np",

  ogImage: "/og-image.jpg",

  keywords: [
    "IT Companies Nepal",
    "IT companies in Nepal",
    "software companies Nepal",
    "software companies in Nepal",
    "tech companies Nepal",
    "technology companies Nepal",
    "IT companies Kathmandu",
    "software companies Kathmandu",
    "Nepal IT companies",
    "Nepal tech companies",
    "Nepal software development companies",
    "software development Nepal",
    "web development companies Nepal",
    "technology companies Kathmandu",
    "IT directory Nepal",
    "Nepal IT directory",
  ],

  creator: {
    name: "Sushank Ghimire",
    url: "https://ghimiresushank.com.np",
  },

  social: {
    github: "https://github.com/ghimiresushank",
    linkedin: "https://www.linkedin.com/in/ghimire-sushank",
  },
};

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  image,
  path = "",
  keywords = [],
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  const seoDescription = description || siteConfig.description;

  const seoImage = image || siteConfig.ogImage;

  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),

    title: seoTitle,

    description: seoDescription,

    keywords: [...siteConfig.keywords, ...keywords],

    authors: [
      {
        name: siteConfig.creator.name,
        url: siteConfig.creator.url,
      },
    ],

    creator: siteConfig.creator.name,
    publisher: siteConfig.name,

    category: "Technology",

    alternates: {
      canonical: path || "/",
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,

      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: siteConfig.name,
      type: "website",

      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
  };
}

export const defaultMetadata = createMetadata();
