import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  //   const baseUrl = process.env.SITE_URL || "http:localhost:3000";

  return {
    rules: [
      {
        userAgent: "GoogleBot",
        allow: "/",
        disallow: "/manage",
      },
    ],
    // sitemap: `${baseUrl}/sitemap.xml`,
  };
}
