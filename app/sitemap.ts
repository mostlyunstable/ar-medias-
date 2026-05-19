import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://armedias.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Note: Once the database is fully populated, you can map over Prisma projects here
    // to dynamically generate sitemap URLs for each portfolio item.
  ];
}
