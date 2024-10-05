import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Ruben Montero",
  description: "Learn more about Ruben Montero, a full stack software developer based in Malta.",
  keywords: ["Ruben Montero", "About", "Software Developer", "Web Development"],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AboutLayout({
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
