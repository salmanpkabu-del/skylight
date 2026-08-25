import type { Metadata } from "next";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Travel Blog & Guides | Skylight Travel UAE",
  description:
    "Explore travel tips, visa application guides, and destination insights for UAE travellers. Written by Skylight Travel experts in Sharjah.",
  alternates: { canonical: "https://www.skylighttourism.com/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
