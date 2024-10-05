import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Ruben Montero",
  description: "Explore insights on software development and technology from Ruben Montero.",
  keywords: ["Ruben Montero", "Blog", "Software Development", "Web Development", "Technology"],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
