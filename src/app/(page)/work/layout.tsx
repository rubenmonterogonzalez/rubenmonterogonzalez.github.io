import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Ruben Montero",
  description: "A showcase of Ruben Montero's work, including full stack and front-end projects.",
  keywords: ["Ruben Montero", "Full Stack Developer", "Projects", "Portfolio", "Web Development"],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function WorkLayout({
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
