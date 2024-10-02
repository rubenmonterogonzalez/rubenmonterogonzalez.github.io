import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NProgressProvider from "@/providers/NProgressProvider";
import { Header } from "@/components/Header";
import Toaster from "@/components/Toaster";
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "Ruben Montero",
  description: "Ruben Montero portfolio's, a software developer based in Malta.",
  keywords: ["Ruben Montero", "Software Developer", "Malta"],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <NProgressProvider>
            <Header />
            {children}
            <Toaster />
          </NProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
