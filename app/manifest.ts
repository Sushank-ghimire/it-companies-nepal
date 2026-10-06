import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IT Companies Nepal",
    short_name: "IT Companies Nepal",
    description:
      "Discover IT, software, and technology companies across Nepal.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#0f172a",
    background_color: "#0f172a",
    icons: [],
  };
}
