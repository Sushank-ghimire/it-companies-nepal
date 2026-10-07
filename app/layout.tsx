import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MainLayout from "@/components/layout/main-layout";
import { defaultMetadata } from "@/lib/seo/metadata";
import ServiceWorkerRegistration from "@/components/worker/service-worker";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
