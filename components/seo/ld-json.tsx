export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://itcompaniesnepal.ghimiresushank.com.np/#website",
        url: "https://itcompaniesnepal.ghimiresushank.com.np",
        name: "IT Companies Nepal",
        description:
          "A directory of IT companies, software companies, and technology businesses in Nepal.",
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": "https://itcompaniesnepal.ghimiresushank.com.np/#webpage",
        url: "https://itcompaniesnepal.ghimiresushank.com.np",
        name: "IT Companies Nepal",
        description:
          "Discover IT companies, software development companies, and technology businesses in Nepal.",
        isPartOf: {
          "@id": "https://itcompaniesnepal.ghimiresushank.com.np/#website",
        },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": "https://itcompaniesnepal.ghimiresushank.com.np/#organization",
        name: "IT Companies Nepal",
        url: "https://itcompaniesnepal.ghimiresushank.com.np",
        description:
          "IT Companies Nepal is a directory of information technology, software, and technology companies operating in Nepal.",
        founder: {
          "@type": "Person",
          name: "Sushank Ghimire",
          url: "https://ghimiresushank.com.np",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
