import { Header } from "./header";
import { Footer } from "./footer";
import { GridBackground } from "../grid-background";
import NextTopLoader from 'nextjs-toploader';
import JsonLd from "@/components/seo/ld-json";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <GridBackground />
      <Header />

      <NextTopLoader
        color="#6366F1"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        zIndex={1600}
        showAtBottom={false}
      />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {children}
        </div>
      </main>

      <Footer />

      <JsonLd />
    </div>
  );
}
