import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NProgressProvider from "@/providers/NProgressProvider";
import { Header } from "@/components/Header";
import { Particles } from "@/helpers/particles";

export const metadata: Metadata = {
  title: "Ruben Montero - Sofware Developer",
  description: "Ruben Montero portfolio's, a software developer based in Malta.",
  keywords: ["Ruben Montero", "Software Developer", "Malta"],
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
            <Particles
              className="absolute inset-0 z-10 animate-fade-in"
            />
            <Header />
            {children}
          </NProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
