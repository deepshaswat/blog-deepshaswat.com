import { About } from "@/components/about/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About // Shaswat Deep",
  description:
    "Shaswat Deep is an Indian software engineer, entrepreneur, and writer. He is the Founder & CEO of Orbizza.",
  openGraph: {
    images: "/static/images/reminder-bw.jpg",
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
