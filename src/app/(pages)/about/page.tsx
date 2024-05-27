import { About } from "@/components/about/about";
import { generateSiteConfig } from "@/components/config/site-config";
import { Metadata } from "next";

export const metadata: Metadata = generateSiteConfig(
  "About // Shaswat Deep",
  "Shaswat Deep is an Indian software engineer, entrepreneur, and writer. He is the Founder & CEO of Orbizza.",
  "/about",
  "/static/images/reminder-bw.jpg"
);

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
