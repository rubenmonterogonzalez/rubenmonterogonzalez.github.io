import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Ruben Montero",
  description: "Get in touch with Ruben Montero, a full stack developer based in Malta.",
  keywords: ["Ruben Montero", "Contact", "Full Stack Developer", "Software Developer", "Malta"],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ContactLayout({
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
