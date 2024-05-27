// pages/api/sitemap.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async function sitemap(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fake list of blog posts data. Replace this with actual data fetching logic.
  const posts = [
    { slug: "first-post", updated: new Date() },
    { slug: "second-post", updated: new Date() },
    // Add more posts
  ];

  const sitemapStream = new SitemapStream({
    hostname: "https://test.deepshaswat.com",
    // hostname: "http://localhost:3000",
  });

  // Add all static pages and blog posts to the sitemap
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.7 },
    ...posts.map((post) => ({
      url: `/blog/${post.slug}`,
      changefreq: "weekly",
      lastmod: post.updated.toISOString(),
      priority: 0.9,
    })),
  ];

  // Create a stream to write links to
  sitemapStream.write(links);
  sitemapStream.end();

  // Capture the output of the stream
  const sitemapOutput = await streamToPromise(
    Readable.from(sitemapStream)
  ).then((data) => data.toString());

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemapOutput);
  res.end();
}
